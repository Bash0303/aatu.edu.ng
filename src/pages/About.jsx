import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Library,
  Lightbulb,
  MapPin,
  Monitor,
  ShieldCheck,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import usePageMeta from '../hooks/usePageMeta'
import { images, university } from '../data/site'

const principles = [
  {
    icon: GraduationCap,
    title: 'Academic excellence',
    description: 'Rigorous teaching, thoughtful assessment and a culture of curiosity across every programme.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Honesty, accountability and respect for others in the classroom, the workplace and the community.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Practical problem-solving and the confident use of technology to meet the needs of a changing world.',
  },
  {
    icon: HeartHandshake,
    title: 'Service',
    description: 'A commitment to contribute meaningfully to society, beginning with the communities around us.',
  },
]

const timelineStyles = [
  { pill: 'bg-blue-500/15 text-blue-200 ring-blue-400/30', dot: 'bg-blue-500' },
  { pill: 'bg-crest-500/15 text-crest-200 ring-crest-400/30', dot: 'bg-crest-500' },
  { pill: 'bg-teal-500/15 text-teal-200 ring-teal-400/30', dot: 'bg-teal-500' },
  { pill: 'bg-gold-400/15 text-gold-200 ring-gold-300/30', dot: 'bg-gold-400' },
]

const timeline = [
  {
    year: '2025',
    title: 'Establishment and academic approval',
    description:
      'Approval was granted for an initial portfolio of undergraduate programmes, marking the formal start of the university’s academic journey.',
  },
  {
    year: '2025',
    title: 'Campus development',
    description:
      'Academic facilities, library resources, laboratories and computing infrastructure were developed ahead of academic take-off.',
  },
  {
    year: '2026',
    title: 'Academic expansion',
    description:
      'Fifteen additional undergraduate programmes were approved for commencement in the 2026/2027 academic session.',
  },
  {
    year: '2026',
    title: 'First substantive Vice-Chancellor',
    description:
      'Professor Olayemi Mikail Olaniyi was appointed the university’s first substantive Vice-Chancellor, effective 4 September 2026.',
  },
]

const facilities = [
  { icon: Library, title: 'Library & resources', description: 'Study spaces and academic resources supporting independent learning.' },
  { icon: FlaskConical, title: 'Laboratories', description: 'Practical teaching facilities for the science-based programmes.' },
  { icon: Monitor, title: 'Computing facilities', description: 'Technology-enabled learning for computing and digital disciplines.' },
  { icon: Building2, title: 'Teaching spaces', description: 'Purpose-built classrooms and academic spaces across the campus.' },
]

