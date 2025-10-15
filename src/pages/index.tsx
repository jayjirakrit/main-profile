import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import IntroductionSection from "../components/Introduction";
import JobSection from "../components/Job";
import SkillSection from "../components/Skill";
import ProjectSection from "../components/Project";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Jay Main Profile Web Site"
    >
      <main>
        {/* Home */}
        <div className={styles.home}>
          <h1 className={styles.homeTitle}>
            Developer, DevOps & Solution Architect
          </h1>
          <h3 className={styles.homeInfo}>
            I design and build IT solution, and I love what I do.
          </h3>
          <div className={styles.homeImgWrap}>
            <img
              className={clsx(styles.homeImg)}
              src="/jay-avatar.jpeg"
              alt="jay-avatar"
            />
          </div>
          <div className={styles.deviceImgWrap}>
            <img
              className={clsx(styles.deviceImg)}
              src="/hero-devices.svg"
              alt="device"
            />
          </div>
        </div>
        {/* Introduction */}
        <IntroductionSection />
        {/* Working Experience */}
        <JobSection />
        {/* Skills */}
        <SkillSection />
        {/* Project */}
        <ProjectSection />
      </main>
    </Layout>
  );
}
