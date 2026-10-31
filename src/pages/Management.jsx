import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  Briefcase,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  FileText,
  FlaskConical,
  GraduationCap,
  Home,
  Landmark,
  Library,
  Mail,
  MapPin,
  Quote,
  ScrollText,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import usePageMeta from '../hooks/usePageMeta'
import { leadership, leadershipProfiles, university } from '../data/site'

const officeIcons = [FileText, Wallet, Library]
const governanceIcons = [Landmark, Users, BookOpenCheck]

function ArticleHeading({ id, eyebrow, title, description, icon: Icon }) {
  return (
    <div id={id} className="scroll-mt-28">
      <span className="eyebrow">{eyebrow}</span>
      <div className="mt-4 flex items-start gap-4">
        {Icon && (
          <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full bg-navy-950 text-gold-300">
            <Icon className="size-4" aria-hidden="true" />
          </span>
        )}
        <h2 className="display text-[2.2rem] leading-[1] text-navy-950 sm:text-[2.7rem]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-4 max-w-2xl text-[0.9rem] leading-relaxed text-navy-900/70">
          {description}
        </p>
      )}
    </div>
  )
}

export default function Management() {
  usePageMeta(
    'Vice-Chancellor',
    'Professor Olayemi Mikail Olaniyi is the first substantive Vice-Chancellor of AbdulRasaq Abubakar Toyin University (AATU), Ganmo, Kwara State. Read his profile, education, research and leadership record.',
  )

  const { viceChancellor: vc, offices, governance } = leadership

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 top-0 size-[34rem] rounded-full bg-navy-500/25 blur-[140px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 bottom-0 size-[26rem] rounded-full bg-crest-600/15 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-1/3 top-1/4 size-[18rem] rounded-full bg-gold-400/10 blur-[120px]" aria-hidden="true" />

        <div className="container-page relative pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/45">
              <li>
                <Link to="/" className="flex items-center gap-1.5 transition-colors hover:text-white">
                  <Home className="size-3" aria-hidden="true" />
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="size-3 text-white/25" aria-hidden="true" />
                <Link to="/about" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="size-3 text-white/25" aria-hidden="true" />
                <span className="text-white/70">Leadership</span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
            <div>
              <span className="eyebrow !text-gold-300">Office of the Vice-Chancellor</span>
              <h1 className="display mt-5 text-[2.8rem] leading-[0.94] sm:text-6xl lg:text-[4.6rem]">
                Professor Olayemi{' '}
                <br />
                <span className="italic text-gold-300">Mikail Olaniyi</span>
              </h1>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-[0.72rem]">
                <span>{vc.title}</span>
                <span className="size-1 rounded-full bg-gold-300" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-gold-300" aria-hidden="true" />
                  Appointed 4 September 2026
                </span>
              </p>
              <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-white/65 sm:text-base">
                {vc.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${university.email}`} className="btn btn-light">
                  <Mail className="size-4" aria-hidden="true" />
                  Contact the office
                </a>
                <Link to="/news/vice-chancellor-appointment" className="btn btn-outline-light">
                  Read the announcement
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:ml-auto">
              <div className="pointer-events-none absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-gold-400/25 via-crest-500/15 to-transparent blur-2xl" aria-hidden="true" />
              <figure className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-2 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                <img
                  src={vc.image}
                  alt={`Portrait of ${vc.name}, ${vc.title} of AAT University`}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
                  style={{ objectPosition: vc.imagePosition }}
                />
                <figcaption className="flex items-center justify-between gap-3 px-4 py-4">
                  <div>
                    <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
                      In office
                    </p>
                    <p className="mt-1 text-[0.78rem] font-medium text-white">
                      Since 4 September 2026
                    </p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full border border-gold-300/25 bg-gold-400/10 text-gold-300">
                    <BadgeCheck className="size-5" aria-hidden="true" />
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {vc.stats.map((stat) => (
              <div key={stat.label} className="bg-navy-950/80 px-5 py-6 backdrop-blur sm:px-6">
                <p className="font-display text-[2rem] leading-none text-gold-300">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[3px] w-full bg-gradient-to-r from-crest-600 via-gold-400 to-navy-600 opacity-90" />
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <aside className="contents lg:block lg:space-y-6 lg:self-start">
            <Reveal className="order-1 lg:order-none">
              <div className="rounded-2xl border border-navy-950/10 bg-paper p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="eyebrow">Quick facts</span>
                </div>
                <dl className="mt-6 space-y-4">
                  {vc.quickFacts.map((fact) => (
                    <div key={fact.label} className="border-b border-navy-950/10 pb-4 last:border-0 last:pb-0">
                      <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-navy-900/45">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-[0.82rem] font-medium leading-relaxed text-navy-950">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={100} className="order-3 lg:order-none">
              <div className="rounded-2xl bg-navy-950 p-6 text-white sm:p-7">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
                  Areas of expertise
                </p>
                <ul className="mt-5 space-y-3">
                  {vc.specialisations.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.8rem] leading-relaxed text-white/70">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-300" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160} className="order-4 lg:order-none">
              <div className="rounded-2xl border border-navy-950/10 bg-white p-6 sm:p-7">
                <div className="flex items-center gap-2.5 text-navy-900">
                  <MapPin className="size-4 text-crest-600" aria-hidden="true" />
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
                    University
                  </p>
                </div>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-navy-900/65">
                  {university.address}
                </p>
                <a
                  href={`mailto:${university.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-[0.76rem] font-semibold text-navy-900 transition-colors hover:text-crest-700"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  {university.email}
                </a>
              </div>
            </Reveal>
          </aside>

          <div className="order-2 space-y-16 lg:order-none">
            <Reveal>
              <article>
                <ArticleHeading
                  id="profile"
                  eyebrow="Profile"
                  title="A scholar called to lead."
                  icon={BookOpenCheck}
                />
                <div className="mt-6 space-y-5 text-[0.93rem] leading-relaxed text-navy-900/75">
                  {vc.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-navy-950/10 bg-paper p-5">
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-crest-700">
                      Academic foundation
                    </p>
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-navy-900/70">
                      Computer Engineering, with doctoral research in Computer Security.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-navy-950/10 bg-paper p-5">
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-crest-700">
                      Leadership focus
                    </p>
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-navy-900/70">
                      Academic quality, research capacity and institutional development.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <section id="education">
                <ArticleHeading
                  eyebrow="Early life & education"
                  title="A foundation built in Ibadan."
                  description="Born in Ibadan, Oyo State, Professor Olaniyi began his education in the city before progressing through a distinguished programme of study in computer technology, engineering and computer science."
                  icon={GraduationCap}
                />
                <div className="mt-8">
                  {vc.education.map((item) => (
                    <div
                      key={`${item.year}-${item.qualification}`}
                      className="relative grid gap-2 border-l border-navy-950/15 pb-8 pl-6 last:pb-0 sm:grid-cols-[6rem_1fr] sm:gap-6 sm:pl-8"
                    >
                      <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-gold-400 ring-4 ring-white" aria-hidden="true" />
                      <p className="font-display text-[1.4rem] leading-none text-crest-700">
                        {item.year}
                      </p>
                      <div>
                        <h3 className="font-display text-[1.35rem] leading-[1.15] text-navy-950">
                          {item.qualification}
                        </h3>
                        <p className="mt-1.5 text-[0.8rem] leading-relaxed text-navy-900/60">
                          {item.institution}
                        </p>
                        {item.note && (
                          <p className="mt-2 inline-flex rounded-full bg-gold-100 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-gold-600">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="career">
                <ArticleHeading
                  eyebrow="Academic & professional career"
                  title="From graduate assistant to Vice-Chancellor."
                  description="His career has progressed through teaching, research and senior academic administration at Bells University of Technology, FUTMINNA and the National Open University of Nigeria."
                  icon={Briefcase}
                />
                <div className="mt-8">
                  {vc.career.map((item) => (
                    <div
                      key={`${item.period}-${item.role}`}
                      className="relative border-l border-navy-950/15 pb-8 pl-6 last:pb-0 sm:pl-8"
                    >
                      <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-crest-600 ring-4 ring-white" aria-hidden="true" />
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-crest-700">
                        {item.period}
                      </p>
                      <h3 className="mt-1.5 font-display text-[1.35rem] leading-tight text-navy-950">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-[0.8rem] font-medium text-navy-900/65">
                        {item.organisation}
                      </p>
                      {item.detail && (
                        <p className="mt-2 text-[0.82rem] leading-relaxed text-navy-900/60">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 top-10 size-[26rem] rounded-full bg-crest-600/15 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-[24rem] rounded-full bg-gold-400/10 blur-[120px]" aria-hidden="true" />

        <div className="container-page relative">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <SectionHeading
              tone="light"
              eyebrow="Research, grants & scholarly distinction"
              title="Scholarship with measurable reach."
              description={vc.research.summary}
            />
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '195+', label: 'Publications' },
                { value: '₦350m+', label: 'Research grants' },
                { value: vc.research.scholar.citations, label: 'Citations' },
                { value: vc.research.scholar.hIndex, label: 'h-index' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                >
                  <p className="font-display text-[2.1rem] leading-none text-gold-300">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold-400/10 text-gold-300">
                  <FlaskConical className="size-5" aria-hidden="true" />
                </span>
                <p className="max-w-3xl text-[0.86rem] leading-relaxed text-white/70">
                  {vc.research.highlight}
                </p>
              </div>
              <p className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                Google Scholar · h-index {vc.research.scholar.hIndex}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Administrative leadership"
            title="A record of institutional service."
            description="Professor Olaniyi has held senior administrative positions at Bells University of Technology, FUTMINNA and NOUN, serving on more than thirty university committees as chairman or member."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {vc.administrativeRoles.map((role, index) => (
              <Reveal key={`${role.period}-${role.role}`} delay={(index % 4) * 70}>
                <div className="group flex h-full gap-4 rounded-2xl border border-navy-950/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-crest-600/25 hover:shadow-[0_24px_48px_-38px_rgba(5,14,34,0.35)]">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy-950 text-[0.6rem] font-semibold text-white transition-colors duration-300 group-hover:bg-crest-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-crest-700">
                      {role.period}
                    </p>
                    <h3 className="mt-1.5 font-display text-[1.15rem] leading-snug text-navy-950">
                      {role.role}
                    </h3>
                    <p className="mt-1 text-[0.76rem] leading-relaxed text-navy-900/60">
                      {role.organisation}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Accreditation & academic service"
              title="Building confidence in academic standards."
              description="His leadership has been tested through accreditation, external examination and national assessment of academic programmes."
            />
            <Reveal delay={160}>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gold-400/30 bg-gold-100/40 p-5">
                <ScrollText className="mt-0.5 size-5 shrink-0 text-gold-500" aria-hidden="true" />
                <p className="text-[0.78rem] leading-relaxed text-navy-900/70">
                  National accreditation, external examination and peer assessment are central to
                  how he supports academic quality across Nigerian universities.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {vc.accreditation.map((item, index) => (
              <Reveal key={item.slice(0, 32)} delay={index * 70}>
                <div className="flex gap-4 rounded-2xl border border-navy-950/10 bg-paper p-5 transition-colors duration-300 hover:border-teal-600/25 sm:p-6">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-600/15">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-[0.84rem] leading-relaxed text-navy-900/70">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Awards & honours"
            title="Recognition earned through service and scholarship."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {vc.awards.map((award, index) => (
              <Reveal key={award.title} delay={index * 80}>
                <div className="group flex h-full gap-4 rounded-2xl border border-navy-950/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-[0_24px_48px_-38px_rgba(5,14,34,0.3)]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-500 transition-transform duration-500 group-hover:scale-110">
                    <Award className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.25rem] leading-tight text-navy-950">
                      {award.title}
                    </h3>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-navy-900/65">
                      {award.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <SectionHeading
            eyebrow="Professional memberships"
            title="Committed to the profession."
            description="Professor Olaniyi holds membership of leading professional and learned bodies in computing, engineering and security."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {vc.memberships.map((membership, index) => (
              <Reveal key={membership} delay={(index % 4) * 60}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-navy-950/10 bg-paper p-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-navy-950 text-white">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  <p className="text-[0.78rem] leading-relaxed text-navy-900/75">{membership}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gold-400/10 blur-[100px]" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-crest-600/15 blur-[100px]" aria-hidden="true" />

              <Quote className="relative size-10 text-gold-300" aria-hidden="true" />
              <div className="relative mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <span className="eyebrow !text-gold-300">Personal life</span>
                  <h2 className="display mt-5 text-[2.5rem] leading-[0.98] sm:text-[3.2rem]">
                    Discipline, synergy{' '}
                    <br />
                    <span className="italic text-gold-300">and resilience.</span>
                  </h2>
                </div>
                <div className="space-y-4 text-[0.9rem] leading-relaxed text-white/70">
                  {vc.personalLife.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Principal officers"
            title="The offices that support the Vice-Chancellor."
            description="The Vice-Chancellor is supported by principal officers responsible for the university's records, finances and library services."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {offices.map((office, index) => {
              const Icon = officeIcons[index % officeIcons.length]
              return (
                <Reveal key={office.role} delay={index * 100}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-navy-950/30 hover:bg-white hover:shadow-[0_28px_56px_-40px_rgba(5,14,34,0.3)]">
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

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Faculty deans & principal officers"
            title="The people leading our faculties and offices."
            description="Meet the deans, professors and principal officers who guide academic life and institutional services at AAT University."
          />

          <div className="mt-12 columns-1 gap-5 md:columns-2">
            {leadershipProfiles.map((profile, index) => (
              <Reveal
                key={profile.name}
                delay={(index % 2) * 80}
                className="mb-5 break-inside-avoid"
              >
                <article className="overflow-hidden rounded-2xl border border-navy-950/10 bg-white">
                  <div className="relative">
                    <img
                      src={profile.image}
                      alt={`Portrait of ${profile.name}, ${profile.role} at AAT University`}
                      loading="lazy"
                      style={{ objectPosition: profile.imagePosition }}
                      className="aspect-[5/4] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-crest-700">
                      {profile.role}
                    </p>
                    <h3 className="mt-2 font-display text-[1.45rem] leading-tight text-navy-950">
                      {profile.name}
                    </h3>
                    <div className="mt-3 space-y-3 text-[0.8rem] leading-relaxed text-navy-900/70">
                      {profile.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Governance"
                title="Structures that support accountability."
                description="The university's governance arrangements provide strategic oversight, academic direction and responsible management of institutional resources."
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
                  <p className="mt-2 text-[0.8rem] text-white/55">{university.address}</p>
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
