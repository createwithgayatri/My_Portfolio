import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function Footer() {
  return (
    <footer>

      <div className="footer-top">

        <div>
          <div className="logo">
            <span className="logo-box">GB</span>
            <span>
              Gayatri<span className="dot">.</span>
            </span>
          </div>

          <p>MERN Stack Developer</p>
        </div>

        <div className="footer-links">

          <button>Home</button>
          <button>About</button>
          <button>Skills</button>
          <button>Projects</button>
          <button>Experience</button>
          <button>Education</button>

        </div>

        <div className="footer-social">

          <a href="#">
            <FiGithub />
          </a>

          <a href="#">
            <FiLinkedin />
          </a>

          <a href="mailto:gayatribagul46@gmail.com">
            <FiMail />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 Gayatri Bagul. All rights reserved.
        </span>

        <span>
          Built with React ✦
        </span>

      </div>

    </footer>
  );
}

export default Footer;