import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHeader({ eyebrow, title, description, crumbs = [], children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-950 to-navy-900 text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-navy-500/25 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-[24rem] rounded-full bg-crest-600/15 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-1/3 top-1/4 size-[18rem] rounded-full bg-gold-400/10 blur-[120px]" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[16rem] leading-none text-white/[0.035] lg:block"
        aria-hidden="true"
      >
        AAT
      </span>

      <div className="container-page relative pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/45">
            <li>
              <Link to="/" className="flex items-center gap-1.5 transition-colors hover:text-white">
                <Home className="size-3" aria-hidden="true" />
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <ChevronRight className="size-3 text-white/25" aria-hidden="true" />
                {crumb.to ? (
                  <Link to={crumb.to} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="eyebrow !text-navy-300">
                {eyebrow}
              </span>
            )}
            <h1 className="display mt-5 text-[2.9rem] leading-[0.96] sm:text-6xl lg:text-[4.4rem]">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-2xl text-[0.93rem] leading-relaxed text-white/60 sm:text-base">
                {description}
              </p>
            )}
          </div>
          {children && <div className="shrink-0">{children}</div>}
        </div>
      </div>

      <div className="h-[3px] w-full bg-gradient-to-r from-crest-600 via-gold-400 to-navy-600 opacity-90" />
    </section>
  )
}
