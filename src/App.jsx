import { useEffect, useState } from 'react'
import { projects } from './data/projects'
import './App.css'

const GITHUB_URL = 'https://github.com/Aguscoro'
const LINKEDIN_URL = 'https://www.linkedin.com/in/agustin-corominas-6a94712a1/'
const EMAIL = 'corominasagustin@gmail.com'

/* Theme -------------------------------------------------------------------- */

// `null` means "follow the system". An explicit choice is mirrored onto
// <html data-theme> and remembered, and index.html replays it before the
// first paint so the page never flashes the wrong theme.
function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      return stored === 'dark' || stored === 'light' ? stored : null
    } catch {
      return null
    }
  })
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme) root.setAttribute('data-theme', theme)
    else root.removeAttribute('data-theme')

    try {
      if (theme) localStorage.setItem('theme', theme)
      else localStorage.removeItem('theme')
    } catch {
      // Private browsing or blocked storage: the choice just won't persist.
    }

    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const sync = () => setIsDark(theme ? theme === 'dark' : query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [theme])

  const toggle = () => setTheme(isDark ? 'light' : 'dark')

  return { isDark, toggle }
}

function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2" />
            <path d="M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
          </g>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  )
}

/* Reveal ------------------------------------------------------------------- */

// Progressive enhancement: the opt-in attribute is only set when motion is
// welcome, so without JS — or with reduced motion — everything renders visible.
function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    root.setAttribute('data-reveal-ready', '')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      root.removeAttribute('data-reveal-ready')
    }
  }, [])
}

/* Copy to clipboard -------------------------------------------------------- */

// The address is on screen either way: this only removes a step. If the
// clipboard is unavailable (insecure context, denied permission) the button
// stays silent rather than claiming a copy that did not happen.
function CopyEmail() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
    } catch {
      // Leave the address for the visitor to select by hand.
    }
  }

  return (
    <button
      className="copy-email"
      type="button"
      onClick={copy}
      data-copied={copied}
      aria-label={copied ? 'Email address copied' : 'Copy email address'}
    >
      <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}

/* Sections ----------------------------------------------------------------- */

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          AC
        </a>
        <div className="nav-right">
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function SectionHead({ index, title }) {
  return (
    <div className="section-head">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" />
    </div>
  )
}

function Hero() {
  return (
    <section className="container hero" id="top">
      <p className="hero-role" data-reveal>
        Software Developer
      </p>
      <h1 className="hero-name" data-reveal>
        <span>Agustín</span>
        <span className="hero-name-last">Corominas</span>
      </h1>
      <p className="hero-pitch" data-reveal>
        I build for the web — from React applications to email templates that
        have to render the same everywhere.
      </p>
      <div className="hero-actions" data-reveal>
        <a className="button button-primary" href="#projects">
          View projects
        </a>
        <a className="button" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index="01" title="About" />
        <p className="about-lead" data-reveal>
          I'm a software developer. Since 2025 I've been at VML, building HTML
          and CSS email templates for a global technology client and deploying
          them through Adobe Experience Manager — code that has to render the
          same across dozens of inboxes, with no second chance once it goes out.
          It taught me to get the details right the first time.
        </p>
        <p className="about-text" data-reveal>
          Outside of work I've built a full-stack JavaScript application with
          its own Express and MongoDB API, and a cross-platform mobile app in C#
          with MVVM and a test suite — both below. Most of what I use I picked
          up when a project needed it: a new stack is a matter of time, not of
          category, and this site is the most recent example, built in React. I
          try to leave behind code the next person can read without a guided
          tour.
        </p>
      </div>
    </section>
  )
}

function ProjectRow({ project, index }) {
  return (
    <article className="project-row" data-reveal>
      <span className="project-index">{index}</span>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-meta">
        <ul className="project-tags">
          {project.tags.map((tag) => (
            <li className="project-tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Code ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead index="02" title="Selected projects" />
        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={String(i + 1).padStart(2, '0')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead index="03" title="Contact" />
        <p className="contact-text" data-reveal>
          Open to new opportunities and collaborations. The fastest way to reach
          me is email.
        </p>
        <div className="contact-email-row" data-reveal>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <CopyEmail />
        </div>
        <div className="contact-links" data-reveal>
          <a
            className="button"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="button"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="container footer">
      <span>© {new Date().getFullYear()} Agustín Corominas</span>
      <span>Built with React and Vite</span>
    </footer>
  )
}

function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
