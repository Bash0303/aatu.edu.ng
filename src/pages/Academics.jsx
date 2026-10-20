import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  FlaskConical,
  Landmark,
  Search,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import usePageMeta from '../hooks/usePageMeta'
import { faculties, newProgrammes, programmes } from '../data/site'

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
    ring: 'ring-blue-400/25 group-hover:ring-blue-600/15',
  },
  arts: {
    strip: 'bg-crest-500',
    tile: 'bg-crest-500/15 text-crest-200 group-hover:bg-crest-50 group-hover:text-crest-700',
    dot: 'bg-crest-300 group-hover:bg-crest-600',
    ring: 'ring-crest-400/30 group-hover:ring-crest-600/15',
  },
  environment: {
    strip: 'bg-teal-500',
    tile: 'bg-teal-500/15 text-teal-200 group-hover:bg-teal-50 group-hover:text-teal-700',
    dot: 'bg-teal-400 group-hover:bg-teal-600',
    ring: 'ring-teal-400/25 group-hover:ring-teal-600/15',
  },
}

const programmeTints = [
  'bg-blue-50 text-blue-600',
  'bg-crest-50 text-crest-600',
  'bg-teal-50 text-teal-700',
  'bg-gold-100 text-gold-500',
  'bg-emerald-50 text-emerald-700',
  'bg-indigo-50 text-indigo-600',
]

const filters = [
  { id: 'all', label: 'All programmes' },
  { id: 'science', label: 'Science & Computing' },
  { id: 'arts', label: 'Arts, Management & Social Sciences' },
  { id: 'environment', label: 'Architecture & Environmental Sciences' },
  { id: 'new', label: '2026/2027 approvals' },
]

