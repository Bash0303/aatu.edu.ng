import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { FacebookIcon, InstagramIcon, XIcon } from '../components/SocialIcons'
import usePageMeta from '../hooks/usePageMeta'
import { university } from '../data/site'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: 'Admissions enquiry',
  message: '',
}

const subjects = [
  'Admissions enquiry',
  'Academic enquiry',
  'General enquiry',
  'Media enquiry',
  'Campus visit',
]

const enquiryEmails = {
  'Admissions enquiry': 'admission@aatu.edu.ng',
  'Academic enquiry': 'acaplanning@aatu.edu.ng',
  'General enquiry': 'info.aatu@aatu.edu.ng',
  'Media enquiry': 'university.relation@aatu.edu.ng',
  'Campus visit': 'info.aatu@aatu.edu.ng',
}

const socialLinks = [
  { label: 'Facebook', href: university.socials[0].href, Icon: FacebookIcon },
  { label: 'Instagram', href: university.socials[1].href, Icon: InstagramIcon },
  { label: 'X', href: university.socials[2].href, Icon: XIcon },
]

export default function Contact() {
  usePageMeta(
    'Contact Us',
    'Contact AbdulRasaq Abubakar Toyin University, Oke-Ogba, Ganmo, Ilorin, Kwara State. Telephone, email, campus location and enquiry form.',
  )

  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let’s start a <span className="italic text-gold-300">conversation.</span>
          </>
        }
        description="Whether you are considering an application, planning a campus visit or seeking official university information, our team is ready to help."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-950 p-8 text-white sm:p-10">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 size-72 rounded-full bg-crest-600/25 blur-[100px]" aria-hidden="true" />
              <div className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full bg-gold-400/10 blur-[80px]" aria-hidden="true" />

              <div className="relative">
                <span className="eyebrow !text-gold-300">Get in touch</span>
                <h2 className="display mt-5 text-[2.3rem] leading-[1.02] sm:text-[2.8rem]">
                  University enquiries.
                </h2>
                <p className="mt-4 text-[0.86rem] leading-relaxed text-white/55">
                  Reach the university through the official channels below. For admission-specific
                  questions, the Admissions Office will guide you.
                </p>
              </div>

              <div className="relative mt-9 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold-300/25 bg-gold-400/10 text-gold-300">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Campus address
                    </p>
                    <p className="mt-1.5 text-[0.86rem] leading-relaxed text-white/75">
                      {university.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-blue-400/25 bg-blue-400/10 text-blue-300">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Telephone
                    </p>
                    <div className="mt-1.5 space-y-1">
                      {university.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block text-[0.86rem] text-white/75 transition-colors hover:text-white"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-crest-400/30 bg-crest-500/10 text-crest-200">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Email
                    </p>
                    <a
                      href={`mailto:${university.email}`}
                      className="mt-1.5 block text-[0.86rem] text-white/75 transition-colors hover:text-white"
                    >
                      {university.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-teal-400/25 bg-teal-400/10 text-teal-300">
                    <Globe className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Official website
                    </p>
                    <p className="mt-1.5 text-[0.86rem] text-white/75">{university.website}</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-auto pt-10">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                  Follow the university
                </p>
                <div className="mt-3 flex items-center gap-2.5">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid size-10 place-items-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-crest-400/60 hover:bg-crest-600/20 hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-2xl border border-navy-950/10 bg-paper p-7 sm:p-9">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crest-600 via-gold-400 to-navy-500" aria-hidden="true" />
              <SectionHeading
                eyebrow="Send a message"
                title="How can we help?"
                description="Complete the form and the university will respond using the contact details you provide."
              />

              {submitted && (
                <div
                  className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-600/20 bg-emerald-50 p-4"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <div>
                    <p className="text-[0.84rem] font-semibold text-navy-950">Message prepared</p>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-navy-900/70">
                      Thank you for your enquiry. This demonstration form does not transmit data;
                      please contact the university directly by telephone or email for an official
                      response.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy-900/70">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="field"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy-900/70">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="field"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy-900/70">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234"
                    className="field"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="subject" className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy-900/70">
                    Enquiry type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="field"
                  >
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 flex flex-wrap items-center gap-1.5 text-[0.7rem] leading-relaxed text-navy-900/60">
                    <Mail className="size-3.5 shrink-0 text-crest-700" aria-hidden="true" />
                    <span>
                      Send to:{' '}
                      <a
                        href={`mailto:${enquiryEmails[form.subject]}`}
                        className="font-semibold text-crest-700 underline-offset-2 transition-colors hover:text-crest-800 hover:underline"
                      >
                        {enquiryEmails[form.subject]}
                      </a>
                    </span>
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy-900/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="field resize-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn btn-accent w-full sm:w-auto">
                    Send message
                    <Send className="size-4" aria-hidden="true" />
                  </button>
                  <p className="mt-3 text-[0.68rem] leading-relaxed text-navy-900/55">
                    By submitting an enquiry, you agree that the university may contact you using
                    the details provided.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy-950/10 bg-paper py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Find us"
              title="On the map."
              description="The university is located at Oke-Ogba, Ganmo, Ilorin, Kwara State. Please confirm arrangements with the university before travelling."
            />
            <a
              href="https://maps.google.com/?q=Ganmo,+Kwara+State,+Nigeria"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:text-crest-700"
            >
              <span className="link-underline">Open in Google Maps</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl border border-navy-950/10 bg-navy-100">
              <iframe
                title="Map showing Ganmo, Ilorin, Kwara State, Nigeria"
                src="https://maps.google.com/maps?q=Ganmo%2C%20Kwara%20State%2C%20Nigeria&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[35%] transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-navy-950/10 bg-white p-6 sm:flex-row sm:items-center sm:p-7">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy-900/55">
                  Admissions
                </p>
                <p className="mt-1.5 text-[0.88rem] text-navy-900/75">
                  Looking for entry requirements or application guidance?
                </p>
              </div>
              <Link to="/admissions" className="btn btn-accent shrink-0">
                Admissions information
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
