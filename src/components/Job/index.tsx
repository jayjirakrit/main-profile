import React, { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

interface JobExperience {
  company: string;
  position: string;
  type: string;
  duties: string[];
  start: string;
  end: string;
}

const jobExperiences: JobExperience[] = [
  {
    company: "IBM Consulting",
    position: "Lead Application Developer",
    type: "Full-time",
    duties: [
      // "Led a development team to implement payment system integrate with core banking services.",
      // "In charge of system integration and data migration for app modernize from 4 legacy systems.",
      // "Part of a team to implement digital identity verification platform using web, mobile, and blockchain."
      "Led 6 developers in building 100+ event-driven microservices for core banking integration, handling payment processing, audit controls through reconciliation, and financial reporting, AMLO, fees, FX, GL, data warehouse operation.",
      "Implemented cloud-native systems incorporating multi-threading for scalability using OpenShift, Docker, Istio (service mesh), capable of handling 500,000+ daily transactions.",
      "Designed and Developed a new platform using React (TypeScript), Tailwind CSS, and ASP.NET Core (C#). This involved integrating with 13 internal services and migrating data and features from 4 legacy systems.",
      "Built digital identity verification platform for financial transaction approvals using web, mobile, and blockchain technology within a team of 40 members across various regions.",
    ],
    start: "2021",
    end: "2024",
  },
  {
    company: "Serichai Military",
    position: "IT Architect",
    type: "Part-time",
    duties: [
      "Designed and implemented automated CI/CD pipeline with infrastructure as a code from the ground up, decreased deployment time from manual process to 90% (Jenkins, Harbor, Kubernetes, Helm).",
      "Set up a batch server to integrate the scheduling system for payroll reconciliation, as well as accounting and financial reporting, enhancing efficiency by 68%",
      // "Set up a batch server integrated with scheduling system to execute job for finance & accounting team.",
      // "Designed and implement DevOps Pipeline for automate build & deploy services from the ground up.",
    ],
    start: "2023",
    end: "2024",
  },
  {
    company: "EY Consulting",
    position: "Technology Consultant",
    type: "Full-time",
    duties: [
      "Being a part of RPA implementation by developed more than 7+ RPA Processes (UiPath, VB.Net, C#).",
      "Troubleshooting issue and enhance new functionality on various bot scripts ~ 140 RPA Bot Scripts. Leading to reduce Exception rate from 60% to 0-5%.",
    ],
    start: "2019",
    end: "2021",
  },
  {
    company: "Tokyo Medical and Dental University",
    position: "Research Student",
    type: "Intern",
    duties: [],
    start: "May 2018",
    end: "August 2018",
  },
];

const JobSection = (): ReactNode => {
  return (
    <section>
      <div className={styles.job}>
        <div>
          <h1>Work Experience</h1>
        </div>
        <div className={styles.jobContainer}>
          <div className={styles.jobContent}>
            {jobExperiences.map((job, index) => {
              return (
                <div key={index}>
                  <h4>
                    {job.company}{" "}
                    <span className={styles.date}>
                      {job.start} - {job.end}
                    </span>
                  </h4>
                  <h6>
                    {job.type} | {job.position}
                  </h6>
                  <ul>
                    {job.duties.map((duty, dIndex) => {
                      return <li key={dIndex}>{duty}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
