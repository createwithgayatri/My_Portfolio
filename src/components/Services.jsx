import { FiBookOpen, FiCheck } from "react-icons/fi";

const education = [
  {
    year: "2023 — 2026",
    title: "Bachelor of Computer Applications",
    college:
      "Shivchhatrapati College · Chhatrapati Sambhajinagar",
    university:
      "Dr. Babasaheb Ambedkar Marathwada University (BAMU)",
    score: "8.49 / 10",
  },
  {
    year: "2023",
    title: "Higher Secondary (HSC)",
    college: "Maharashtra State Board",
    score: "58.5%",
  },
  {
    year: "2021",
    title: "Secondary School (SSC)",
    college: "Maharashtra State Board",
    score: "91.8%",
  },
];

const certifications = [
  "JavaScript",
  "SQL",
  "React",
];

function Education() {
  return (
    <section id="education" className="section">

      <div className="section-heading">

        <p className="eyebrow">05 / EDUCATION</p>

        <h2>Learning, always</h2>

        <p>
          Academic foundations, professional certifications,
          and a continued curiosity for better ways to build.
        </p>

      </div>

      <div className="education-grid">

        <div>

          {education.map((item, index) => (
            <div
              className={`education-card ${
                index === 0 ? "highlight" : ""
              }`}
              key={item.title}
            >

              <div className="education-icon">
                <FiBookOpen />
              </div>

              <div className="education-info">

                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.college}</p>

                {item.university && (
                  <small>{item.university}</small>
                )}

              </div>

              <strong>{item.score}</strong>

            </div>
          ))}

        </div>

        <div className="cert-card">

          <div className="cert-heading">
            ♧ &nbsp; certifications
          </div>

          {certifications.map((cert) => (
            <div className="cert-item" key={cert}>

              <span>
                <FiCheck />
              </span>

              <div>
                <strong>{cert}</strong>
                <small>HackerRank · 2026</small>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;