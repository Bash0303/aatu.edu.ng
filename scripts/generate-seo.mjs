import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const siteUrl = (process.env.VITE_SITE_URL || 'https://aatu.edu.ng').replace(/\/+$/, '')
const today = new Date().toISOString().slice(0, 10)

const server = await createServer({
  root,
  configFile: join(root, 'vite.config.js'),
  appType: 'custom',
  server: { middlewareMode: true },
  logLevel: 'error',
})

const { programmes, newProgrammes, news } = await server.ssrLoadModule(
  '/src/data/site.js',
)
await server.close()

const routes = new Map()

const addRoute = (path, lastmod = today, changefreq = 'monthly', priority = '0.7') => {
  if (!routes.has(path)) routes.set(path, { lastmod, changefreq, priority })
}

addRoute('/', today, 'weekly', '1.0')
addRoute('/about', today, 'monthly', '0.8')
addRoute('/academics', today, 'weekly', '0.9')
addRoute('/admissions', today, 'weekly', '0.9')
addRoute('/management', today, 'monthly', '0.7')
addRoute('/news', today, 'weekly', '0.8')
addRoute('/gallery', today, 'monthly', '0.6')
addRoute('/contact', today, 'monthly', '0.7')

for (const programme of [...programmes, ...newProgrammes]) {
  addRoute(`/academics/programmes/${programme.slug}`, today, 'monthly', '0.8')
}

for (const article of news) {
  addRoute(`/news/${article.slug}`, article.date || today, 'monthly', '0.7')
}

const urlEntries = [...routes.entries()]
  .map(
    ([path, meta]) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${meta.lastmod}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`,
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const feedItems = [...news]
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((article) => {
    const url = `${siteUrl}/news/${article.slug}`
    return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${article.date}T00:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(article.category)}</category>
      <description>${escapeXml(article.excerpt)}</description>
    </item>`
  })
  .join('\n')

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AAT University News &amp; Announcements</title>
    <link>${siteUrl}/news</link>
    <description>The latest news, official announcements and academic developments from AbdulRasaq Abubakar Toyin University.</description>
    <language>en-ng</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${feedItems}
  </channel>
</rss>
`

await writeFile(join(root, 'public', 'sitemap.xml'), sitemap, 'utf8')
await writeFile(join(root, 'public', 'robots.txt'), robots, 'utf8')
await writeFile(join(root, 'public', 'feed.xml'), feed, 'utf8')

console.log(
  `Generated robots.txt, sitemap.xml (${routes.size} URLs) and feed.xml (${news.length} items).`,
)
