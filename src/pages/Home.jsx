import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  FlaskConical,
  Globe2,
  GraduationCap,
  Landmark,
  Library,
  MapPin,
  Users,
} from 'lucide-react'
import { faculties, images, news, programmes, stats, university } from '../data/site'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import NewsCard from '../components/NewsCard'
import usePageMeta from '../hooks/usePageMeta'

const facultyIcons = {
  science: FlaskConical,
  arts: Landmark,
  environment: Building2,
}

const facultyStyles = {
  science: {
    strip: 'bg-blue-500',
    tile: 'bg-blue-500/15 text-blue-300 group-hover:bg-blue-50 group-hover:text-blue-600',
    dot: 'bg-blue-400 group-hover:bg-blue-600',
  },
  arts: {
    strip: 'bg-crest-500',
    tile: 'bg-crest-500/15 text-crest-200 group-hover:bg-crest-50 group-hover:text-crest-700',
    dot: 'bg-crest-400 group-hover:bg-crest-600',
  },
  environment: {
    strip: 'bg-teal-500',
    tile: 'bg-teal-500/15 text-teal-200 group-hover:bg-teal-50 group-hover:text-teal-700',
    dot: 'bg-teal-400 group-hover:bg-teal-600',
  },
}

const checkColors = ['bg-blue-50 text-blue-600', 'bg-crest-50 text-crest-600', 'bg-gold-100 text-gold-500']

const difference = [
  {
    icon: BadgeCheck,
    title: 'Approved academic programmes',
    description:
      'Undergraduate programmes developed across three founding faculties, with further approvals for the 2026/2027 session.',
  },
  {
    icon: Library,
    title: 'Purpose-built learning environment',
    description:
      'A campus in Oke-Ogba, Ganmo, with academic facilities, library resources, laboratories and computing infrastructure.',
  },
  {
    icon: Globe2,
    title: 'Education for global citizenship',
    description:
      'A not-for-profit institution focused on preparing graduates to contribute with confidence in a connected world.',
  },
  {
    icon: Users,
    title: 'A community that knows your name',
    description:
      'A focused academic setting where teaching, mentoring and student support sit at the centre of university life.',
  },
]

const heroLinks = [
  { label: 'Admissions', detail: '2026/2027 open', to: '/admissions', number: '01' },
  { label: 'Programmes', detail: 'Find your course', to: '/academics', number: '02' },
  { label: 'Visit the campus', detail: 'Plan your visit', to: '/contact', number: '03' },
]

