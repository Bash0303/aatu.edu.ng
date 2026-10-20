import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Download,
  FileText,
  GraduationCap,
  HelpCircle,
  Info,
  MapPin,
  Maximize2,
  Phone,
  X,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import usePageMeta from '../hooks/usePageMeta'
import {
  admissionFaqs,
  admissionRequirements,
  admissionSteps,
  faculties,
  images,
  newProgrammes,
  programmes,
  university,
} from '../data/site'

const requirementGroups = [
  { key: 'utme', icon: GraduationCap, data: admissionRequirements.utme },
  { key: 'directEntry', icon: BookOpen, data: admissionRequirements.directEntry },
]

export default function Admissions() {
  usePageMeta(
    'Admissions',
    'AAT University admission requirements for 2026/2027: UTME and Direct Entry qualifications, application steps, available programmes and frequently asked questions.',
  )

  const [flierOpen, setFlierOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!flierOpen) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setFlierOpen(false)
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [flierOpen])

  return (
    <>
      <PageHeader
        eyebrow="Admissions 2026/2027"
        title={
          <>
            Your next chapter starts <span className="italic text-gold-300">here.</span>
          </>
        }
        description="Everything you need to know about applying to Abdulrasaq Abubakar Toyin University — entry requirements, application steps and the programmes available for the 2026/2027 academic session."
        crumbs={[{ label: 'Admissions' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a href="#apply" className="btn btn-light">
            How to apply
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <button type="button" onClick={() => setFlierOpen(true)} className="btn btn-outline-light">
            View admission flier
            <Maximize2 className="size-4" aria-hidden="true" />
          </button>
        </div>
      </PageHeader>

      <section className="border-b border-navy-950/10 bg-white">
        <div className="container-page grid gap-6 py-10 sm:grid-cols-3 sm:divide-x sm:divide-navy-950/10">
          {[
            { icon: GraduationCap, label: 'Two entry routes', value: 'UTME & Direct Entry', tint: 'bg-blue-50 text-blue-600' },
            { icon: BookOpen, label: 'Full-time degrees', value: '14 programmes at take-off', tint: 'bg-crest-50 text-crest-600' },
            { icon: FileText, label: 'New approvals', value: '15 programmes for 2026/2027', tint: 'bg-teal-50 text-teal-700' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="group flex items-start gap-4 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <span className={`grid size-11 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${item.tint}`}>
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-navy-900/55">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[0.92rem] font-semibold text-navy-950">{item.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="requirements" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Entry requirements"
              title="What you need to apply."
              description="Admission is available through UTME and Direct Entry. Candidates should review the requirements carefully and confirm their specific qualifications with the Admissions Office."
            />

            <div className="mt-10 space-y-4">
              {requirementGroups.map((group, index) => {
                const Icon = group.icon
                const isUtme = group.key === 'utme'
                return (
                  <Reveal key={group.key} delay={index * 100}>
                    <div
                      className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-38px_rgba(5,14,34,0.4)] sm:p-7 ${
                        isUtme ? 'border-blue-600/20 bg-blue-50/40' : 'border-gold-400/40 bg-gold-100/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`grid size-10 place-items-center rounded-full text-white ${isUtme ? 'bg-blue-600' : 'bg-gold-500'}`}>
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-[1.5rem] text-navy-950">{group.data.title}</h3>
                      </div>
                      <ul className="mt-5 space-y-3">
                        {group.data.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-[0.85rem] leading-relaxed text-navy-900/75">
                            <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white ring-1 ${isUtme ? 'text-blue-600 ring-blue-600/15' : 'text-gold-500 ring-gold-500/20'}`}>
                              <Check className="size-3" aria-hidden="true" />
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={180}>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-navy-950/10 bg-white p-4">
                <Info className="mt-0.5 size-4 shrink-0 text-navy-600" aria-hidden="true" />
                <p className="text-[0.76rem] leading-relaxed text-navy-900/70">
                  Admission requirements are subject to verification and may be updated by the
                  university. Candidates should confirm all qualifications, programme availability
                  and screening arrangements with the Admissions Office before applying.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={120}>
            <div className="lg:sticky lg:top-28">
              <button
                type="button"
                onClick={() => setFlierOpen(true)}
                className="group relative block w-full text-left"
                aria-label="Open the full admission requirements flier"
              >
                <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl border-2 border-crest-600/25 transition-transform duration-500 group-hover:translate-x-3.5 group-hover:translate-y-3.5" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-2xl border border-navy-950/10 bg-navy-50 shadow-soft">
                  <img
                    src={images.flier}
                    alt="AAT University admission requirements and full-time degree programmes flier"
                    loading="lazy"
                    className="h-[28rem] w-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.02] sm:h-[32rem]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent p-5 pt-14">
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
                      Official admission flier · 2026/2027
                    </p>
                    <div className="mt-1.5 flex items-end justify-between gap-4">
                      <p className="font-display text-[1.3rem] leading-tight text-white">
                        Requirements & full-time programmes
                      </p>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-navy-950">
                        <Maximize2 className="size-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                <button
                  type="button"
                  onClick={() => setFlierOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-navy-900"
                >
                  <Maximize2 className="size-3.5" aria-hidden="true" />
                  View full flier
                </button>
                <a
                  href={images.flier}
                  download="AATU-Admission-Requirements-2026-2027.jpg"
                  className="inline-flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-navy-900/70 transition-colors hover:text-navy-950"
                >
                  <Download className="size-3.5" aria-hidden="true" />
                  Download
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 border-y border-navy-950/10 bg-paper py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How to apply"
            title="Four steps to begin."
            description="The admission process is straightforward. Follow the steps below, then speak with the Admissions Office to confirm the next stage of your application."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((item, index) => {
              const stepColors = [
                'text-blue-600 group-hover:text-blue-500',
                'text-crest-600 group-hover:text-crest-500',
                'text-gold-500 group-hover:text-gold-400',
                'text-teal-700 group-hover:text-teal-600',
              ]
              return (
              <Reveal key={item.step} delay={index * 110}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-navy-950/30 hover:shadow-[0_28px_56px_-40px_rgba(5,14,34,0.35)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-crest-600 via-gold-400 to-navy-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-[2.4rem] leading-none transition-colors duration-500 ${stepColors[index % stepColors.length]}`}>
                      {item.step}
                    </span>
                    <span className="grid size-8 place-items-center rounded-full border border-navy-950/10 text-navy-900/55 transition-colors group-hover:border-crest-600/30 group-hover:bg-crest-50 group-hover:text-crest-700">
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.4rem] leading-tight text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.8rem] leading-relaxed text-navy-900/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
              )
            })}
          </div>

          <Reveal delay={160}>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-navy-950 p-7 text-white sm:flex-row sm:items-center sm:p-9">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Need guidance?
                </p>
                <p className="mt-2 max-w-xl font-display text-[1.6rem] leading-tight sm:text-[1.9rem]">
                  Speak directly with the Admissions Office.
                </p>
                <p className="mt-2 text-[0.8rem] text-white/55">
                  {university.phones[0]} · {university.email}
                </p>
              </div>
              <Link to="/contact" className="btn btn-light shrink-0">
                Contact admissions
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Programmes"
            title="Full-time degree programmes."
            description="The university offers undergraduate programmes across three founding faculties, with fifteen further programmes approved for the 2026/2027 session."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {faculties.map((faculty, index) => {
              const facultyProgrammes = programmes.filter((programme) =>
                faculty.programmes.includes(programme.slug),
              )

              return (
                <Reveal key={faculty.id} delay={index * 100}>
                  <div
                    className="flex h-full flex-col rounded-2xl border border-t-[3px] border-navy-950/10 bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-38px_rgba(5,14,34,0.35)]"
                    style={{ borderTopColor: faculty.accent }}
                  >
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em]" style={{ color: faculty.accent }}>
                      {faculty.code}
                    </p>
                    <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-navy-950">
                      {faculty.shortName}
                    </h3>
                    <ul className="mt-5 flex-1 space-y-2.5 border-t border-navy-950/10 pt-5">
                      {facultyProgrammes.map((programme) => (
                        <li key={programme.slug} className="flex items-center gap-2.5 text-[0.8rem] text-navy-900/75">
                          <span className="size-1.5 rounded-full" style={{ backgroundColor: faculty.accent }} />
                          {programme.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-navy-950/10 bg-paper p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-navy-900/55">
                  Plus {newProgrammes.length} programmes approved for 2026/2027
                </p>
                <p className="mt-1.5 text-[0.84rem] text-navy-900/75">
                  Including Law, Nursing Science, Artificial Intelligence, Mass Communication and more.
                </p>
              </div>
              <Link
                to="/academics#new-programmes"
                className="group inline-flex shrink-0 items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-900"
              >
                <span className="link-underline">View new programmes</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-24 border-t border-navy-950/10 bg-paper py-20 sm:py-24 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Admission FAQs"
              title="Questions, answered."
              description="A few of the questions candidates ask most often. If your question is not covered here, the Admissions Office is available to help."
            />
            <Reveal delay={160}>
              <div className="mt-8 rounded-2xl border border-navy-950/10 bg-white p-6">
                <span className="grid size-10 place-items-center rounded-full bg-gold-100 text-gold-500">
                  <HelpCircle className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-[0.82rem] leading-relaxed text-navy-900/70">
                  Reach the admissions team by telephone or email for guidance on your specific
                  qualifications.
                </p>
                <a
                  href={`tel:${university.phones[0].replace(/\s/g, '')}`}
                  className="mt-4 flex items-center gap-2 text-[0.78rem] font-semibold text-navy-900 transition-colors hover:text-navy-600"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {university.phones[0]}
                </a>
                <a
                  href={`mailto:${university.email}`}
                  className="mt-2 flex items-center gap-2 text-[0.78rem] font-semibold text-navy-900 transition-colors hover:text-navy-600"
                >
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  {university.email}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {admissionFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <Reveal key={faq.question} delay={index * 60}>
                  <div
                    className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                      isOpen ? 'border-crest-600/30 bg-white shadow-[0_18px_36px_-32px_rgba(5,14,34,0.5)]' : 'border-navy-950/10 bg-white/60'
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-crest-50/50"
                      >
                        <span className={`text-[0.86rem] font-semibold transition-colors ${isOpen ? 'text-crest-700' : 'text-navy-950'}`}>{faq.question}</span>
                        <ChevronDown
                          className={`size-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-crest-600' : 'text-navy-900/60'}`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${index}`}
                      className={`grid transition-all duration-500 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[0.82rem] leading-relaxed text-navy-900/75">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-2xl border border-navy-950/10 bg-paper p-7 sm:flex-row sm:items-center sm:p-9">
          <div className="flex items-start gap-5">
            <span className="hidden size-12 shrink-0 place-items-center rounded-full bg-navy-950 text-white sm:grid">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                Visit us
              </p>
              <p className="mt-1.5 font-display text-[1.5rem] leading-tight text-navy-950 sm:text-[1.8rem]">
                Oke-Ogba, Ganmo, Ilorin, Kwara State.
              </p>
              <p className="mt-1 text-[0.78rem] text-navy-900/65">
                Please contact the university before travelling to campus.
              </p>
            </div>
          </div>
          <Link to="/contact" className="btn btn-primary shrink-0">
            Plan your visit
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {flierOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="AAT University admission requirements flier"
          onClick={() => setFlierOpen(false)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setFlierOpen(false)}
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-navy-950 sm:right-8 sm:top-8"
            aria-label="Close flier"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <div
            className="max-h-full max-w-3xl overflow-auto rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images.flier}
              alt="AAT University admission requirements and full-time degree programmes"
              className="h-auto w-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
