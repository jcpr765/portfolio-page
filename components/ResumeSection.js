import React from "react";
import SectionDetails from "./section-components/SectionDetails";
import SectionHeader from "./section-components/SectionHeader";

const ResumeSection = ({ title, records }) => {
  console.log(title);
  console.log(records);
  return (
    <div>
      <SectionHeader title={title} />
      {records.map(({ details, displayAsList, role, employer }) => (
        <>
          {role && <p className="role">{role}</p>}
          {employer && <p className="employer">{employer}</p>}
          <SectionDetails details={details} displayAsList={displayAsList} />
        </>
      ))}
      <style>
        {`
            .role, .employer {
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
