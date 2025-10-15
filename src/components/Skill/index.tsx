import React, { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const SkillSection = (): ReactNode => {
  return (
    <section>
      <div className={styles.skill}>
        <div className={styles.skillContainer}>
          <div className={styles.contentContainer}>
            <h1>My Skills</h1>
          </div>
          <ul>
            <li className={styles.skillColumn}>
              <div className={styles.skillIcon}>
                <img src="/code.png" alt="" />
              </div>
              <h4 className="">Developer</h4>
              <h6 className="">Programming Language</h6>
              <p>
                Java, C#, TypeScript, JavaScript, Python, SQL, HTML, CSS,
                Node.js
              </p>
              <h6 className="">Framework & Tool</h6>
              <p>
                Spring Boot, Spring Cloud, React, Angular, ASP.NET Core, Next
                JS, SQL Server, PostgreSQL
              </p>
            </li>
            <li className={styles.skillColumn}>
              <div className={styles.skillIcon}>
                <img src="/continuous.png" alt="" />
              </div>
              <h4 className="">DevOps</h4>
              <h6 className="">Programming Language</h6>
              <p>Bash, Powershell, Python</p>
              <h6 className="">Tool & Technologies</h6>
              <p>Kubernetes, OpenShift, Docker, Google Cloud, Jenkins, Git</p>
            </li>
            <li className={styles.skillColumn}>
              <div className={styles.skillIcon}>
                <img src="/blueprint.png" alt="" />
              </div>
              <h4 className="">Solution Architect</h4>
              <h6 className="">Design</h6>
              <p>Sequence Diagram, ER Diagram, High Level Design</p>
              <h6 className="">Architecture Pattern</h6>
              <p>
                Reactive Programming, Domain Driven Design, Microservice,
                Event-Driven
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
