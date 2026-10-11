import { FiGithub } from "react-icons/fi";

function Workflow() {
  return (
    <section className="section workflow">

      <div className="workflow-text">

        <p className="eyebrow">07 / DEVELOPER WORKFLOW</p>

        <h2>Ship with intention.</h2>

        <p>
          The small loop behind every feature:
          understand, build, test, and keep improving.
        </p>

        <a
          href="#"
          className="secondary-btn"
        >
          <FiGithub />
          View GitHub ↗
        </a>

      </div>

      <div className="terminal">

        <div className="terminal-header">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>

          ~/gayatri/projects
        </div>

        <div className="terminal-body">

          <p>
            <b>$</b> git init
          </p>

          <p>
            <b>$</b> npm install
          </p>

          <p>
            <b>$</b> npm run dev
          </p>

          <p className="success">
            ✓ ready on localhost:3000
          </p>

          <p>
            <b>$</b> git add .
          </p>

          <p>
            <b>$</b> git commit -m
            <span className="purple">
              {" "} "Build scalable applications"
            </span>
          </p>

          <span className="cursor"></span>

        </div>

        <div className="terminal-footer">
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>React.js</span>
          <span>Node.js</span>
        </div>

      </div>

    </section>
  );
}

export default Workflow;