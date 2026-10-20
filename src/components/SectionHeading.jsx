import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
  children,
}) {
  const isLight = tone === 'light'
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${centered ? 'justify-center' : ''} ${isLight ? '!text-navy-200' : ''}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`display mt-5 text-[2.6rem] leading-[0.98] sm:text-5xl lg:text-[3.6rem] ${
            isLight ? 'text-white' : 'text-navy-950'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={`mt-5 max-w-2xl text-[0.95rem] leading-relaxed sm:text-base ${
              centered ? 'mx-auto' : ''
            } ${isLight ? 'text-white/75' : 'text-navy-900/75'}`}
          >
            {description}
          </p>
        </Reveal>
      )}
      {children && <Reveal delay={220}>{children}</Reveal>}
    </div>
  )
}
