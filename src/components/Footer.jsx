import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { faculties, quickLinks, university } from '../data/site'
import Logo from './Logo'
import { FacebookIcon, InstagramIcon, XIcon } from './SocialIcons'

const socialIcons = [
  { label: 'Facebook', href: university.socials[0].href, Icon: FacebookIcon },
  { label: 'Instagram', href: university.socials[1].href, Icon: InstagramIcon },
  { label: 'X', href: university.socials[2].href, Icon: XIcon },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="h-1 w-full bg-gradient-to-r from-crest-600 via-gold-400 to-navy-600" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-navy-600/20 blur-[120px]" aria-hidden="true" />

      <div className="container-page relative">
        <div className="flex flex-col gap-10 border-b border-white/10 py-14 lg:flex-row lg:items-end lg:justify-between lg:py-16">
          <div className="max-w-2xl">
            <span className="eyebrow !text-navy-300">Admissions 2026/2027</span>
            <h2 className="display mt-5 text-4xl leading-[1.02] sm:text-5xl">
              Begin your journey at
              <br />
              <span className="italic text-gold-300">AAT University.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/admissions#apply" className="btn btn-accent">
              Apply Now
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Talk to Admissions
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:gap-10">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-[0.84rem] leading-relaxed text-white/55">
              {university.tagline}. A community committed to academic excellence, character and
              service.
            </p>
            <p className="mt-5 font-display text-lg italic text-gold-300">“{university.motto}”</p>
            <div className="mt-6 flex items-center gap-2.5">
              {socialIcons.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-crest-500/60 hover:bg-crest-500/10 hover:text-white"
                >
                  <Icon className="size-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/40">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="link-underline text-[0.84rem] text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/40">
              Faculties
            </h3>
            <ul className="mt-5 space-y-3">
              {faculties.map((faculty) => (
                <li key={faculty.id}>
                  <Link
                    to={`/academics#${faculty.id}`}
                    className="link-underline text-[0.84rem] leading-snug text-white/65 transition-colors hover:text-white"
                  >
                    {faculty.shortName}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/40">
              Newsletter
            </h3>
            {subscribed ? (
              <p className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.78rem] text-white/65">
                Thank you. You will receive university updates at your email address.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="flex items-center gap-2 border-b border-white/20 pb-2 transition-colors focus-within:border-white/60">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent text-[0.84rem] text-white placeholder:text-white/35 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to updates"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-crest-600 text-white transition-all hover:scale-105 hover:bg-gold-300 hover:text-navy-950"
                  >
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-[0.84rem] text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/35" aria-hidden="true" />
                <span className="leading-relaxed">{university.address}</span>
              </li>
              {university.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 transition-colors hover:text-white"
                  >
                    <Phone className="size-4 shrink-0 text-white/35" aria-hidden="true" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${university.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-white/35" aria-hidden="true" />
                  {university.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                Admissions Office
              </p>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-white/60">
                Speak with our team about entry requirements, programmes and the 2026/2027
                application process.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-gold-300"
              >
                Send an enquiry
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[0.7rem] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {university.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Oke-Ogba, Ganmo · Ilorin · Kwara State</span>
            <span className="hidden size-1 rounded-full bg-white/25 sm:block" />
            <span>{university.website}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
