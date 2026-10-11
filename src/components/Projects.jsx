import {
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

const projects = [
  {
    number: "01",
    type: "MERN STACK",
    title: "E-Commerce Platform",
    description:
      "A complete full-stack commerce platform with authentication, product management, cart, secure payment integration, orders, inventory, and role-based admin functionality.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux",
      "Tailwind CSS",
      "JWT",
    ],
    features: [
      "User authentication",
      "Product management",
      "Shopping cart",
      "Payment integration",
      "REST API",
      "Protected admin routes",
    ],
  },
  {
    number: "02",
    type: "FULL STACK APPLICATION",
    title: "Task Management Application",
    description:
      "A full-stack task management system supporting real-time CRUD operations, optimized MongoDB retrieval, protected routes, and a responsive React interface.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    features: [
      "Create and update tasks",
      "MongoDB database",
      "Protected routes",
      "REST API integration",
      "JWT authentication",
      "Responsive interface",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-heading">

        <p className="eyebrow">03 / SELECTED WORK</p>

        <h2>Featured projects</h2>

        <p>
          A few examples of how I turn product needs into
          working full-stack experiences.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-preview">

              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="project-number">
                {project.number}
              </span>

              <div>
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <span>shop / dashboard / orders</span>
              </div>

            </div>

            <div className="project-body">

              <div className="project-top">
                <span>{project.type}</span>
                <small>FULL-STACK</small>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="skill-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="feature-grid">

                {project.features.map((feature) => (
                  <div key={feature}>
                    <FiCheckCircle />
                    {feature}
                  </div>
                ))}

              </div>

              <div className="project-buttons">

                <a href="#">
                  <FiGithub />
                  GitHub
                </a>

                <a href="#">
                  <FiExternalLink />
                  Live Demo
                </a>

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;