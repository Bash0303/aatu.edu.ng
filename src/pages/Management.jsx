import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  FileText,
  Landmark,
  Library,
  Mail,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import usePageMeta from '../hooks/usePageMeta'
import { leadership, university } from '../data/site'

const officeIcons = [FileText, Wallet, Library]
const governanceIcons = [Landmark, Users, BookOpenCheck]

export default function Management() {
  usePageMeta(
    'Leadership & Governance',
    'Meet the Vice-Chancellor and learn about the leadership, principal offices and governance structure of Abdulrasaq Abubakar Toyin University.',
  )

  const { viceChancellor, offices, governance } = leadership

  return (
    <>
      <PageHeader
        eyebrow="Leadership & governance"
        title={
          <>
            Clear leadership for a <span className="italic text-gold-300">shared purpose.</span>
          </>
        }
        description="AAT University is led by its Vice-Chancellor and principal officers, with oversight from the Governing Council and academic leadership through the Academic Board."
        crumbs={[{ label: 'About', to: '/about' }, { label: 'Leadership' }]}
      >
        <Link to="/contact" className="btn btn-light">
          Contact the university
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHeader>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Vice-Chancellor"
            title="Office of the Vice-Chancellor."
            description="The Vice-Chancellor provides academic and administrative leadership for the university and works with the Governing Council to advance institutional development."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal variant="scale">
              <div className="relative flex h-full min-h-[24rem] flex-col justify-between overflow-hidden rounded-2xl bg-navy-950 p-8 text-white sm:p-10">
                <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-crest-600/30 blur-[90px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-gold-400/10 blur-[80px]" aria-hidden="true" />

                <div className="relative flex items-center justify-between">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                    Vice-Chancellor
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    First substantive
                  </span>
                </div>

                <div className="relative mt-12">
                  <div className="grid size-24 place-items-center rounded-full border border-gold-300/30 bg-gradient-to-br from-white/10 to-crest-600/20">
                    <span className="font-display text-4xl tracking-tight text-white">{viceChancellor.initials}</span>
                  </div>
                  <h2 className="mt-6 font-display text-[2rem] leading-[1.05] sm:text-[2.5rem]">
                    {viceChancellor.name}
                  </h2>
                  <p className="mt-2 text-[0.8rem] text-white/55">{viceChancellor.effective}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-navy-950/10 bg-paper p-8 sm:p-10">
                <span className="eyebrow">Profile</span>
                <div className="mt-6 space-y-4 text-[0.9rem] leading-relaxed text-navy-900/75">
                  {viceChancellor.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-5 border-t border-navy-950/10 pt-6">
                  <a
                    href={`mailto:${university.email}`}
                    className="flex items-center gap-2 text-[0.76rem] font-semibold text-navy-900 transition-colors hover:text-crest-700"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    {university.email}
                  </a>
                  <Link
                    to="/news/vice-chancellor-appointment"
                    className="group flex items-center gap-2 text-[0.76rem] font-semibold text-navy-900 transition-colors hover:text-crest-700"
                  >
                    Read the announcement
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-paper py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Principal officers"
            title="The offices that run the university."
            description="The Vice-Chancellor is supported by principal officers responsible for the university’s records, finances and library services."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {offices.map((office, index) => {
              const Icon = officeIcons[index % officeIcons.length]
              return (
                <Reveal key={office.role} delay={index * 100}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-navy-950/30 hover:shadow-[0_28px_56px_-40px_rgba(5,14,34,0.3)]">
                    <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-crest-600 via-gold-400 to-navy-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                    <span className={`grid size-11 place-items-center rounded-full transition-transform duration-500 group-hover:scale-110 ${['bg-blue-50 text-blue-600', 'bg-crest-50 text-crest-600', 'bg-gold-100 text-gold-500'][index % 3]}`}>
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-[1.5rem] text-navy-950">{office.role}</h3>
                    <p className="mt-2.5 flex-1 text-[0.82rem] leading-relaxed text-navy-900/70">
                      {office.description}
                    </p>
                    <p className="mt-6 border-t border-navy-950/10 pt-4 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-navy-900/50">
                      Official profile to be published
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={140}>
            <p className="mt-8 text-center text-[0.72rem] leading-relaxed text-navy-900/55">
              Leadership profiles are published only after official confirmation by the university.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Governance"
                title="Structures that support accountability."
                description="The university’s governance arrangements provide strategic oversight, academic direction and responsible management of institutional resources."
              />
              <Reveal delay={160}>
                <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold-400/30 bg-gold-100/40 p-4">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden="true" />
                  <p className="text-[0.76rem] leading-relaxed text-navy-900/70">
                    Detailed governance information will be published as approved by the university.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="space-y-4">
              {governance.map((body, index) => {
                const Icon = governanceIcons[index % governanceIcons.length]
                return (
                  <Reveal key={body.title} delay={index * 100}>
                    <div className="group flex gap-5 rounded-2xl border border-navy-950/10 bg-paper p-6 transition-all duration-500 hover:border-crest-600/25 hover:shadow-[0_22px_44px_-38px_rgba(5,14,34,0.35)] sm:p-7">
                      <span className={`grid size-11 shrink-0 place-items-center rounded-full ring-1 transition-transform duration-500 group-hover:scale-110 ${['bg-blue-50 text-blue-600 ring-blue-600/15', 'bg-crest-50 text-crest-600 ring-crest-600/15', 'bg-teal-50 text-teal-700 ring-teal-600/15'][index % 3]}`}>
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-[1.4rem] leading-tight text-navy-950">
                          {body.title}
                        </h3>
                        <p className="mt-2 text-[0.82rem] leading-relaxed text-navy-900/70">
                          {body.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-950/10 bg-white pb-20 sm:pb-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-navy-950 p-8 text-white sm:flex-row sm:items-center sm:p-10">
              <div className="flex items-start gap-5">
                <span className="hidden size-12 shrink-0 place-items-center rounded-full bg-crest-600/20 text-gold-300 sm:grid">
                  <Building2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                    University enquiries
                  </p>
                  <p className="mt-1.5 max-w-lg font-display text-[1.6rem] leading-tight sm:text-[1.9rem]">
                    For official correspondence, contact the university.
                  </p>
                  <p className="mt-2 text-[0.8rem] text-white/55">
                    {university.address}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-accent">
                  Contact us
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <a href={`mailto:${university.email}`} className="btn btn-outline-light">
                  <Mail className="size-4" aria-hidden="true" />
                  Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
