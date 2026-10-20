import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { about, audiences, closing, coach, faqs, foundingOffer, hero, packages, principles, steps } from './content'

// In dev, highlight [placeholder] text so nothing unfinished slips into production unnoticed.
function Copy({ children }: { children: string }) {
  if (!import.meta.env.DEV) return <>{children}</>
  const parts: ReactNode[] = children.split(/(\[[^\]]+\])/g).map((part, index) =>
    part.startsWith('[') ? <mark className="todo" key={index}>{part}</mark> : part,
  )
  return <>{parts}</>
}

function BookButton({ className = 'button primary', label = hero.primaryCta }: { className?: string; label?: string }) {
  return coach.bookingUrl
    ? <a className={className} href={coach.bookingUrl} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">→</span></a>
    : <a className={className} href="#contact">{label} <span aria-hidden="true">→</span></a>
}

function Site() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const subject = `Intro call request${name ? ` from ${name}` : ''}`
    const body = [
      `Name: ${name}`,
      `Email: ${data.get('email')}`,
      `Sport / training: ${data.get('sport')}`,
      '',
      String(data.get('message') || ''),
    ].join('\n')
    window.location.href = `mailto:${coach.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const nav = [
    ['About', '#about'],
    ['How it works', '#how'],
    ['Coaching', '#coaching'],
    ['FAQ', '#faq'],
  ]

  return (
    <div className="site">
      <header className="site-header">
        <a className="site-brand" href="#top"><span className="brand-mark">b</span><span>{coach.brand}</span></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'Close' : 'Menu'}</button>
        <nav id="site-nav" className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Main">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <BookButton className="button small" label="Book a free call" />
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="kicker"><span className="kicker-line" />{hero.kicker}</span>
            <h1>{hero.title} <em>{hero.titleAccent}</em></h1>
            <p className="lede">{hero.lede}</p>
            <div className="hero-actions">
              <BookButton />
              <a className="button ghost" href="#how">{hero.secondaryCta}</a>
            </div>
            <p className="hero-meta"><Copy>{coach.location}</Copy></p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-photo" style={{ backgroundImage: `url(${coach.photo})` }} />
            <div className="hero-card">
              <span className="card-kicker">THIS WEEK'S BIG ROCK</span>
              <p>Have a snack 60–90 minutes before evening training.</p>
              <ul>
                <li className="done"><span>✓</span>Water bottle to work</li>
                <li><span>02</span>Protein choice at lunch</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-intro">
            <span className="kicker"><span className="kicker-line" />About</span>
            <h2>{about.heading}</h2>
            {about.paragraphs.map((paragraph) => <p key={paragraph}><Copy>{paragraph}</Copy></p>)}
            <a className="text-link" href={coach.linkedIn} target="_blank" rel="noreferrer">View my LinkedIn →</a>
          </div>
          <div className="about-side">
            <img className="headshot" src={coach.headshot} alt={`${coach.name}, smiling, in a navy sports jacket`} width={468} height={420} />
            <p className="post-nominals">{coach.name}, {coach.postNominals}</p>
            <dl className="credentials">
              {about.credentials.map((item) => (
                <div key={item.label}><dt><Copy>{item.label}</Copy></dt><dd><Copy>{item.detail}</Copy></dd></div>
              ))}
            </dl>
            <span className="card-kicker">Experience</span>
            <ol className="experience">
              {about.experience.map((item) => (
                <li key={item.role}><span className="experience-dates">{item.dates}</span><strong>{item.role}</strong><small>{item.org}</small></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section audiences">
          <div className="section-head">
            <span className="kicker"><span className="kicker-line" />Who I work with</span>
            <h2>Built for people who move.</h2>
          </div>
          <div className="audience-grid">
            {audiences.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </section>

        <section className="section how" id="how">
          <div className="section-head">
            <span className="kicker"><span className="kicker-line" />How it works</span>
            <h2>One focus. A few actions. Regular check-ins.</h2>
          </div>
          <ol className="steps">
            {steps.map((step) => <li key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}
          </ol>
        </section>

        <section className="section coaching" id="coaching">
          <div className="section-head">
            <span className="kicker"><span className="kicker-line" />Coaching options</span>
            <h2>Two ways to work together.</h2>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <article className={`package ${item.featured ? 'featured' : ''}`} key={item.name}>
                <span className="card-kicker">{item.length}</span>
                <h3>{item.name}</h3>
                <p className="package-summary">{item.summary}</p>
                <p className="price">{item.price ? <><strong><Copy>{item.price}</Copy></strong> <span>{item.unit}</span></> : <span>Pricing discussed on your intro call</span>}</p>
                <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <BookButton className={item.featured ? 'button primary' : 'button ghost'} label="Start with a free call" />
              </article>
            ))}
          </div>
          <aside className="founding">
            <span className="founding-mark">✳</span>
            <div><h3>{foundingOffer.title}</h3><p>{foundingOffer.body}</p></div>
            <span className="founding-spots"><Copy>{foundingOffer.spots}</Copy></span>
          </aside>
        </section>

        <section className="section principles">
          {principles.map((item) => <div key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>)}
        </section>

        <section className="section faq" id="faq">
          <div className="section-head">
            <span className="kicker"><span className="kicker-line" />FAQ</span>
            <h2>Good questions.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p><Copy>{item.a}</Copy></p></details>)}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy">
            <span className="kicker"><span className="kicker-line" />Get started</span>
            <h2>{closing.title}</h2>
            <p>{closing.body}</p>
            {coach.bookingUrl && <BookButton />}
            <p className="contact-email">Or email <a href={`mailto:${coach.email}`}><Copy>{coach.email}</Copy></a></p>
          </div>
          <form className="contact-form" onSubmit={sendEnquiry}>
            <label htmlFor="enquiry-name">Name</label>
            <input id="enquiry-name" name="name" required autoComplete="name" />
            <label htmlFor="enquiry-email">Email</label>
            <input id="enquiry-email" name="email" type="email" required autoComplete="email" />
            <label htmlFor="enquiry-sport">Sport or training</label>
            <input id="enquiry-sport" name="sport" placeholder="e.g. Running, 4 sessions a week" />
            <label htmlFor="enquiry-message">What would you like help with?</label>
            <textarea id="enquiry-message" name="message" rows={4} />
            <button className="button primary" type="submit">Request an intro call <span aria-hidden="true">→</span></button>
            {sent && <p className="form-note" role="status">Your email app should now be open with your message ready to send.</p>}
            <p className="form-note">Please don't include medical details here.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {coach.brand}</span>
        <span>Nutrition coaching supports habits and does not replace medical care.</span>
      </footer>
    </div>
  )
}

export default Site
