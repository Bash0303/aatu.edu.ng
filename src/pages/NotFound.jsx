import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, GraduationCap, Mail } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found')

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-0 size-[32rem] rounded-full bg-crest-600/20 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-[24rem] rounded-full bg-gold-400/10 blur-[120px]" aria-hidden="true" />
      <span
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display text-[16rem] leading-none text-white/[0.04] sm:text-[26rem]"
        aria-hidden="true"
      >
        404
      </span>

      <div className="container-page relative">
        <p className="eyebrow !text-gold-300">Page not found</p>
        <h1 className="display mt-5 max-w-3xl text-[3.2rem] leading-[0.95] sm:text-6xl lg:text-[5rem]">
          This page has taken a <span className="italic text-gold-300">different path.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/60">
          The page you are looking for may have been moved, renamed or is no longer available.
          Explore the university using the links below.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-accent">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link to="/academics" className="btn btn-outline-light">
            Explore programmes
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-16 grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            { icon: GraduationCap, label: 'Academics', to: '/academics' },
            { icon: Compass, label: 'Admissions', to: '/admissions' },
            { icon: Mail, label: 'Contact us', to: '/contact' },
          ].map((item, index) => {
            const Icon = item.icon
            const iconColors = ['text-blue-300', 'text-gold-300', 'text-crest-200']
            return (
              <Link
                key={item.label}
                to={item.to}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"
              >
                <span className="flex items-center gap-3 text-[0.8rem] font-medium text-white/75">
                  <Icon className={`size-4 ${iconColors[index % iconColors.length]}`} aria-hidden="true" />
                  {item.label}
                </span>
                <ArrowUpRight className="size-4 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
