import { university } from '../data/site'

const configuredUrl = import.meta.env.VITE_SITE_URL || 'https://aatu.edu.ng'

export const SITE_URL = configuredUrl.replace(/\/+$/, '')
export const SITE_NAME = 'AAT University'
export const SITE_FULL_NAME = university.name
export const DEFAULT_TITLE = `${SITE_NAME} | ${university.motto}`
export const DEFAULT_DESCRIPTION =
  'Abdulrasaq Abubakar Toyin University (AATU) is a private not-for-profit university in Oke-Ogba, Ganmo, Ilorin, Kwara State, Nigeria, advancing generational development.'
export const DEFAULT_IMAGE = `${SITE_URL}/og-aatu.jpg`
export const DEFAULT_IMAGE_ALT =
  'AAT University campus in Oke-Ogba, Ganmo, Ilorin, Kwara State, Nigeria'
export const SOCIAL_HANDLE = '@aatu_ng'
export const CONTACT_EMAIL = university.email
export const CONTACT_PHONE = university.phones[0]

const PLACEHOLDER_SOCIALS = new Set([
  'https://www.facebook.com/',
  'https://www.instagram.com/',
  'https://x.com/',
])

const socialProfiles = university.socials
  .map(({ href }) => href)
  .filter((href) => href && !PLACEHOLDER_SOCIALS.has(href))

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export const organizationSchema = {
  '@type': 'CollegeOrUniversity',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_FULL_NAME,
  alternateName: [SITE_NAME, university.abbreviation, 'AATU Ilorin'],
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
  },
  image: DEFAULT_IMAGE,
  description: DEFAULT_DESCRIPTION,
  slogan: university.motto,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Oke-Ogba, Ganmo',
    addressLocality: 'Ilorin',
    addressRegion: 'Kwara State',
    addressCountry: 'NG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_PHONE,
    contactType: 'Admissions',
    email: CONTACT_EMAIL,
    areaServed: 'NG',
    availableLanguage: ['en'],
  },
  ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: SITE_FULL_NAME,
  description: DEFAULT_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-NG',
}

const routeLabels = {
  about: 'About',
  academics: 'Academics',
  admissions: 'Admissions',
  management: 'Leadership & Governance',
  news: 'News & Media',
  gallery: 'Campus Gallery',
  contact: 'Contact',
}

const humanize = (value) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export function buildBreadcrumbs(pathname, title) {
  const segments = pathname.split('/').filter(Boolean)
  if (!segments.length) return []

  const crumbs = [{ name: 'Home', path: '/' }]
  let current = ''

  segments.forEach((segment, index) => {
    current += `/${segment}`
    if (segment === 'programmes') return

    const isLast = index === segments.length - 1
    const label =
      routeLabels[segment] ||
      (isLast && title ? title : humanize(segment))

    crumbs.push({ name: label, path: current })
  })

  return crumbs
}

export function breadcrumbSchema(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(crumbs[crumbs.length - 1]?.path || '/')}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}

export function articleSchema(article) {
  const url = absoluteUrl(`/news/${article.slug}`)

  return {
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    image: [DEFAULT_IMAGE],
    datePublished: article.date,
    dateModified: article.date,
    articleSection: article.category,
    inLanguage: 'en-NG',
    isAccessibleForFree: true,
    author: {
      '@type': 'Organization',
      name: SITE_FULL_NAME,
      url: `${SITE_URL}/`,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@id': `${url}#webpage` },
  }
}

export function programmeSchema(programme) {
  const url = absoluteUrl(`/academics/programmes/${programme.slug}`)

  return {
    '@type': 'Course',
    '@id': `${url}#course`,
    name: programme.name,
    description: programme.summary,
    url,
    inLanguage: 'en-NG',
    educationalCredentialAwarded: programme.award,
    provider: { '@id': `${SITE_URL}/#organization` },
  }
}

export function faqSchema(faqs) {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl('/admissions')}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildPageSchema({
  path,
  title,
  description,
  pageType = 'WebPage',
  breadcrumbs = [],
  article,
  programme,
  faqs,
}) {
  const url = absoluteUrl(path)
  const graph = [
    {
      '@type': pageType,
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-NG',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: DEFAULT_IMAGE,
        width: 1200,
        height: 630,
        caption: DEFAULT_IMAGE_ALT,
      },
    },
  ]

  if (breadcrumbs.length) graph.push(breadcrumbSchema(breadcrumbs))
  if (article) graph.push(articleSchema(article))
  if (programme) graph.push(programmeSchema(programme))
  if (faqs?.length) graph.push(faqSchema(faqs))

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
