import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react'

const categoryPalette = {
  'University News': { background: '#e0f2fe', color: '#0369a1' },
  Announcement: { background: '#ffe4e6', color: '#be123c' },
  'Academic Development': { background: '#ede9fe', color: '#6d28d9' },
  Admission: { background: '#fef3c7', color: '#b45309' },
  Campus: { background: '#d1fae5', color: '#047857' },
  Notice: { background: '#e2e8f0', color: '#334155' },
}

const fallbackPalette = { background: '#f1f5fb', color: '#1d3c6f' }

export default function NewsCard({ article, featured = false }) {
  const palette = categoryPalette[article.category] || fallbackPalette

  return (
    <Link
      to={`/news/${article.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-navy-950/25 hover:shadow-[0_32px_64px_-40px_rgba(5,14,34,0.35)] ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <span
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-crest-600 via-gold-400 to-navy-600 transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div
        className={`relative overflow-hidden bg-navy-100 ${
          featured ? 'aspect-[16/10] lg:aspect-auto lg:w-[46%] lg:min-h-[22rem]' : 'aspect-[16/10]'
        }`}
      >
        <img
          src={article.image}
          alt=""
          loading="lazy"
          style={{ objectPosition: article.imagePosition || 'center' }}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <span
          className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] shadow-sm backdrop-blur"
          style={{ backgroundColor: palette.background, color: palette.color }}
        >
          <span className="size-1.5 rounded-full" style={{ backgroundColor: palette.color }} />
          {article.category}
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? 'lg:justify-center lg:p-9' : ''}`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.66rem] font-medium uppercase tracking-[0.12em] text-navy-900/60">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-3" aria-hidden="true" />
            {article.displayDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3" aria-hidden="true" />
            {article.readTime}
          </span>
        </div>

        <h3
          className={`mt-3 font-display leading-[1.08] tracking-[-0.01em] text-navy-950 transition-colors group-hover:text-crest-700 ${
            featured ? 'text-[1.9rem] sm:text-[2.3rem]' : 'text-[1.45rem]'
          }`}
        >
          {article.title}
        </h3>
        <p className={`mt-3 text-[0.85rem] leading-relaxed text-navy-900/70 ${featured ? 'max-w-lg' : 'line-clamp-3'}`}>
          {article.excerpt}
        </p>

        <span className="mt-6 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-900">
          Read article
          <span className="grid size-7 place-items-center rounded-full bg-navy-50 text-navy-700 transition-all duration-300 group-hover:bg-crest-600 group-hover:text-white">
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </span>
        </span>
      </div>
    </Link>
  )
}
