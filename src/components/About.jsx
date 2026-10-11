function About() {
  return (
    <section id="about" className="section">

      <div className="section-heading">

        <p className="eyebrow">01 / ABOUT</p>

        <h2>The person behind the code</h2>

        <p>
          Building experiences where thoughtful design meets
          dependable engineering.
        </p>

      </div>

      <div className="about-grid">

        <div className="about-text">

          <p className="about-main">
            MERN Stack Developer with hands-on experience building
            and deploying full-stack web applications using MongoDB,
            Express.js, React.js, and Node.js.
          </p>

          <p>
            Experienced in developing RESTful APIs, JWT authentication,
            CRUD operations, responsive interfaces, and database-driven
            applications.
          </p>

          <p>
            Strong understanding of JavaScript, React, backend development,
            and Git-based version control, with a focus on writing clean,
            scalable, and maintainable code.
          </p>

          <div className="languages">
            <span>LANGUAGES</span>
            <button>English</button>
            <button>Hindi</button>
            <button>Marathi</button>
          </div>

        </div>

        <div className="info-card">

          <div className="terminal-title">
            <span>&lt;/&gt;</span>
            developer.info
          </div>

          <div className="info-row">
            <span>Name</span>
            <strong>Gayatri Bagul</strong>
          </div>

          <div className="info-row">
            <span>Role</span>
            <strong>MERN Stack Developer</strong>
          </div>

          <div className="info-row">
            <span>Location</span>
            <strong>Pune, Maharashtra, India</strong>
          </div>

          <div className="info-row">
            <span>Education</span>
            <strong>Bachelor of Computer Applications</strong>
          </div>

          <div className="terminal-command">
            <span>$</span> whoami gayatri_bagul
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;