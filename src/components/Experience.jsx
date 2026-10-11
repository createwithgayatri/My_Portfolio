import { FiBriefcase, FiChevronRight } from "react-icons/fi";

function Experience() {
  return (
    <section id="experience" className="section">

      <div className="section-heading">

        <p className="eyebrow">04 / EXPERIENCE</p>

        <h2>Growing through real work</h2>

      </div>

      <div className="experience-wrapper">

        <div className="timeline-icon">
          <FiBriefcase />
        </div>

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <span className="date">
                OCTOBER 2025 — APRIL 2026
              </span>

              <h3>Full Stack Developer Intern</h3>
            </div>

            <span>Spring Tree Technology</span>

          </div>

          <div className="experience-grid">

            <ExperienceItem>
              Architected and shipped full-stack MERN applications
              from scratch by designing scalable MongoDB schemas with
              Mongoose and building modular Node.js/Express.js backends.
            </ExperienceItem>

            <ExperienceItem>
              Optimized RESTful API architecture and MongoDB queries
              to improve backend performance and application efficiency.
            </ExperienceItem>

            <ExperienceItem>
              Built responsive React.js components with Redux and
              Tailwind CSS to improve frontend performance and user
              experience.
            </ExperienceItem>

            <ExperienceItem>
              Implemented structured debugging and testing workflows
              across full-stack features to identify and resolve
              application issues.
            </ExperienceItem>

            <ExperienceItem>
              Collaborated with developers using Git, GitHub,
              and Agile/Scrum workflows to deliver features effectively.
            </ExperienceItem>

            <ExperienceItem>
              Took ownership of features end-to-end, managing
              development from backend architecture through deployment.
            </ExperienceItem>

          </div>

        </div>

      </div>

    </section>
  );
}

function ExperienceItem({ children }) {
  return (
    <div className="experience-item">
      <FiChevronRight />
      <p>{children}</p>
    </div>
  );
}

export default Experience;