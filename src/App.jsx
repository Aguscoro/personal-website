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
        {/* TODO: replace with your own one-line pitch. */}
        I build web applications with JavaScript and React — from the interface
        down to the data that feeds it.
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
        {/* TODO: replace with your own bio. */}
        <p className="about-text">
          I am a software developer focused on the web. I enjoy taking a rough
          idea and turning it into something people can actually open in a
          browser and use.
        </p>
        <p className="about-text">
          I work mainly with JavaScript, React and Node.js, and I care about
          writing code that the next person can read without a guided tour.
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
