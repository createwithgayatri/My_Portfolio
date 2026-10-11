import {
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiTerminal,
} from "react-icons/fi";

const skillData = [
  {
    title: "Frontend",
    icon: <FiCode />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Redux",
      "TypeScript",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    icon: <FiServer />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase />,
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
    ],
  },
  {
    title: "Tools & Cloud",
    icon: <FiLayers />,
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "AWS",
      "Vercel",
      "Render",
      "JIRA",
    ],
  },
  {
    title: "Core Skills",
    icon: <FiTerminal />,
    skills: [
      "Full Stack Development",
      "MERN Stack",
      "API Development",
      "Database Design",
      "JWT Authentication",
      "Responsive UI/UX",
      "CRUD Operations",
      "Agile/Scrum",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="section-heading">

        <p className="eyebrow">02 / SKILLS</p>

        <h2>Tools I work with</h2>

        <p>
          A practical toolkit for taking ideas from first commit
          to deployed product.
        </p>

      </div>

      <div className="skills-grid">

        {skillData.map((group) => (
          <div className="skill-card" key={group.title}>

            <div className="skill-title">
              <div className="skill-icon">
                {group.icon}
              </div>

              <h3>{group.title}</h3>
            </div>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;