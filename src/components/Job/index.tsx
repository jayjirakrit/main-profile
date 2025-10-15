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
      "Led 6 developers in building 100+ event-driven microservices for core banking integration, handling payment processing, audit controls through reconciliation, and financial reporting, AMLO, fees, FX, GL, data warehouse operation.",
      "Implemented cloud-native systems incorporating multi-threading for scalability using OpenShift, Docker, Istio (service mesh), capable of handling 500,000+ daily transactions.",
    ],
    start: "2021",
    end: "2024",
  },
  {
    company: "Serichai Military",
    position: "IT Architect",
    type: "Part-time",
    duties: [
      "Designed and implemented automated CI/CD pipeline with infrastructure as a code from the ground up, decreased deployment time from manual process to 90% (Jenkins, Nexus, Harbor, Kubernetes, Helm).",
      "Set up a batch server to integrate the scheduling system for payroll reconciliation, as well as accounting and financial reporting, enhancing efficiency by 68%",
    ],
    start: "2024",
    end: "2025",
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
          <h1>Working Experience</h1>
        </div>
        <div className={styles.jobContainer}>
          <div className={styles.jobContent}>
            {jobExperiences.map((job, index) => {
              return (
                <div key={index} className="">
                  <h4>
                    {job.company}{" "}
                    <span>
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
