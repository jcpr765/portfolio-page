import React from "react";
import SectionDetails from "./section-components/SectionDetails";
import SectionHeader from "./section-components/SectionHeader";
import SectionLinks from "./section-components/SectionLinks";

const ResumeSection = ({ title, records }) => {
  return (
    <div className="resume-section">
      <SectionHeader title={title} />
      {records.map(({ details, displayAsList, role, employer, links }, idx) => (
        <div key={idx}>
          {role && <p className="role">{role}</p>}
          {employer && <p className="employer">{employer}</p>}
          {details && (
            <SectionDetails details={details} displayAsList={displayAsList} />
          )}
          {links && <SectionLinks links={links} />}
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
