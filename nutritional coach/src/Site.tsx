import { createContext, useContext, useEffect, useState } from 'react'
import type { FormEvent, MouseEvent, ReactNode } from 'react'
import {
  about, audiences, closing, coach, discoveryCall, faqs, foundingOffer, hero, homeIntro,
  packages, pageIntros, principles, steps, testimonials,
} from './content'

const pages = [
  { path: '/', label: 'Home', title: `${coach.name} | Nutrition coaching for people who train` },
  { path: '/about', label: 'About', title: `About | ${coach.name}` },
  { path: '/what-i-offer', label: 'What I offer', title: `What I offer | ${coach.name}` },
  { path: '/testimonials', label: 'Testimonials', title: `Testimonials | ${coach.name}` },
  { path: '/faq', label: 'FAQ', title: `FAQ | ${coach.name}` },
  { path: '/discovery-call', label: 'Book a free discovery call', title: `Book a free discovery call | ${coach.name}` },
]

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return pages.some((page) => page.path === path) ? path : '/'
}

// Minimal client-side router: real URLs (/about, /faq…) without page reloads.
const NavigateContext = createContext<(to: string) => void>(() => {})

function Link({ to, className, children, onNavigate }: { to: string; className?: string; children: ReactNode; onNavigate?: () => void }) {
  const navigate = useContext(NavigateContext)
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(to)
    onNavigate?.()
  }
  const active = window.location.pathname.replace(/\/+$/, '') === to.replace(/\/+$/, '')
  return <a href={to} className={className} aria-current={active ? 'page' : undefined} onClick={handleClick}>{children}</a>
}

// In dev, highlight [placeholder] text so nothing unfinished slips into production unnoticed.
function Copy({ children }: { children: string }) {
  if (!import.meta.env.DEV) return <>{children}</>
  const parts: ReactNode[] = children.split(/(\[[^\]]+\])/g).map((part, index) =>
    part.startsWith('[') ? <mark className="todo" key={index}>{part}</mark> : part,
  )
  return <>{parts}</>
}

function BookButton({ className = 'button primary', label = hero.primaryCta }: { className?: string; label?: string }) {
  const content = <>{label} <span aria-hidden="true">→</span></>
  return coach.bookingUrl
    ? <a className={className} href={coach.bookingUrl} target="_blank" rel="noreferrer">{content}</a>
    : <Link className={className} to="/discovery-call">{content}</Link>
}

function Kicker({ children }: { children: ReactNode }) {
  return <span className="kicker"><span className="kicker-line" />{children}</span>
}

function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <section className="page-intro">
      <Kicker>{kicker}</Kicker>
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
    </section>
  )
}

function CtaBand() {
  return (
    <section className="cta-band">
      <div>
        <h2>{closing.title}</h2>
        <p>{closing.body}</p>
      </div>
      <BookButton />
    </section>
  )
}

function Principles() {
  return (
    <section className="section principles">
      {principles.map((item) => <div key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>)}
    </section>
  )
}