export default function Academics() {
  usePageMeta(
    'Academics',
    'Explore the faculties and undergraduate programmes at AbdulRasaq Abubakar Toyin University, including new programmes approved for the 2026/2027 session.',
  )

  const [activeFilter, setActiveFilter] = useState('all')
  const [query, setQuery] = useState('')

  const allProgrammes = useMemo(
    () => [
      ...programmes.map((programme) => ({
        ...programme,
        isNew: false,
        faculty: faculties.find((faculty) => faculty.id === programme.facultyId),
      })),
      ...newProgrammes.map((programme) => ({
        ...programme,
        facultyId: 'new',
        isNew: true,
        faculty: null,
      })),
    ],
    [],
  )

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return allProgrammes.filter((programme) => {
      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'new' ? programme.isNew : programme.facultyId === activeFilter)
      const matchesQuery =
        !term ||
        programme.name.toLowerCase().includes(term) ||
        programme.award.toLowerCase().includes(term)
      return matchesFilter && matchesQuery
    })
  }, [activeFilter, allProgrammes, query])

  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title={
          <>
            Programmes built for <span className="italic text-gold-300">purpose and possibility.</span>
          </>
        }
        description="Explore the university’s founding faculties and undergraduate programmes, together with the additional programmes approved for the 2026/2027 academic session."
        crumbs={[{ label: 'Academics' }]}
      >
        <Link to="/admissions" className="btn btn-light">
          Admission requirements
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHeader>

      <section className="relative overflow-hidden border-b border-white/10 bg-navy-950 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-28 top-10 size-[24rem] rounded-full bg-blue-600/15 blur-[110px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-0 size-[22rem] rounded-full bg-crest-600/15 blur-[100px]" aria-hidden="true" />

        <div className="container-page relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              tone="light"
              eyebrow="Academic structure"
              title="Three founding faculties."
              description="Academic life at AAT University is organised through faculties, departments and approved undergraduate programmes."
            />
            <Reveal delay={140}>
              <a
                href="#programmes"
                className="group inline-flex items-center gap-3 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-gold-200"
              >
                <span className="link-underline">Browse programmes</span>
                <span className="grid size-10 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-gold-300 group-hover:bg-gold-300 group-hover:text-navy-950">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </a>
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
                  <div
                    id={faculty.id}
                    className="group relative flex h-full scroll-mt-32 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:shadow-[0_28px_56px_-40px_rgba(5,14,34,0.55)] sm:p-8"
                  >
                    <span className={`absolute inset-x-0 top-0 h-1 ${styles.strip} transition-all duration-500 group-hover:h-1.5`} aria-hidden="true" />
                    <div className="flex items-start justify-between">
                      <span className={`grid size-12 place-items-center rounded-xl ring-1 transition-all duration-500 group-hover:scale-105 ${styles.tile} ${styles.ring}`}>
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-[0.6rem] font-semibold tracking-[0.18em] text-white/45 transition-colors group-hover:text-navy-900/50">
                        {faculty.code}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[1.65rem] leading-[1.08] text-white transition-colors group-hover:text-navy-950">
                      {faculty.name}
                    </h3>
                    <p className="mt-3 text-[0.83rem] leading-relaxed text-white/70 transition-colors group-hover:text-navy-900/75">
                      {faculty.blurb}
                    </p>
                    <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-5 transition-colors group-hover:border-navy-950/10">
                      {facultyProgrammes.map((programme) => (
                        <li key={programme.slug}>
                          <Link
                            to={`/academics/programmes/${programme.slug}`}
                            className="group/link flex items-center justify-between gap-3 text-[0.8rem] text-white/75 transition-colors hover:text-white group-hover:text-navy-900/80 group-hover:hover:text-navy-950"
                          >
                            <span className="flex items-center gap-2.5">
                              <span className={`size-1.5 rounded-full transition-colors ${styles.dot}`} />
                              {programme.name}
                            </span>
                            <ArrowUpRight className="size-3.5 text-current opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/50 transition-colors group-hover:text-navy-900/55">
                      {facultyProgrammes.length} programmes
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="programmes" className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-1/3 size-[24rem] rounded-full bg-crest-600/12 blur-[110px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 bottom-10 size-[24rem] rounded-full bg-blue-600/12 blur-[110px]" aria-hidden="true" />

        <div className="container-page relative">
          <SectionHeading
            tone="light"
            eyebrow="Undergraduate programmes"
            title="Find the programme for you."
            description="Browse all approved undergraduate programmes by faculty, or search by programme name. Each programme page sets out the award and available entry information."
          />

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col gap-4">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy-900/50" aria-hidden="true" />
                <label htmlFor="programme-search" className="sr-only">
                  Search programmes
                </label>
                <input
                  id="programme-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search programmes, e.g. Computer Science, Law, Accounting"
                  className="field !rounded-full !py-3.5 !pl-11 !pr-5"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 hidden items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/60 sm:flex">
                  <SlidersHorizontal className="size-3" aria-hidden="true" />
                  Filter
                </span>
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    aria-pressed={activeFilter === filter.id}
                    className={`rounded-full border px-4 py-2 text-[0.68rem] font-semibold transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'border-gold-300 bg-gold-300 text-navy-950 shadow-[0_8px_18px_-12px_rgba(226,180,95,0.7)]'
                        : 'border-white/15 bg-white/[0.04] text-white/75 hover:border-crest-400/60 hover:bg-crest-500/15 hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {activeFilter === 'new' && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-gold-300" aria-hidden="true" />
              <p className="text-[0.78rem] leading-relaxed text-white/75">
                The programmes below were reported as approved for commencement in the 2026/2027
                session. Candidates should confirm the admission status of a specific programme
                with the Admissions Office before applying.
              </p>
            </div>
          )}

          <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/60">
            {filtered.length} {filtered.length === 1 ? 'programme' : 'programmes'}
          </p>

          {filtered.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((programme, index) => (
                <Reveal key={programme.slug} delay={(index % 3) * 70}>
                  <Link
                    to={`/academics/programmes/${programme.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white hover:shadow-[0_28px_56px_-40px_rgba(5,14,34,0.55)]"
                  >
                    <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-crest-600 via-gold-400 to-navy-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                    <div className="flex items-start justify-between gap-3">
                      <span className={`grid size-10 place-items-center rounded-full transition-transform duration-500 group-hover:scale-110 ${programmeTints[index % programmeTints.length]}`}>
                        <BookOpen className="size-4" aria-hidden="true" />
                      </span>
                      {programme.isNew && (
                        <span className="rounded-full bg-crest-600 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-white">
                          2026/2027
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 font-display text-[1.4rem] leading-tight text-white transition-colors group-hover:text-crest-700">
                      {programme.name}
                    </h3>
                    <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/60 transition-colors group-hover:text-navy-900/55">
                      {programme.award}
                    </p>
                    <p className="mt-3 flex-1 text-[0.8rem] leading-relaxed text-white/70 transition-colors group-hover:text-navy-900/75">
                      {programme.summary}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 transition-colors group-hover:border-navy-950/10">
                      <span className="text-[0.6rem] font-medium uppercase tracking-[0.12em] text-white/55 transition-colors group-hover:text-navy-900/55">
                        {programme.faculty ? programme.faculty.shortName : 'New approval'}
                      </span>
                      <ArrowUpRight className="size-4 text-white/55 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-950" aria-hidden="true" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-10 text-center">
              <p className="font-display text-2xl text-white">No programmes found</p>
              <p className="mt-2 text-[0.85rem] text-white/70">
                Try a different search term or clear the filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setActiveFilter('all')
                }}
                className="btn btn-light mt-6"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="new-programmes" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Academic expansion"
                title="New approvals for 2026/2027."
                description="Fifteen additional undergraduate programmes were reported as approved for commencement in the 2026/2027 academic session, expanding the university’s academic portfolio."
              />
              <Reveal delay={180}>
                <Link to="/admissions" className="btn btn-primary mt-8">
                  Check admission details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div className="grid gap-x-8 gap-y-0 rounded-2xl border border-navy-950/10 bg-paper px-6 py-2 sm:grid-cols-2 sm:px-8">
                {newProgrammes.map((programme) => (
                  <Link
                    key={programme.slug}
                    to={`/academics/programmes/${programme.slug}`}
                    className="group flex items-center justify-between gap-3 border-b border-navy-950/10 py-3.5 text-[0.82rem] text-navy-900/70 transition-colors last:border-b-0 hover:text-navy-950 sm:[&:nth-last-child(2)]:border-b-0"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="size-1.5 rounded-full bg-crest-600/60 transition-colors group-hover:bg-crest-600" />
                      {programme.name}
                    </span>
                    <ArrowUpRight className="size-3.5 text-navy-900/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-crest-700" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <p className="mt-10 rounded-xl border border-navy-950/10 bg-paper p-4 text-[0.75rem] leading-relaxed text-navy-900/65">
              Programme availability is subject to the university’s official admission process and
              current regulatory approval. Prospective candidates should confirm the status of any
              programme with the Admissions Office before applying.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
