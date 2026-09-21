import { projects } from './data/projects'
import './App.css'

const GITHUB_URL = 'https://github.com/Aguscoro'
const LINKEDIN_URL = 'https://www.linkedin.com/in/agustin-corominas-6a94712a1/'
const EMAIL = 'corominasagustin@gmail.com'

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          Agustín Corominas
        </a>
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
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="container hero" id="top">
      <p className="hero-role">Software Developer</p>
      <h1 className="hero-name">Agustín Corominas</h1>
      <p className="hero-pitch">
        I build for the web — from React applications to email templates that
        have to render the same everywhere.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          View projects
        </a>
        <a className="button" href={`mailto:${EMAIL}`}>
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
        <h2 className="section-title">About</h2>
        <p className="about-text">
          I'm a software developer. Since 2025 I've been at VML, building
          HTML and CSS email templates for a global technology client and
          deploying them through Adobe Experience Manager — code that has to
          render the same across dozens of inboxes, with no second chance once
          it goes out. It taught me to get the details right the first time.
        </p>
        <p className="about-text">
          On my own time I work with JavaScript, React and Node.js, which is
          where the projects below come from. Most of what I use I picked up
          when a project needed it — a new stack is a matter of time, not of
          category — and I try to leave behind code the next person can read
          without a guided tour.
        </p>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
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
    </article>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Selected projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          Open to new opportunities and collaborations. The fastest way to reach
          me is email.
        </p>
        <div className="contact-links">
          <a className="button" href={`mailto:${EMAIL}`}>
            Email
          </a>
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
