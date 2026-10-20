import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Megaphone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import NewsCard from '../components/NewsCard'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { news } from '../data/site'

export default function News() {
  usePageMeta(
    'News & Announcements',
    'The latest news, official announcements and academic developments from AbdulRasaq Abubakar Toyin University.',
  )

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(news.map((article) => article.category)))],
    [],
  )
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = news.filter(
    (article) => activeCategory === 'All' || article.category === activeCategory,
  )

  return (
    <>
      <PageHeader
        eyebrow="News & media"
        title={
          <>
            News, notices and <span className="italic text-gold-300">university life.</span>
          </>
        }
        description="Follow official announcements, academic developments and stories from the AAT University community."
        crumbs={[{ label: 'News & Media' }]}
      >
        <Link to="/gallery" className="btn btn-light">
          Campus gallery
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHeader>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 border-b border-navy-950/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">The latest</span>
              <h2 className="display mt-4 text-[2.2rem] text-navy-950 sm:text-[2.8rem]">
                From the university.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full border px-4 py-2 text-[0.66rem] font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'border-navy-950 bg-gradient-to-r from-navy-950 to-navy-800 text-white shadow-[0_8px_18px_-12px_rgba(5,14,34,0.8)]'
                      : 'border-navy-950/15 text-navy-900/75 hover:border-crest-600/40 hover:bg-crest-50 hover:text-crest-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, index) => (
              <Reveal key={article.slug} delay={(index % 3) * 80}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl border border-navy-950/10 bg-paper p-6 sm:flex-row sm:items-center sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-crest-600 text-white">
                  <Megaphone className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy-900/55">
                    Official announcements
                  </p>
                  <p className="mt-1 text-[0.84rem] text-navy-900/75">
                    Always verify admission and university information through official channels.
                  </p>
                </div>
              </div>
              <Link to="/contact" className="btn btn-accent shrink-0">
                Contact the university
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
