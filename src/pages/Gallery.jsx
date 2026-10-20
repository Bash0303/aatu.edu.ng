import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Images, Maximize2, X } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { gallery } from '../data/site'

export default function Gallery() {
  usePageMeta(
    'Campus Gallery',
    'Explore the campus and environment of AbdulRasaq Abubakar Toyin University in Oke-Ogba, Ganmo, Ilorin, Kwara State.',
  )

  const [activeIndex, setActiveIndex] = useState(null)
  const closeRef = useRef(null)
  const isOpen = activeIndex !== null

  useEffect(() => {
    if (!isOpen) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length)
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  const active = isOpen ? gallery[activeIndex] : null

  return (
    <>
      <PageHeader
        eyebrow="Campus gallery"
        title={
          <>
            A closer look at <span className="italic text-gold-300">AAT University.</span>
          </>
        }
        description="Images of the university’s campus and learning environment in Oke-Ogba, Ganmo, Ilorin, Kwara State."
        crumbs={[{ label: 'News & Media', to: '/news' }, { label: 'Gallery' }]}
      >
        <Link to="/contact" className="btn btn-light">
          Plan a campus visit
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHeader>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Photo collection</span>
              <h2 className="display mt-4 text-[2.2rem] text-navy-950 sm:text-[2.8rem]">
                The campus in view.
              </h2>
            </div>
            <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy-900/55">
              <Images className="size-4 text-crest-600" aria-hidden="true" />
              {gallery.length} images
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[13rem] lg:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 3) * 70}
                className={
                  index === 0
                    ? 'col-span-2 lg:row-span-2'
                    : ''
                }
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative block h-full w-full overflow-hidden rounded-xl bg-navy-100 text-left sm:rounded-2xl ${
                    index === 0 ? 'aspect-[16/10] lg:aspect-auto' : 'aspect-[4/3] lg:aspect-auto lg:min-h-[13rem]'
                  }`}
                  aria-label={`View ${item.title}`}
                >
                  {item.contain ? (
                    <span className="absolute inset-0 grid place-items-center bg-paper p-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="max-h-full w-auto rounded-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </span>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{ objectPosition: item.position }}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-105"
                    />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-0 bg-crest-700/0 transition-colors duration-500 group-hover:bg-crest-700/15" aria-hidden="true" />
                  <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:bg-crest-600 group-hover:opacity-100">
                    <Maximize2 className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="block text-[0.78rem] font-semibold text-white transition-colors group-hover:text-gold-200">{item.title}</span>
                    <span className="mt-0.5 hidden text-[0.7rem] leading-relaxed text-white/55 sm:block">
                      {item.caption}
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-navy-950/10 bg-paper p-6 sm:flex-row sm:items-center sm:p-7">
              <p className="max-w-2xl text-[0.78rem] leading-relaxed text-navy-900/70">
                Additional photographs of academic facilities, events and student life will be
                published as the university community grows.
              </p>
              <Link to="/news" className="btn btn-primary shrink-0">
                Read university news
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[90] flex flex-col bg-navy-950/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/50">
              {activeIndex + 1} / {gallery.length}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-crest-500 hover:bg-crest-600 hover:text-white"
              aria-label="Close gallery"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center p-4 sm:p-10">
            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length)}
              className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-navy-950/60 text-white transition-colors hover:border-crest-500 hover:bg-crest-600 hover:text-white sm:left-8"
              aria-label="Previous image"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>

            <figure className="flex max-h-full max-w-5xl flex-col items-center">
              {active.contain ? (
                <div className="grid place-items-center rounded-full bg-paper p-8 sm:p-12">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="max-h-[62vh] w-auto rounded-full object-contain"
                  />
                </div>
              ) : (
                <img
                  src={active.image}
                  alt={active.title}
                  className="max-h-[68vh] w-full rounded-xl object-contain"
                />
              )}
              <figcaption className="mt-5 max-w-xl text-center">
                <p className="font-display text-xl text-gold-200">{active.title}</p>
                <p className="mt-1 text-[0.76rem] leading-relaxed text-white/55">{active.caption}</p>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % gallery.length)}
              className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-navy-950/60 text-white transition-colors hover:border-crest-500 hover:bg-crest-600 hover:text-white sm:right-8"
              aria-label="Next image"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
