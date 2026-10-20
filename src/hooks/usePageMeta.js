import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { admissionFaqs, getArticle, getProgramme, leadership } from '../data/site'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_ALT,
  DEFAULT_TITLE,
  SITE_FULL_NAME,
  SITE_NAME,
  SOCIAL_HANDLE,
  absoluteUrl,
  buildBreadcrumbs,
  buildPageSchema,
} from '../lib/seo'

const ROBOTS_INDEX =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
const ROBOTS_NOINDEX = 'noindex, nofollow'

const pageTypes = {
  '/about': 'AboutPage',
  '/management': 'ProfilePage',
  '/contact': 'ContactPage',
  '/academics': 'CollectionPage',
  '/news': 'CollectionPage',
  '/gallery': 'CollectionPage',
}

const inferPageType = (pathname) => pageTypes[pathname] || 'WebPage'

function setMeta(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`
  let tag = document.head.querySelector(selector)

  if (!content) {
    if (tag) tag.remove()
    return
  }

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function setLink({ rel, hreflang, href }) {
  let selector = `link[rel="${rel}"]`
  if (hreflang) selector += `[hreflang="${hreflang}"]`

  let link = document.head.querySelector(selector)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    if (hreflang) link.setAttribute('hreflang', hreflang)
    document.head.appendChild(link)
  }

  link.setAttribute('href', href)
}

function removeLink({ rel, hreflang }) {
  let selector = `link[rel="${rel}"]`
  if (hreflang) selector += `[hreflang="${hreflang}"]`
  document.head.querySelector(selector)?.remove()
}

function setSchema(schema) {
  let script = document.head.querySelector('script[data-seo-schema]')
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-schema', '')
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(schema)
}

export default function usePageMeta(title, description, options = {}) {
  const location = useLocation()
  const {
    path,
    image = DEFAULT_IMAGE,
    imageAlt = DEFAULT_IMAGE_ALT,
    type = 'website',
    noindex: noindexOption,
    keywords: keywordsOption,
    pageType: pageTypeOption,
    article: articleOption,
    programme: programmeOption,
    person: personOption,
    faqs: faqsOption,
  } = options

  const requestedPath = path || location.pathname
  const pathname =
    requestedPath === '/' ? '/' : requestedPath.replace(/\/+$/, '') || '/'
  const segments = pathname.split('/').filter(Boolean)
  const isArticleRoute = segments[0] === 'news' && segments.length === 2
  const isProgrammeRoute =
    segments[0] === 'academics' &&
    segments[1] === 'programmes' &&
    segments.length === 3

  const article =
    articleOption || (isArticleRoute ? getArticle(segments[1]) : undefined)
  const programme =
    programmeOption ||
    (isProgrammeRoute ? getProgramme(segments[2]) : undefined)
  const person =
    personOption ||
    (pathname === '/management' ? leadership.viceChancellor : undefined)
  const faqs =
    faqsOption || (pathname === '/admissions' ? admissionFaqs : undefined)

  const pageTitle = title === 'Home' ? null : title || null
  const fullTitle = pageTitle ? `${pageTitle} | ${SITE_NAME}` : DEFAULT_TITLE
  const pageDescription = description || DEFAULT_DESCRIPTION
  const canonical = absoluteUrl(pathname)
  const imageUrl = absoluteUrl(image)
  const isArticle = Boolean(article)
  const pageType = pageTypeOption || inferPageType(pathname)
  const inferredNoindex =
    title === 'Page not found' ||
    title === 'Article not found' ||
    title === 'Programme not found' ||
    (isArticleRoute && !article) ||
    (isProgrammeRoute && !programme)
  const noindex = noindexOption ?? inferredNoindex
  const keywords =
    keywordsOption ||
    [
      pageTitle,
      programme?.name,
      article?.category,
      'AAT University',
      'AATU',
      'AbdulRasaq Abubakar Toyin University',
      'Ilorin',
      'Kwara State',
    ]
      .filter(Boolean)
      .join(', ')

  useEffect(() => {
    const breadcrumbs = noindex ? [] : buildBreadcrumbs(pathname, pageTitle)

    document.title = fullTitle
    setMeta('name', 'description', pageDescription)
    setMeta('name', 'author', SITE_FULL_NAME)
    setMeta('name', 'robots', noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX)
    setMeta('name', 'keywords', keywords)

    setMeta('property', 'og:type', isArticle ? 'article' : type)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:locale', 'en_NG')
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', pageDescription)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', imageUrl)
    setMeta('property', 'og:image:type', 'image/jpeg')
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', imageAlt)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:site', SOCIAL_HANDLE)
    setMeta('name', 'twitter:creator', SOCIAL_HANDLE)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', pageDescription)
    setMeta('name', 'twitter:image', imageUrl)
    setMeta('name', 'twitter:image:alt', imageAlt)

    setMeta(
      'property',
      'article:published_time',
      isArticle ? article.date : undefined,
    )
    setMeta(
      'property',
      'article:modified_time',
      isArticle ? article.date : undefined,
    )
    setMeta(
      'property',
      'article:section',
      isArticle ? article.category : undefined,
    )
    setMeta('property', 'article:tag', isArticle ? article.category : undefined)
    setMeta(
      'property',
      'article:author',
      isArticle ? SITE_FULL_NAME : undefined,
    )

    if (noindex) {
      removeLink({ rel: 'canonical' })
      removeLink({ rel: 'alternate', hreflang: 'en-NG' })
      removeLink({ rel: 'alternate', hreflang: 'x-default' })
    } else {
      setLink({ rel: 'canonical', href: canonical })
      setLink({ rel: 'alternate', hreflang: 'en-NG', href: canonical })
      setLink({ rel: 'alternate', hreflang: 'x-default', href: canonical })
    }

    setSchema(
      buildPageSchema({
        path: pathname,
        title: fullTitle,
        description: pageDescription,
        pageType,
        breadcrumbs,
        article,
        programme,
        person,
        faqs,
      }),
    )
  }, [
    article,
    canonical,
    faqs,
    fullTitle,
    imageAlt,
    imageUrl,
    isArticle,
    keywords,
    noindex,
    pageDescription,
    pageTitle,
    pageType,
    pathname,
    person,
    programme,
    type,
  ])
}
