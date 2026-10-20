import { Link } from 'react-router-dom'
import { images } from '../data/site'

export default function Logo({ variant = 'dark', compact = false, to = '/' }) {
  const isLight = variant === 'light'

  return (
    <Link to={to} className="group flex items-center gap-3" aria-label="AAT University home">
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-navy-950/10 transition-transform duration-500 group-hover:scale-105 sm:size-12 lg:size-[3.25rem]">
        <img
          src={images.logo}
          alt=""
          className="h-full w-full scale-[1.14] object-cover"
          width="52"
          height="52"
        />
      </span>
      <span className="flex min-w-0 flex-col">
        <span
          className={`font-display text-[1.45rem] leading-[0.95] tracking-[-0.01em] sm:text-[1.6rem] ${
            isLight ? 'text-white' : 'text-navy-950'
          }`}
        >
          AAT University
        </span>
        {!compact && (
          <span
            className={`mt-1 text-[0.52rem] font-semibold uppercase leading-tight tracking-[0.18em] sm:text-[0.56rem] ${
              isLight ? 'text-white/50' : 'text-navy-900/70'
            }`}
          >
            AbdulRasaq Abubakar Toyin
          </span>
        )}
      </span>
    </Link>
  )
}