export default function Home() {
  usePageMeta(
    'Home',
    'Abdulrasaq Abubakar Toyin University (AATU) — a private not-for-profit university in Oke-Ogba, Ganmo, Ilorin, Kwara State, advancing generational development.',
  )

  const featured = news.find((article) => article.featured) || news[0]
  const secondary = news.filter((article) => article.slug !== featured.slug).slice(0, 3)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={images.campus}
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="animate-hero-zoom h-full w-full scale-105 object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-navy-950/50" />
          <div className="grid-pattern absolute inset-0 opacity-25" />
          <div className="absolute -left-32 top-1/3 size-[26rem] rounded-full bg-crest-600/20 blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 size-[22rem] rounded-full bg-gold-400/15 blur-[120px]" />
        </div>

        <div className="container-page relative flex min-h-[38rem] flex-col justify-center pb-10 pt-20 sm:min-h-[42rem] lg:min-h-[46rem] lg:pb-14 lg:pt-24">
          <div className="max-w-4xl">
            <span
              className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-gold-300/35 bg-navy-950/40 px-4 py-2 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-gold-100 backdrop-blur"
              style={{ animationDelay: '80ms' }}
            >
              <MapPin className="size-3" aria-hidden="true" />
              Oke-Ogba, Ganmo · Ilorin, Kwara State
            </span>

            <h1
              className="animate-fade-up display mt-7 text-[3.25rem] leading-[0.95] text-shadow-hero sm:text-[4.6rem] lg:text-[5.8rem]"
              style={{ animationDelay: '180ms' }}
            >
              Knowledge that
              <br />
              <span className="italic text-gold-300">advances generations.</span>
            </h1>

            <p
              className="animate-fade-up mt-7 max-w-xl text-[0.95rem] leading-relaxed text-white/70 sm:text-[1.02rem]"
              style={{ animationDelay: '300ms' }}
            >
              Abdulrasaq Abubakar Toyin University is a private, not-for-profit university in
              Kwara State, educating global citizens through rigorous teaching, research and
              character.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '420ms' }}
            >
              <Link to="/admissions#apply" className="btn btn-accent">
                Apply for Admission
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link to="/academics" className="btn btn-outline-light">
                Explore Programmes
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div
              className="animate-fade-in mt-11 flex items-center gap-4 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white/45"
              style={{ animationDelay: '600ms' }}
            >
              <span className="h-px w-10 bg-gradient-to-r from-crest-500 to-gold-400" />
              Motto · {university.motto}
            </div>
          </div>

          <div className="animate-fade-up mt-16 hidden xl:absolute xl:bottom-14 xl:right-12 xl:mt-0 xl:block">
            <div className="w-[19rem] overflow-hidden rounded-2xl border border-white/15 border-t-crest-500/70 bg-white/[0.07] p-6 pt-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Admissions
                </span>
                <span className="flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold-200">
                  <span className="size-1.5 animate-pulse rounded-full bg-gold-300" />
                  Open
                </span>
              </div>
              <p className="mt-4 font-display text-[1.7rem] leading-[1.05]">
                2026/2027 applications are now open.
              </p>
              <p className="mt-3 text-[0.78rem] leading-relaxed text-white/55">
                Review entry requirements and take the next step towards AAT University.
              </p>
              <Link
                to="/admissions"
                className="mt-5 inline-flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-gold-200 transition-colors hover:text-white"
              >
                Start your application
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="container-page relative border-t border-white/15">
          <div className="grid sm:grid-cols-3">
            {heroLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.to}
                className={`group flex items-center justify-between gap-4 py-5 text-white transition-colors sm:px-6 ${
                  index === 0 ? 'sm:pl-0' : 'border-t border-white/10 sm:border-l sm:border-t-0'
                } ${index === 2 ? 'border-t border-white/10 sm:border-t-0' : ''}`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-[0.6rem] font-semibold tracking-[0.16em] text-white/35">
                    {link.number}
                  </span>
                  <div>
                    <p className="text-[0.9rem] font-semibold">{link.label}</p>
                    <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.12em] text-white/40">
                      {link.detail}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-3 text-white">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-25" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-0 size-64 rounded-full bg-blue-500/15 blur-[90px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-64 rounded-full bg-crest-600/15 blur-[90px]" aria-hidden="true" />

        <div className="container-page relative grid grid-cols-2 gap-3 py-6 sm:grid-cols-4 sm:gap-4 sm:py-7">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] sm:p-6"
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] transition-all duration-500 group-hover:h-1"
                style={{ backgroundColor: stat.accent }}
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundColor: stat.accent }}
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between gap-3">
                <p className={`font-display leading-none tracking-[-0.02em] text-white ${stat.static ? 'text-[1.9rem] sm:text-[2.4rem]' : 'text-[2.5rem] sm:text-[3rem]'}`}>
                  {stat.static ? (
                    <span>
                      {stat.value}
                      {stat.suffix}
                    </span>
                  ) : (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <span
                  className="mt-2 size-2 shrink-0 rounded-full ring-4 ring-white/5 transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: stat.accent }}
                  aria-hidden="true"
                />
              </div>
              <p className="relative mt-3 text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-white/75 transition-colors duration-300 group-hover:text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="scale">
            <div className="relative pb-16 sm:pb-10">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-navy-950/15" aria-hidden="true" />
              <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] sm:aspect-[4/3.2]">
                <img
                  src={images.campus}
                  alt="The AAT University campus in Oke-Ogba, Ganmo, Ilorin"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-navy-900 backdrop-blur">
                  Ilorin · Kwara State
                </span>
              </div>

              <div className="absolute bottom-0 left-4 right-4 flex items-center gap-4 rounded-2xl border border-navy-950/10 bg-white p-4 shadow-soft sm:bottom-2 sm:left-auto sm:right-6 sm:w-[19rem] sm:p-5">
                <img
                  src={images.logo}
                  alt=""
                  className="size-12 shrink-0 rounded-full object-cover ring-1 ring-navy-950/10"
                />
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy-900/60">
                    Our motto
                  </p>
                  <p className="mt-1 font-display text-[1.15rem] leading-tight text-navy-950">
                    Advancing Generational Development
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About the university"
              title={
                <>
                  A university built on purpose, for a generation with promise.
                </>
              }
            />

            <Reveal delay={140}>
              <div className="mt-6 space-y-4 text-[0.92rem] leading-relaxed text-navy-900/75">
                <p>
                  Abdulrasaq Abubakar Toyin University is a private, not-for-profit institution
                  located in Oke-Ogba, Ganmo, Ilorin, Kwara State. The university was established
                  to broaden access to quality higher education and to develop graduates of
                  character, competence and consequence.
                </p>
                <p>
                  Our academic community is being built around rigorous teaching, practical
                  learning and a commitment to advancing generational development.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-7 space-y-3.5">
                {[
                  'Approved undergraduate programmes across three founding faculties',
                  'A private, not-for-profit university in the heart of Kwara State',
                  'An education centred on global citizenship, character and service',
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-[0.86rem] text-navy-900/75">
                    <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${checkColors[index % checkColors.length]}`}>
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link to="/about" className="btn btn-primary">
                  Discover AATU
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/management"
                  className="group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors hover:text-crest-700"
                >
                  <span className="link-underline">Our leadership</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 top-10 size-[26rem] rounded-full bg-blue-600/15 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-[24rem] rounded-full bg-crest-600/15 blur-[110px]" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[12rem] leading-none text-white/[0.03] lg:text-[17rem]"
          aria-hidden="true"
        >
          AATU
        </span>

        <div className="container-page relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              tone="light"
              eyebrow="Academics"
              title="Three faculties. A world of possibility."
              description="Discover programmes designed to build deep knowledge, practical capability and the confidence to contribute beyond the classroom."
            />
            <Reveal delay={160}>
              <Link
                to="/academics"
                className="group inline-flex items-center gap-3 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-gold-200"
              >
                <span className="link-underline">All programmes</span>
                <span className="grid size-10 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-gold-300 group-hover:bg-gold-300 group-hover:text-navy-950">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {faculties.map((faculty, index) => {
              const Icon = facultyIcons[faculty.id]
              const styles = facultyStyles[faculty.id]
              const facultyProgrammes = programmes.filter((programme) =>
                faculty.programmes.includes(programme.slug),
              )

              return (
                <Reveal key={faculty.id} delay={index * 110}>
                  <Link
                    to={`/academics#${faculty.id}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white hover:shadow-[0_32px_64px_-40px_rgba(5,14,34,0.55)] sm:p-8"
                  >
                    <span className={`absolute inset-x-0 top-0 h-1 ${styles.strip} transition-all duration-500 group-hover:h-1.5`} aria-hidden="true" />
                    <div className="flex items-start justify-between">
                      <span className={`grid size-12 place-items-center rounded-xl transition-all duration-500 group-hover:scale-105 ${styles.tile}`}>
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-[0.6rem] font-semibold tracking-[0.18em] text-white/45 transition-colors group-hover:text-navy-900/50">
                        {faculty.code}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-[1.7rem] leading-[1.08] text-white transition-colors group-hover:text-navy-950">
                      {faculty.shortName}
                    </h3>
                    <p className="mt-3 text-[0.83rem] leading-relaxed text-white/70 transition-colors group-hover:text-navy-900/75">
                      {faculty.blurb}
                    </p>

                    <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-5 transition-colors group-hover:border-navy-950/10">
                      {facultyProgrammes.slice(0, 3).map((programme) => (
                        <li
                          key={programme.slug}
                          className="flex items-center gap-2.5 text-[0.79rem] text-white/75 transition-colors group-hover:text-navy-900/80"
                        >
                          <span className={`size-1.5 rounded-full transition-colors ${styles.dot}`} />
                          {programme.name}
                        </li>
                      ))}
                      {facultyProgrammes.length > 3 && (
                        <li className="pl-4 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-white/50 transition-colors group-hover:text-navy-900/55">
                          + {facultyProgrammes.length - 3} more programmes
                        </li>
                      )}
                    </ul>

                    <span className="mt-7 flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors group-hover:text-navy-950">
                      Explore faculty
                      <span className="grid size-7 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-navy-950 group-hover:text-white">
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 top-1/3 size-[28rem] rounded-full bg-navy-600/20 blur-[130px]" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[13rem] leading-none text-white/[0.03] lg:text-[18rem]"
          aria-hidden="true"
        >
          AATU
        </span>

        <div className="container-page relative">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="The AATU difference"
                title={
                  <>
                    An education with rigour, <span className="italic text-gold-300">character and reach.</span>
                  </>
                }
                description="AAT University is building an academic environment where knowledge is pursued seriously, and where graduates are prepared to serve and lead."
              />
              <Reveal delay={220}>
                <Link to="/about" className="btn btn-outline-light mt-9">
                  About the university
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>

            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {difference.map((item, index) => {
                const Icon = item.icon
                const colorClasses = [
                  'bg-sky-400/10 text-sky-300 ring-sky-400/25',
                  'bg-gold-400/10 text-gold-300 ring-gold-400/25',
                  'bg-crest-500/10 text-crest-200 ring-crest-500/25',
                  'bg-emerald-400/10 text-emerald-300 ring-emerald-400/25',
                ]
                return (
                  <Reveal key={item.title} delay={index * 110}>
                    <div className="group border-t border-white/15 pt-6 transition-colors duration-500 hover:border-gold-300/50">
                      <div className="flex items-center justify-between">
                        <span className={`grid size-10 place-items-center rounded-lg ring-1 transition-transform duration-500 group-hover:scale-110 ${colorClasses[index % colorClasses.length]}`}>
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <span className="text-[0.6rem] font-semibold tracking-[0.18em] text-white/25">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-[1.4rem] leading-tight">{item.title}</h3>
                      <p className="mt-2.5 text-[0.82rem] leading-relaxed text-white/55">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Admissions"
              title="Your place at AATU starts here."
              description="Admission into AAT University is open to qualified UTME and Direct Entry candidates. Review the requirements, prepare your documents and speak with our team."
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-blue-600/20 bg-blue-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-30px_rgba(37,99,235,0.5)]">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-full bg-blue-600 text-white">
                      <GraduationCap className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-blue-700">
                      UTME
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-[0.8rem] leading-relaxed text-navy-900/75">
                    <li>Five O’Level credits, including English & Mathematics</li>
                    <li>Not more than two sittings</li>
                    <li>Meet JAMB and university cut-off marks</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="h-full rounded-2xl border border-gold-400/40 bg-gold-100/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-30px_rgba(201,148,47,0.55)]">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-full bg-gold-500 text-white">
                      <BookOpen className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-500">
                      Direct Entry
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-[0.8rem] leading-relaxed text-navy-900/75">
                    <li>A-Level, degree or equivalent qualifications</li>
                    <li>ND Upper Credit · HND Lower Credit · NCE Merit</li>
                    <li>Meet approved JAMB and JUPEB requirements</li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/admissions" className="btn btn-primary">
                  Admission requirements
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/admissions#apply"
                  className="group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors hover:text-crest-700"
                >
                  <span className="link-underline">How to apply</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={140}>
            <a
              href={images.flier}
              target="_blank"
              rel="noreferrer"
              className="group relative mx-auto block w-full max-w-md"
              aria-label="View the full 2026/2027 admission requirements flier"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.6rem] border-2 border-crest-600/25 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-navy-950/10 bg-navy-50 shadow-soft">
                <img
                  src={images.flier}
                  alt="AAT University 2026/2027 admission requirements and full-time degree programmes"
                  loading="lazy"
                  className="h-[30rem] w-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.025] sm:h-[34rem]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent p-5 pt-16">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
                        Official admission flier
                      </p>
                      <p className="mt-1.5 font-display text-[1.35rem] leading-tight text-white">
                        2026/2027 requirements & programmes
                      </p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-navy-950 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy-950/10 bg-paper py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="News & media"
              title="The latest from our campus."
              description="Announcements, academic developments and stories from the AAT University community."
            />
            <Reveal delay={160}>
              <Link
                to="/news"
                className="group inline-flex items-center gap-3 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy-900"
              >
                <span className="link-underline">All news</span>
                <span className="grid size-10 place-items-center rounded-full border border-navy-950/20 transition-colors group-hover:border-crest-600 group-hover:bg-crest-600 group-hover:text-white">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <Reveal>
              <NewsCard article={featured} featured />
            </Reveal>

            <div className="flex flex-col">
              {secondary.map((article, index) => (
                <Reveal key={article.slug} delay={index * 100}>
                  <Link
                    to={`/news/${article.slug}`}
                    className="group flex h-full flex-col justify-between gap-4 border-b border-navy-950/10 py-6 first:pt-0 last:border-b-0 lg:border-b-0 lg:border-l lg:py-0 lg:pl-7 lg:first:pt-0"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-navy-900/55">
                        <span className="text-navy-700">{article.category}</span>
                        <span className="size-1 rounded-full bg-navy-900/20" />
                        <span>{article.displayDate}</span>
                      </div>
                      <h3 className="mt-2.5 font-display text-[1.3rem] leading-[1.12] text-navy-950 transition-colors group-hover:text-crest-700">
                        {article.title}
                      </h3>
                    </div>
                    <span className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy-900/70 transition-colors group-hover:text-navy-950">
                      Read article
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Campus"
              title="A place to study, belong and grow."
              description="A glimpse of the environment that will shape the AAT University experience."
            />
            <Reveal delay={160}>
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-3 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy-900"
              >
                <span className="link-underline">View gallery</span>
                <span className="grid size-10 place-items-center rounded-full border border-navy-950/20 transition-colors group-hover:border-crest-600 group-hover:bg-crest-600 group-hover:text-white">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:auto-rows-[11.5rem]">
            {[
              { image: images.campus, title: 'Main campus', position: 'center', area: 'col-span-2 row-span-2 aspect-[4/3] lg:aspect-auto' },
              { image: images.campus, title: 'Academic complex', position: '30% 60%', area: 'aspect-square lg:aspect-auto' },
              { image: images.campus, title: 'Administration', position: '75% 55%', area: 'aspect-square lg:aspect-auto' },
              { image: images.campus, title: 'Campus drive', position: '50% 90%', area: 'col-span-2 aspect-[2/1] lg:col-span-2 lg:aspect-auto' },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 90} className={item.area}>
                <Link
                  to="/gallery"
                  className="group relative block h-full min-h-[9rem] overflow-hidden rounded-xl bg-navy-100"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ objectPosition: item.position }}
                    className="h-full w-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                    <p className="text-[0.78rem] font-semibold text-white transition-colors group-hover:text-gold-200">{item.title}</p>
                    <ArrowUpRight className="size-3.5 text-white/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-navy-950/10 bg-paper p-7 sm:flex-row sm:items-center sm:p-9">
            <div className="flex items-start gap-5">
              <span className="hidden size-12 shrink-0 place-items-center rounded-full bg-crest-600 text-white sm:grid">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-navy-900/60">
                  Planning a visit?
                </p>
                <p className="mt-1.5 font-display text-[1.5rem] leading-tight text-navy-950 sm:text-[1.8rem]">
                  Visit our campus at Oke-Ogba, Ganmo.
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Contact us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <a
        href="#main-content"
        className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-crest-600/20 bg-white/90 text-crest-700 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-crest-600 hover:text-white"
        aria-label="Back to top"
      >
        <ArrowUp className="size-4" aria-hidden="true" />
      </a>
    </>
  )
}