export default function About() {
  usePageMeta(
    'About the University',
    'Learn about Abdulrasaq Abubakar Toyin University — its purpose, academic development, leadership and campus in Oke-Ogba, Ganmo, Ilorin, Kwara State.',
  )

  return (
    <>
      <PageHeader
        eyebrow="About the university"
        title={
          <>
            A university established to advance <span className="italic text-gold-300">generational development.</span>
          </>
        }
        description="Abdulrasaq Abubakar Toyin University is a private, not-for-profit institution in Oke-Ogba, Ganmo, Ilorin, Kwara State, built around a simple conviction: education should change lives and lift communities."
        crumbs={[{ label: 'About' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/management" className="btn btn-light">
            University leadership
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link to="/academics" className="btn btn-outline-light">
            Explore academics
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </PageHeader>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="University overview"
              title="A new academic community with a long view."
            />
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-[0.92rem] leading-relaxed text-navy-900/75">
                <p>
                  Abdulrasaq Abubakar Toyin University, known as AAT University or AATU, is a
                  private, not-for-profit university located at Oke-Ogba, Ganmo, in Ilorin, Kwara
                  State, Nigeria. The university exists to expand access to quality higher
                  education and to prepare graduates for meaningful contribution in a global
                  society.
                </p>
                <p>
                  Its academic offering began with three founding faculties and an approved
                  portfolio of undergraduate programmes. In 2026, a further fifteen programmes were
                  approved for the 2026/2027 academic session, extending the university’s reach
                  across law, health sciences, computing, the sciences and the social sciences.
                </p>
                <p>
                  The university’s motto, <span className="font-semibold text-navy-900">{university.motto}</span>,
                  expresses the longer view that shapes its work: that education should create
                  value not only for the individual, but for the generations that follow.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-navy-950/10 pt-7">
                <div className="flex items-center gap-3">
                  <MapPin className="size-4 text-navy-700" aria-hidden="true" />
                  <span className="text-[0.78rem] text-navy-900/75">{university.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="size-4 text-navy-700" aria-hidden="true" />
                  <span className="text-[0.78rem] text-navy-900/75">Private · Not-for-profit</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={100}>
            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-navy-950/15" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={images.campus}
                  alt="Aerial view of the AAT University campus"
                  loading="lazy"
                  className="aspect-[4/3.4] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                    Oke-Ogba, Ganmo
                  </p>
                  <p className="mt-1 font-display text-[1.5rem] text-white">Ilorin, Kwara State</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="vision" className="scroll-mt-28 border-y border-navy-950/10 bg-paper py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Vision, mission & philosophy"
            title="Purpose that shapes everything we do."
            description="AAT University is guided by a clear sense of institutional purpose: to educate, to serve and to advance development across generations."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-navy-950 p-8 text-white sm:p-10">
                <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-crest-600/25 blur-[90px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-24 -left-10 size-56 rounded-full bg-gold-400/10 blur-[80px]" aria-hidden="true" />
                <span className="relative text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                  Our vision
                </span>
                <p className="relative mt-6 font-display text-[2rem] leading-[1.08] sm:text-[2.4rem]">
                  To advance generational development through education that is accessible,
                  rigorous and purposeful.
                </p>
                <div className="relative mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-crest-500 to-gold-400 transition-all duration-500 group-hover:w-24" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-950/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-40px_rgba(5,14,34,0.3)] sm:p-10">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-400 via-crest-600 to-navy-500" aria-hidden="true" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-crest-700">
                  Our mission
                </span>
                <p className="mt-6 font-display text-[2rem] leading-[1.08] text-navy-950 sm:text-[2.4rem]">
                  To provide rigorous, practical and character-forming education through excellent
                  teaching, relevant research and meaningful community engagement.
                </p>
                <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-navy-500 to-gold-400 transition-all duration-500 group-hover:w-24" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[0.72rem] leading-relaxed text-navy-900/55">
              Institutional statements shown in this design preview should be confirmed against
              the university’s approved vision, mission and philosophy before publication.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-blue-500/5 blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-10 size-72 rounded-full bg-crest-600/5 blur-[100px]" aria-hidden="true" />
        <div className="container-page relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Institutional history"
              title="A young institution, already looking forward."
              description="The university’s development has been deliberate: approval of academic programmes, preparation of facilities and the appointment of leadership to guide the next phase."
            />
            <Reveal delay={200}>
              <Link
                to="/news"
                className="group mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy-900"
              >
                <span className="link-underline">University news</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-navy-950/10 bg-navy-950 p-6 text-white shadow-[0_36px_72px_-48px_rgba(5,14,34,0.55)] sm:p-9">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-crest-600/20 blur-[80px]" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 size-48 rounded-full bg-blue-500/10 blur-[70px]" aria-hidden="true" />
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-crest-500 to-gold-400" aria-hidden="true" />

              <div className="relative">
                <div className="absolute bottom-0 left-[0.4rem] top-2 w-px bg-gradient-to-b from-blue-400 via-crest-500 to-gold-400 sm:left-[0.45rem]" aria-hidden="true" />
                <div className="space-y-9">
                  {timeline.map((item, index) => {
                    const styles = timelineStyles[index % timelineStyles.length]
                    return (
                      <Reveal key={`${item.year}-${item.title}`} delay={index * 100}>
                        <div className="group relative pl-8 transition-transform duration-300 hover:translate-x-1 sm:pl-10">
                          <span
                            className={`absolute left-0 top-1.5 size-3.5 rounded-full border-[3px] border-navy-950 ring-1 ring-white/30 shadow-[0_0_0_4px_rgba(255,255,255,0.03)] ${styles.dot}`}
                            aria-hidden="true"
                          />
                          <span className={`inline-flex rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ring-1 ${styles.pill}`}>
                            {item.year}
                          </span>
                          <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-white transition-colors duration-300 group-hover:text-gold-200">
                            {item.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-[0.86rem] leading-relaxed text-white/70 transition-colors group-hover:text-white/85">
                            {item.description}
                          </p>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-35" aria-hidden="true" />
        <div className="container-page relative">
          <SectionHeading
            tone="light"
            eyebrow="Our guiding principles"
            title="What we expect of ourselves."
            description="The values below describe the culture the university is building for its students, staff and wider community."
          />
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon
              const iconColors = [
                'bg-sky-400/10 text-sky-300 ring-sky-400/25',
                'bg-crest-500/10 text-crest-200 ring-crest-500/25',
                'bg-gold-400/10 text-gold-300 ring-gold-400/25',
                'bg-emerald-400/10 text-emerald-300 ring-emerald-400/25',
              ]
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="group border-t border-white/15 pt-6 transition-colors duration-500 hover:border-gold-300/50">
                    <span className={`grid size-10 place-items-center rounded-lg ring-1 transition-transform duration-500 group-hover:scale-110 ${iconColors[index % iconColors.length]}`}>
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-[1.35rem]">{item.title}</h3>
                    <p className="mt-2.5 text-[0.82rem] leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal variant="scale">
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={images.campus}
                    alt="Academic buildings on the AAT University campus"
                    loading="lazy"
                    style={{ objectPosition: '20% 40%' }}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl">
                  <img
                    src={images.campus}
                    alt="Campus drive and landscaping at AAT University"
                    loading="lazy"
                    style={{ objectPosition: '70% 65%' }}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Campus & facilities"
                title="An environment designed for learning."
                description="The university’s campus in Oke-Ogba, Ganmo brings teaching, library and laboratory facilities together in a focused academic setting."
              />
              <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {facilities.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Reveal key={item.title} delay={index * 90}>
                      <div className="group flex items-start gap-3.5">
                        <span className={`grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${['bg-blue-50 text-blue-600', 'bg-crest-50 text-crest-600', 'bg-gold-100 text-gold-500', 'bg-teal-50 text-teal-700'][index % 4]}`}>
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-[0.84rem] font-semibold text-navy-950">{item.title}</h3>
                          <p className="mt-1 text-[0.78rem] leading-relaxed text-navy-900/70">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-950/10 bg-paper py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Leadership & governance"
              title="Guided by clear institutional oversight."
              description="The university is led by its Vice-Chancellor, supported by principal officers and governed through the Governing Council, University Management and Academic Board."
            />
          </div>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-navy-950/10 bg-white p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                    Vice-Chancellor
                  </p>
                  <p className="mt-2 font-display text-[1.6rem] leading-tight text-navy-950">
                    Professor Olayemi Mikail Olaniyi
                  </p>
                  <p className="mt-1 text-[0.72rem] text-navy-900/65">Effective 4 September 2026</p>
                </div>
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-navy-800 to-crest-700 font-display text-lg text-white shadow-[0_10px_24px_-14px_rgba(200,16,46,0.7)]">
                  OO
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 border-t border-navy-950/10 pt-6">
                <Link
                  to="/management"
                  className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:text-crest-700"
                >
                  <span className="link-underline">Meet the leadership</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900/70"
                >
                  <span className="link-underline">Contact the university</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
