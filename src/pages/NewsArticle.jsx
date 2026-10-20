import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  FileText,
  Link2,
  Mail,
  MessageCircle,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { absoluteUrl } from '../lib/seo'
import { getArticle, news, university } from '../data/site'

const categoryColors = {
  'University News': 'text-navy-700',
  Announcement: 'text-crest-700',
  'Academic Development': 'text-blue-700',
  Admission: 'text-gold-500',
  Campus: 'text-teal-700',
  Notice: 'text-indigo-700',
}

export default function NewsArticle() {
  const { slug } = useParams()
  const article = getArticle(slug)
  const [copied, setCopied] = useState(false)

  usePageMeta(article ? article.title : 'Article not found', article?.excerpt)

  if (!article) {
    return (
      <section className="bg-white py-28">
        <div className="container-page max-w-xl text-center">
          <p className="eyebrow justify-center">Article not found</p>
          <h1 className="display mt-5 text-5xl text-navy-950">This story could not be found.</h1>
          <p className="mt-5 text-[0.92rem] leading-relaxed text-navy-900/70">
            The article may have been moved or is no longer available. Browse the latest university
            news and announcements instead.
          </p>
          <Link to="/news" className="btn btn-primary mt-8">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to news
          </Link>
        </div>
      </section>
    )
  }

  const related = news.filter((item) => item.slug !== article.slug).slice(0, 3)
  const shareUrl = absoluteUrl(`/news/${article.slug}`)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <PageHeader
        eyebrow={`${article.category} · ${article.displayDate}`}
        title={article.title}
        description={article.excerpt}
        crumbs={[{ label: 'News & Media', to: '/news' }, { label: article.category, to: '/news' }]}
      >
        <div className="flex flex-col gap-4 rounded-xl border border-white/15 bg-white/[0.05] p-5 backdrop-blur-sm sm:min-w-[16rem]">
          <div className="flex items-center gap-5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white/55">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {article.displayDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {article.readTime}
            </span>
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 pt-4">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/40">
              Share
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="grid size-8 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold-300/60 hover:text-gold-200"
              aria-label={copied ? 'Link copied' : 'Copy article link'}
            >
              {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Link2 className="size-3.5" aria-hidden="true" />}
            </button>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`}
              className="grid size-8 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold-300/60 hover:text-gold-200"
              aria-label="Share by email"
            >
              <Mail className="size-3.5" aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`}
              target="_blank"
              rel="noreferrer"
              className="grid size-8 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold-300/60 hover:text-gold-200"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle className="size-3.5" aria-hidden="true" />
            </a>
          </div>
          {copied && (
            <p className="text-[0.64rem] text-white/60" role="status">
              Link copied to clipboard.
            </p>
          )}
        </div>
      </PageHeader>

      <article className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <div>
              <div className="overflow-hidden rounded-2xl bg-navy-100">
                <img
                  src={article.image}
                  alt={article.imageAlt || ''}
                  style={{ objectPosition: article.imagePosition || 'center' }}
                  className={`${article.imageAspect || 'aspect-[16/9] sm:aspect-[21/9]'} max-h-[34rem] w-full ${
                    article.imageFit === 'contain'
                      ? 'bg-paper object-contain p-3 sm:p-6'
                      : 'object-cover'
                  }`}
                />
              </div>
              {article.imageCaption && (
                <p className="mt-3 text-[0.68rem] leading-relaxed text-navy-900/55">
                  {article.imageCaption}
                </p>
              )}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div className="max-w-3xl">
              <Reveal>
                <div className="space-y-6 text-[0.95rem] leading-[1.85] text-navy-900/70">
                  {article.content.map((paragraph, index) =>
                    index === 0 ? (
                      <p
                        key={paragraph.slice(0, 30)}
                        className="text-[1.08rem] leading-[1.8] text-navy-900/80 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[3.6rem] first-letter:leading-[0.8] first-letter:text-navy-950"
                      >
                        {paragraph}
                      </p>
                    ) : (
                      <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                    ),
                  )}
                </div>
              </Reveal>

              {article.documents?.length > 0 && (
                <Reveal delay={80}>
                  <div className="mt-10">
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-9 place-items-center rounded-full bg-navy-950 text-white">
                        <FileText className="size-3.5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-crest-700">
                          Official documents
                        </p>
                        <p className="mt-0.5 text-[0.72rem] text-navy-900/55">
                          Primary source material relating to this story.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-6">
                      {article.documents.map((document) => (
                        <figure
                          key={document.src}
                          className="overflow-hidden rounded-2xl border border-navy-950/10 bg-paper"
                        >
                          <div className="bg-white p-3 sm:p-5">
                            <img
                              src={document.src}
                              alt={document.alt}
                              loading="lazy"
                              decoding="async"
                              className="mx-auto block max-h-[42rem] w-auto max-w-full object-contain"
                            />
                          </div>
                          <figcaption className="border-t border-navy-950/10 p-5 sm:p-6">
                            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                              <div>
                                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-navy-900/55">
                                  {document.label}
                                </p>
                                <p className="mt-1 font-display text-[1.2rem] leading-tight text-navy-950">
                                  {document.title}
                                </p>
                              </div>
                              <a
                                href={document.src}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex shrink-0 items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:text-crest-700"
                              >
                                View full size
                                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                              </a>
                            </div>
                            <p className="mt-3 text-[0.78rem] leading-relaxed text-navy-900/65">
                              {document.caption}
                            </p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              <Reveal delay={100}>
                <div className="relative my-10 overflow-hidden rounded-2xl border border-gold-400/30 bg-gold-100/40 p-7 sm:p-8">
                  <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-crest-600 to-gold-400" aria-hidden="true" />
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-crest-700">
                    {university.name}
                  </p>
                  <p className="mt-3 font-display text-[1.8rem] leading-tight text-navy-950 sm:text-[2.2rem]">
                    “{university.motto}”
                  </p>
                  <p className="mt-3 text-[0.78rem] text-navy-900/65">
                    Oke-Ogba, Ganmo · Ilorin, Kwara State
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="flex flex-col items-start justify-between gap-5 border-t border-navy-950/10 pt-8 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900/65">
                    <span className="grid size-9 place-items-center rounded-full bg-navy-950 text-white">
                      <ArrowLeft className="size-3.5" aria-hidden="true" />
                    </span>
                    <Link to="/news" className="link-underline text-navy-900">
                      Back to all news
                    </Link>
                  </div>
                  <Link to="/news" className="btn btn-outline">
                    More stories
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-navy-950/10 bg-paper p-6">
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crest-600 to-gold-400" aria-hidden="true" />
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-crest-700">
                    Admissions
                  </p>
                  <p className="mt-3 font-display text-[1.35rem] leading-tight text-navy-950">
                    Ready to take the next step?
                  </p>
                  <p className="mt-2 text-[0.78rem] leading-relaxed text-navy-900/70">
                    Review entry requirements and begin your application for the 2026/2027 session.
                  </p>
                  <Link to="/admissions" className="btn btn-accent mt-5 w-full">
                    Apply now
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="rounded-2xl border border-navy-950/10 bg-white p-6">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                    Media enquiries
                  </p>
                  <p className="mt-3 text-[0.78rem] leading-relaxed text-navy-900/70">
                    For official university information, contact the university directly.
                  </p>
                  <a
                    href={`mailto:${university.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-[0.74rem] font-semibold text-navy-900 transition-colors hover:text-crest-700"
                  >
                    {university.email}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </article>

      <section className="border-t border-navy-950/10 bg-paper py-16 sm:py-20">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Keep reading</span>
              <h2 className="display mt-4 text-[2rem] text-navy-950 sm:text-[2.5rem]">
                More from AATU.
              </h2>
            </div>
            <Link
              to="/news"
              className="group hidden items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:text-crest-700 sm:flex"
            >
              <span className="link-underline">All news</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 90}>
                <Link
                  to={`/news/${item.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-crest-600/30 hover:shadow-[0_24px_48px_-38px_rgba(5,14,34,0.35)]"
                >
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-crest-600 via-gold-400 to-navy-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  <div className="flex flex-wrap items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-navy-900/55">
                    <span className={categoryColors[item.category] || 'text-navy-700'}>{item.category}</span>
                    <span className="size-1 rounded-full bg-navy-900/20" />
                    <span>{item.displayDate}</span>
                  </div>
                  <h3 className="mt-3 font-display text-[1.35rem] leading-[1.15] text-navy-950 transition-colors group-hover:text-crest-700">
                    {item.title}
                  </h3>
                  <span className="mt-5 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-navy-900">
                    Read article
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
