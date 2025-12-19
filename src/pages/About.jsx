import { FaLinkedin } from "react-icons/fa"

function About() {
  return (
    <div className="card about">
      <div className="avatar-wrapper">
        <img src="/avatar.jpg" alt="Avatar do aluno" className="about-avatar" />
      </div>
      <h2>Alexandre Paschoal Teles de Andrade</h2>

      <p className="linkedin">
        <a
          href="https://www.linkedin.com/in/alexandre-paschoal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="linkedin-icon" />
          LinkedIn
        </a>
      </p>
    </div>
  )
}

export default About
