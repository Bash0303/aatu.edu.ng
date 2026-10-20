import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  Check,
  GraduationCap,
  Info,
  MapPin,
  Phone,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import {
  admissionRequirements,
  getProgramme,
  images,
  newProgrammes,
  programmes,
  university,
} from '../data/site'

export default function ProgrammeDetail() {
  const { slug } = useParams()
  const programme = getProgramme(slug)

  usePageMeta(
    programme ? programme.name : 'Programme not found',
    programme
      ? `${programme.award} at AbdulRasaq Abubakar Toyin University. Entry requirements, award information and admission details.`
      : undefined,
  )

  if (!programme) {
    return (
      <section className="bg-white py-28">
        <div className="container-page max-w-xl text-center">
          <p className="eyebrow justify-center">Programme not found</p>
          <h1 className="display mt-5 text-5xl text-navy-950">We could not find that programme.</h1>
          <p className="mt-5 text-[0.92rem] leading-relaxed text-navy-900/70">
            The programme may have been renamed or is not part of the current academic offering.
            Browse the full programme directory to find what you are looking for.
          </p>
          <Link to="/academics" className="btn btn-primary mt-8">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to academics
          </Link>
        </div>
      </section>
    )
  }

  const facultyProgrammes = programme.faculty
    ? programmes
        .filter(
          (item) =>
            item.facultyId === programme.faculty.id && item.slug !== programme.slug,
        )
        .slice(0, 3)
    : newProgrammes.filter((item) => item.slug !== programme.slug).slice(0, 3)

  const related = facultyProgrammes.map((item) => ({
    ...item,
    faculty: programme.faculty,
  }))

  return (
    <>
      <PageHeader
        eyebrow={programme.isNew ? 'Programme · 2026/2027 approval' : 'Undergraduate programme'}
        title={programme.name}
        description={programme.summary}
        crumbs={[
          { label: 'Academics', to: '/academics' },
          { label: 'Programmes', to: '/academics#programmes' },
          { label: programme.name },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/admissions#apply" className="btn btn-light">
            How to apply
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link to="/academics#programmes" className="btn btn-outline-light">
            <ArrowLeft className="size-4" aria-hidden="true" />
            All programmes
          </Link>
        </div>
      </PageHeader>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <div>
            {programme.isNew && (
              <Reveal>
                <div className="mb-8 flex items-start gap-3 rounded-xl border border-navy-950/10 bg-paper p-4">
                  <Info className="mt-0.5 size-4 shrink-0 text-navy-600" aria-hidden="true" />
                  <p className="text-[0.78rem] leading-relaxed text-navy-900/70">
                    This programme was reported as approved for the 2026/2027 academic session.
                    Confirm its current admission status with the Admissions Office before applying.
                  </p>
                </div>
              </Reveal>
            )}

            <Reveal>
              <span className="eyebrow">Programme overview</span>
              <h2 className="display mt-5 text-[2.2rem] leading-[1.05] text-navy-950 sm:text-4xl">
                About the programme.
              </h2>
              <div className="mt-5 space-y-4 text-[0.92rem] leading-relaxed text-navy-900/75">
                <p>
                  The {programme.award} programme at AAT University is designed to give students a
                  strong academic foundation alongside the practical capability to apply their
                  knowledge with confidence.
                </p>
                <p>
                  Teaching combines structured academic work with opportunities for independent
                  study, practical exercises and engagement with the wider academic community. The
                  programme is offered as a full-time undergraduate degree.
                </p>
                <p>
                  {programme.faculty
                    ? `The programme is offered within the ${programme.faculty.name}, one of the university’s founding faculties.`
                    : 'The programme forms part of the university’s expanded academic offering for the 2026/2027 session.'}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-blue-600/20 bg-blue-50/50 p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-full bg-blue-600 text-white">
                      <GraduationCap className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-blue-700">
                      UTME requirements
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {admissionRequirements.utme.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[0.79rem] leading-relaxed text-navy-900/75">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-navy-600" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-gold-400/40 bg-gold-100/50 p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-full bg-gold-500 text-white">
                      <BookOpen className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-gold-500">
                      Direct Entry
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {admissionRequirements.directEntry.points.slice(0, 4).map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[0.79rem] leading-relaxed text-navy-900/75">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-navy-600" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <Link
                to="/admissions"
                className="group mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900"
              >
                <span className="link-underline">Full admission requirements</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 border-t border-navy-950/10 pt-10">
                <span className="eyebrow">Study at AATU</span>
                <h2 className="display mt-5 text-[2rem] leading-tight text-navy-950 sm:text-[2.5rem]">
                  A focused environment for serious study.
                </h2>
                <p className="mt-4 max-w-2xl text-[0.9rem] leading-relaxed text-navy-900/75">
                  Students study on the university’s campus at Oke-Ogba, Ganmo, Ilorin, with access
                  to teaching spaces, library resources and the academic support services being
                  developed for the university community.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[0.78rem] text-navy-900/70">
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4 text-navy-600" aria-hidden="true" />
                    {university.address}
                  </span>
                  <a href={`tel:${university.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-navy-950">
                    <Phone className="size-4 text-navy-600" aria-hidden="true" />
                    {university.phones[0]}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-navy-950/10 bg-paper">
                <div className="h-1 w-full bg-gradient-to-r from-crest-600 via-gold-400 to-navy-600" aria-hidden="true" />
                <div className="border-b border-navy-950/10 p-6">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                    Programme at a glance
                  </p>
                  <dl className="mt-5 space-y-4">
                    <div>
                      <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-navy-900/50">
                        Award
                      </dt>
                      <dd className="mt-1 text-[0.86rem] font-semibold text-navy-950">{programme.award}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-navy-900/50">
                        Faculty
                      </dt>
                      <dd className="mt-1 text-[0.86rem] font-medium text-navy-950">
                        {programme.faculty ? programme.faculty.name : '2026/2027 approved programme'}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-navy-900/50">
                        Level
                      </dt>
                      <dd className="mt-1 text-[0.86rem] font-medium text-navy-950">Undergraduate</dd>
                    </div>
                    <div>
                      <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-navy-900/50">
                        Study mode
                      </dt>
                      <dd className="mt-1 text-[0.86rem] font-medium text-navy-950">Full-time</dd>
                    </div>
                    <div>
                      <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-navy-900/50">
                        Session
                      </dt>
                      <dd className="mt-1 flex items-center gap-2 text-[0.86rem] font-medium text-navy-950">
                        <CalendarDays className="size-3.5 text-navy-600" aria-hidden="true" />
                        2026/2027
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="p-6">
                  <Link to="/admissions#apply" className="btn btn-accent w-full">
                    Apply now
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link to="/contact" className="btn btn-outline mt-3 w-full">
                    Speak to admissions
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <a
                    href={images.flier}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy-900/70 transition-colors hover:text-navy-950"
                  >
                    <Award className="size-3.5" aria-hidden="true" />
                    View admission flier
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-5 rounded-2xl border border-navy-950/10 bg-white p-6">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                  Admissions Office
                </p>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-navy-900/70">
                  Questions about this programme? Our admissions team can help you confirm
                  requirements and availability.
                </p>
                <a
                  href={`mailto:${university.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold text-navy-900 transition-colors hover:text-navy-600"
                >
                  {university.email}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-navy-950/10 bg-paper py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Explore more</span>
              <h2 className="display mt-4 text-[2rem] text-navy-950 sm:text-[2.5rem]">
                Related programmes.
              </h2>
            </div>
            <Link
              to="/academics#programmes"
              className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900"
            >
              <span className="link-underline">View all programmes</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 90}>
                <Link
                  to={`/academics/programmes/${item.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-950/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-navy-950/30"
                >
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-navy-900/50">
                    {item.award}
                  </span>
                  <h3 className="mt-3 font-display text-[1.4rem] leading-tight text-navy-950 transition-colors group-hover:text-crest-700">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.78rem] leading-relaxed text-navy-900/70">
                    {item.summary}
                  </p>
                  <span className="mt-5 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-navy-900">
                    Explore
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
