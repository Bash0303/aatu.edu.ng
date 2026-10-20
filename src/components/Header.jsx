import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react'
import { navigation, university } from '../data/site'
import Logo from './Logo'

const isActiveClass = ({ isActive }) =>
  `relative py-2 text-[0.82rem] font-semibold tracking-wide transition-colors ${
    isActive ? 'text-navy-950' : 'text-navy-900/75 hover:text-navy-950'
  }`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMobileOpen(false)
      setOpenGroup(null)
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!mobileOpen) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <>
      <div className="h-[3px] w-full bg-gradient-to-r from-crest-600 via-gold-400 to-navy-600" aria-hidden="true" />
      <div
        className={`relative z-50 overflow-hidden bg-navy-950 text-white transition-all duration-500 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
        }`}
      >
        <div className="container-page flex h-10 items-center justify-between gap-6 text-[0.66rem] tracking-wide text-white/65">
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 md:flex">
              <MapPin className="size-3 text-white/40" aria-hidden="true" />
              {university.address}
            </span>
            <a href={`tel:${university.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="size-3 text-white/40" aria-hidden="true" />
              <span className="hidden sm:inline">{university.phones[0]}</span>
              <span className="sm:hidden">Call us</span>
            </a>
            <a href={`mailto:${university.email}`} className="hidden items-center gap-1.5 transition-colors hover:text-white sm:flex">
              <Mail className="size-3 text-white/40" aria-hidden="true" />
              {university.email}
            </a>
          </div>
          <Link
            to="/admissions"
            className="group flex items-center gap-1.5 font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-gold-200"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-400 opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-gold-400" />
            </span>
            <span className="hidden sm:inline">2026/2027 Admissions Open</span>
            <span className="sm:hidden">Admissions open</span>
            <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? 'border-navy-950/10 shadow-[0_8px_30px_-20px_rgba(5,14,34,0.45)]'
            : 'border-transparent'
        }`}
      >
        <div
          className={`container-page flex items-center justify-between gap-6 transition-all duration-300 ${
            scrolled ? 'h-[4.4rem]' : 'h-[4.9rem]'
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <div key={item.label} className="group relative">
                <NavLink to={item.to} className={isActiveClass} end={item.to === '/'}>
                  {({ isActive }) => (
                    <span className="flex items-center gap-1">
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          className="mt-px size-3 text-navy-900/55 transition-transform duration-300 group-hover:rotate-180"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-crest-600 to-gold-400 transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </span>
                  )}
                </NavLink>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-navy-950/10 bg-white p-2 shadow-soft">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="group/item flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-[0.82rem] font-medium text-navy-900/70 transition-colors hover:bg-crest-50 hover:text-crest-700"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="size-1 rounded-full bg-crest-600/0 transition-colors group-hover/item:bg-crest-600" />
                            {child.label}
                          </span>
                          <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover/item:opacity-100" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link to="/contact" className="hidden text-[0.78rem] font-semibold text-navy-900/75 transition-colors hover:text-crest-700 xl:block">
              Enquiries
            </Link>
            <Link to="/admissions#apply" className="btn btn-accent hidden !px-5 !py-3 sm:inline-flex">
              Apply Now
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="grid size-11 place-items-center rounded-full border border-navy-950/10 text-navy-950 transition-colors hover:bg-navy-50 lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close navigation menu"
        />
        <aside
          id="mobile-navigation"
          inert={!mobileOpen}
          className={`absolute right-0 top-0 flex h-full w-[min(92vw,25rem)] flex-col bg-navy-950 text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-crest-600 via-gold-400 to-navy-600" aria-hidden="true" />
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Logo variant="light" compact />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
              aria-label="Close navigation menu"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isOpen = openGroup === item.label
                  return (
                    <li key={item.label} className="border-b border-white/[0.07]">
                      <div className="flex items-center justify-between">
                        <NavLink
                          to={item.to}
                          end={item.to === '/'}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `relative block flex-1 py-4 pl-3 text-[1.05rem] font-medium transition-colors before:absolute before:left-0 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gold-400 before:opacity-0 before:transition-opacity ${
                              isActive
                                ? 'text-white before:opacity-100'
                                : 'text-white/70 hover:text-gold-200 hover:before:opacity-70'
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                        {item.children && (
                          <button
                            type="button"
                            onClick={() => setOpenGroup(isOpen ? null : item.label)}
                            className="grid size-9 place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                            aria-expanded={isOpen}
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <ChevronDown
                              className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                              aria-hidden="true"
                            />
                          </button>
                        )}
                      </div>
                      {item.children && (
                        <div
                          className={`grid transition-all duration-500 ${
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="space-y-1 pb-4 pl-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[0.85rem] text-white/50 transition-colors hover:bg-crest-500/10 hover:text-white"
                                >
                                  <span className="size-1 rounded-full bg-gold-400/50" />
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>

            <Link
              to="/admissions#apply"
              onClick={() => setMobileOpen(false)}
              className="btn btn-accent mt-7 w-full"
            >
              Apply for Admission
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>

            <div className="mt-8 space-y-3 text-[0.78rem] text-white/55">
              <a href={`tel:${university.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="size-4 text-white/35" aria-hidden="true" />
                {university.phones[0]}
              </a>
              <a href={`mailto:${university.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="size-4 text-white/35" aria-hidden="true" />
                {university.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/35" aria-hidden="true" />
                {university.address}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
