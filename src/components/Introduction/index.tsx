import React, { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const IntroductionSection = (): ReactNode => {
  return (
    <section>
      <div className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introSub}>
            <h1 className={styles.introTitle}>
              Hi, I'm Jay. Nice to meet you.
            </h1>
            <h3 className={styles.introInfo}>
              I am a recent MSc in Computer Science graduate from HKU, building
              on 5 years of professional experience as a Lead Developer and
              Solution Architect in the finance industry. My expertise lies in
              designing and delivering robust solutions using full-stack web
              technologies, microservices, DevOps, and database systems.
            </h3>
          </div>
          <div className={styles.bgContainer}>
            <div className="edContainer">
              <h2>Education</h2>
              <h4>The University of Hong Kong</h4>
              <h5>Master of Computer Science</h5>
              <p>Graduated in 2025 | GPA: 3.71 (Distinction)</p>
              <h4>Chulalongkorn University</h4>
              <h5>Bachelor of Engineering (Nano Engineering)</h5>
              <p>Graduated in 2019 | GPA: 3.11</p>
            </div>

            <div className="languageContainer">
              <h2>Langugae</h2>
              <p>English - Fluent</p>
              <p>Thai - Native</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