function Steps() {
  return (
    <ol className="steps">
      {steps.map((step) => <li key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}
    </ol>
  )
}

function Audiences() {
  return (
    <div className="audience-grid">
      {audiences.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
    </div>
  )
}

function Headshot() {
  return <img className="headshot" src={coach.headshot} alt={`${coach.name}, smiling, in a navy sports jacket`} width={420} height={420} />
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Kicker>{hero.kicker}</Kicker>
          <h1>{hero.title} <em>{hero.titleAccent}</em></h1>
          <p className="lede">{hero.lede}</p>
          <div className="hero-actions">
            <BookButton />
            <Link className="button ghost" to="/what-i-offer">{hero.secondaryCta}</Link>
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

      <section className="section meet">
        <Headshot />
        <div>
          <Kicker>Meet your coach</Kicker>
          <h2>{about.heading}</h2>
          <p>{homeIntro.body}</p>
          <Link className="text-link" to="/about">Read my story →</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <Kicker>Who I work with</Kicker>
          <h2>Built for people who move.</h2>
        </div>
        <Audiences />
      </section>

      <section className="section">
        <div className="section-head">
          <Kicker>How it works</Kicker>
          <h2>One focus. A few actions. Regular check-ins.</h2>
        </div>
        <Steps />
        <p className="section-more"><Link className="text-link" to="/what-i-offer">See coaching options →</Link></p>
      </section>

      <Principles />
      <CtaBand />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageIntro {...pageIntros.about} />
      <section className="section about">
        <div className="about-intro">
          <h2>{about.heading}</h2>
          {about.paragraphs.map((paragraph) => <p key={paragraph}><Copy>{paragraph}</Copy></p>)}
          <a className="text-link" href={coach.linkedIn} target="_blank" rel="noreferrer">View my LinkedIn →</a>
        </div>
        <div className="about-side">
          <Headshot />
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
      <Principles />
      <CtaBand />
    </>
  )
}

function OfferPage() {
  return (
    <>
      <PageIntro {...pageIntros.offer} />
      <section className="section">
        <div className="section-head">
          <Kicker>Coaching options</Kicker>
          <h2>Two ways to work together.</h2>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className={`package ${item.featured ? 'featured' : ''}`} key={item.name}>
              <span className="card-kicker">{item.length}</span>
              <h3>{item.name}</h3>
              <p className="package-summary">{item.summary}</p>
              <p className="price">{item.price ? <><strong><Copy>{item.price}</Copy></strong> <span>{item.unit}</span></> : <span>Pricing discussed on your discovery call</span>}</p>
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
      <section className="section">
        <div className="section-head">
          <Kicker>How it works</Kicker>
          <h2>One focus. A few actions. Regular check-ins.</h2>
        </div>
        <Steps />
      </section>
      <section className="section">
        <div className="section-head">
          <Kicker>Who I work with</Kicker>
          <h2>Built for people who move.</h2>
        </div>
        <Audiences />
      </section>
      <CtaBand />
    </>
  )
}

function TestimonialsPage() {
  return (
    <>
      <PageIntro {...pageIntros.testimonials} />
      <section className="section">
        {testimonials.length > 0 ? (
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure key={item.quote}>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption><strong>{item.name}</strong><span>{item.context}</span></figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="founding-mark">✳</span>
            <h2>Be one of my first clients.</h2>
            <p>{foundingOffer.body}</p>
            <p className="founding-spots"><Copy>{foundingOffer.spots}</Copy></p>
            <BookButton />
          </div>
        )}
      </section>
      <CtaBand />
    </>
  )
}

function FaqPage() {
  return (
    <>
      <PageIntro {...pageIntros.faq} />
      <section className="section">
        <div className="faq-list">
          {faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p><Copy>{item.a}</Copy></p></details>)}
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function DiscoveryPage() {
  const [sent, setSent] = useState(false)

  function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const subject = `Discovery call request${name ? ` from ${name}` : ''}`
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

  return (
    <>
      <PageIntro {...pageIntros.discovery} />
      <section className="section contact">
        <div className="contact-copy">
          <Kicker>What we'll cover</Kicker>
          <ol className="expect-list">
            {discoveryCall.expect.map((item) => <li key={item.title}><strong>{item.title}</strong><span>{item.body}</span></li>)}
          </ol>
          {coach.bookingUrl && <BookButton label="Choose a time" />}
          <p className="contact-email">Prefer email? <a href={`mailto:${coach.email}`}><Copy>{coach.email}</Copy></a></p>
        </div>
        <form className="contact-form" onSubmit={sendEnquiry}>
          <h2 className="form-title">{coach.bookingUrl ? 'Or send a message' : 'Request your call'}</h2>
          <label htmlFor="enquiry-name">Name</label>
          <input id="enquiry-name" name="name" required autoComplete="name" />
          <label htmlFor="enquiry-email">Email</label>
          <input id="enquiry-email" name="email" type="email" required autoComplete="email" />
          <label htmlFor="enquiry-sport">Sport or training</label>
          <input id="enquiry-sport" name="sport" placeholder="e.g. Running, 4 sessions a week" />
          <label htmlFor="enquiry-message">What would you like help with?</label>
          <textarea id="enquiry-message" name="message" rows={4} />
          <button className="button primary" type="submit">Request a discovery call <span aria-hidden="true">→</span></button>
          {sent && <p className="form-note" role="status">Your email app should now be open with your message ready to send.</p>}
          <p className="form-note">Please don't include medical details here.</p>
        </form>
      </section>
    </>
  )
}

const pageComponents: Record<string, () => ReactNode> = {
  '/': HomePage,
  '/about': AboutPage,
  '/what-i-offer': OfferPage,
  '/testimonials': TestimonialsPage,
  '/faq': FaqPage,
  '/discovery-call': DiscoveryPage,
}

function Site() {
  const [path, setPath] = useState(currentPath)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onPop = () => setPath(currentPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    document.title = pages.find((page) => page.path === path)?.title ?? pages[0].title
  }, [path])

  function navigate(to: string) {
    if (to !== window.location.pathname) window.history.pushState(null, '', to)
    setPath(to)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const Page = pageComponents[path] ?? HomePage
  const navPages = pages.filter((page) => page.path !== '/discovery-call')

  return (
    <NavigateContext.Provider value={navigate}>
      <div className="site">
        <header className="site-header">
          <Link className="site-brand" to="/"><span className="brand-mark">b</span><span>{coach.brand}</span></Link>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'Close' : 'Menu'}</button>
          <nav id="site-nav" className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Main">
            {navPages.map((page) => <Link key={page.path} to={page.path}>{page.label}</Link>)}
            <BookButton className="button small" label="Book a free discovery call" />
          </nav>
        </header>

        <main key={path}>
          <Page />
        </main>

        <footer className="site-footer">
          <nav className="footer-nav" aria-label="Footer">
            {pages.map((page) => <Link key={page.path} to={page.path}>{page.label}</Link>)}
          </nav>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} {coach.brand}</span>
            <span>Nutrition coaching supports habits and does not replace medical care.</span>
          </div>
        </footer>
      </div>
    </NavigateContext.Provider>
  )
}

export default Site
