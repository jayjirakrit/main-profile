import React, { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

interface SkillInfo {
  title: string;
  value: string;
}

interface Skill {
  topic: string;
  img: string;
  skillInfo: SkillInfo[];
}

const skillList: Skill[] = [
  {
    topic: "Development",
    img: "/code.png",
    skillInfo: [
      {
        title: "Programming Language",
        value:
          "Java, C#, TypeScript, JavaScript, Python, SQL, HTML, CSS, Node.js",
      },
      {
        title: "Framework & Tool",
        value:
          "Spring Boot, Spring Cloud, React, Angular, ASP.NET Core, Next JS, FastAPI, SQL Server, PostgreSQL",
      },
    ],
  },
  {
    topic: "DevOps",
    img: "/continuous.png",
    skillInfo: [
      {
        title: "Programming Language",
        value: "Bash, Powershell, Python",
      },
      {
        title: "Tool & Technologies",
        value: "Git, Jenkins, Docker, Google Cloud, Kubernetes, OpenShift",
      },
    ],
  },
  {
    topic: "Design & Architect",
    img: "/blueprint.png",
    skillInfo: [
      {
        title: "Design",
        value: "Sequence Diagram, ER Diagram, High Level Design",
      },
      {
        title: "Architecture Pattern",
        value:
          "Reactive Programming, Domain Driven Design, Microservice, Event-Driven",
      },
    ],
  },
];

const SkillSection = (): ReactNode => {
  return (
    <section>
      <div className={styles.skill}>
        <div className={styles.skillContainer}>
          <div className={styles.contentContainer}>
            <h1>My Skills</h1>
          </div>
          <ul>
            {skillList.map((skill) => {
              return (
                <li className={styles.skillColumn}>
                  <div className={styles.skillIcon}>
                    <img src={skill.img} />
                  </div>
                  <h3 className="">{skill.topic}</h3>
                  {skill.skillInfo.map((info) => {
                    return (
                      <>
                        <h6 className="">{info.title}</h6>
                        <p>{info.value}</p>
                      </>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
