import React from "react";
import SectionDetails from "./section-components/SectionDetails";
import SectionHeader from "./section-components/SectionHeader";

const ResumeSection = ({ title, records }) => {
  return (
    <div className="resume-section">
      <SectionHeader title={title} />
      {records.map(({ details, displayAsList, role, employer }, idx) => (
        <div key={idx}>
          {role && <p className="role">{role}</p>}
          {employer && <p className="employer">{employer}</p>}
          <SectionDetails details={details} displayAsList={displayAsList} />
        </div>
      ))}
      <style jsx>
        {`
          .resume-section {
            width: 33vw;
            max-width: 600px;
          }

          .role,
          .employer {
            font-size: 1.2rem;
          }

          .role {
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
};

export default ResumeSection;
