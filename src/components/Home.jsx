import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
} from "react-icons/fi";

function Home() {
  return (
    <section id="home" className="hero section">

      <div className="hero-content">

        <div className="availability">
          <span></span>
          Available for full-stack opportunities
        </div>

        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Gayatri <span>Bagul</span>
        </h1>

        <h2>
          <i></i>
          MERN Stack Developer
        </h2>

        <p className="hero-description">
          I build clean, scalable, and maintainable web applications
          with thoughtful interfaces and reliable backend systems.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects <FiArrowRight />
          </button>

          <a
            href="/resume.pdf"
            download
            className="secondary-btn"
          >
            <FiDownload />
            Download Resume
          </a>

          <button
            className="text-btn"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's talk ↗
          </button>

        </div>

        <div className="social-row">

          <a href="#" aria-label="LinkedIn">
            <FiLinkedin />
          </a>

          <a href="#" aria-label="GitHub">
            <FiGithub />
          </a>

          <a href="mailto:gayatribagul46@gmail.com">
            <FiMail />
          </a>

          <span className="scroll-text">
            Scroll to explore <FiArrowDown />
          </span>

        </div>

      </div>

      <div className="code-window">

        <div className="window-header">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span>gayatri.config.js</span>

          <b>● live</b>
        </div>

        <div className="code-content">

          <div>
            <span className="line">01</span>
            <code>
              <strong>const</strong> developer = {"{"}
            </code>
          </div>

          <div>
            <span className="line">02</span>
            <code>
              &nbsp;&nbsp;name:
              <em>"Gayatri Bagul"</em>,
            </code>
          </div>

          <div>
            <span className="line">03</span>
            <code>
              &nbsp;&nbsp;role:
              <em>"MERN Stack Developer"</em>,
            </code>
          </div>

          <div>
            <span className="line">04</span>
            <code>
              &nbsp;&nbsp;location:
              <em>"Pune, India"</em>,
            </code>
          </div>

          <div>
            <span className="line">05</span>
            <code>
              &nbsp;&nbsp;stack:
              [<em>"MongoDB"</em>, <em>"Express"</em>,
              <em>"React"</em>, <em>"Node"</em>],
            </code>
          </div>

          <div>
            <span className="line">06</span>
            <code>
              &nbsp;&nbsp;passion:
              <em>"Build what's next"</em>
            </code>
          </div>

          <div>
            <span className="line">07</span>
            <code>{"}"}</code>
          </div>

        </div>

        <div className="window-footer">
          <span>● main</span>
          <span>UTF-8</span>
          <span>JavaScript</span>
        </div>

      </div>

    </section>
  );
}

export default Home;