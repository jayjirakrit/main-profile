import React, { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

interface Project {
  title: string;
  info: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "Payment Hub",
    info: "Implement Payment Integration System with Core Banking",
    img: "",
  },
  {
    title: "Payment Hub",
    info: "Implement Payment Integration System with Core Banking",
    img: "",
  },
  {
    title: "Payment Hub",
    info: "Implement Payment Integration System with Core Banking",
    img: "",
  },
  {
    title: "Payment Hub",
    info: "Implement Payment Integration System with Core Banking",
    img: "",
  },
];

const ProjectSection = (): ReactNode => {
  return (
    <section>
      <div className={styles.project}>
        <h1 className="">My Projects</h1>
        <h6 className="">Coming Soon</h6>

        {/* Card Project Section */}
        {/* <div className={styles.projectContainer}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={styles.projectCardContainer}>
                <div className={styles.projectContent}>
                  <h4>{project.title}</h4>
                  <p>{project.info}</p>
                </div>
              </div>
            );
          })}
        </div> */}
        {/* <div id="tw-scope">
          <div className={clsx("",styles.projectContainer)}>
            {projects.map((project, index) => {
              return (
                <div key={index} className={styles.projectCardContainer}>
                  <div className={styles.projectContent}>
                    <h4>{project.title}</h4>
                    <p>{project.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectSection;
