import React from "react";

const SectionDetails = ({ details, displayAsList = true }) => {
  return (
    <>
      <ul>
        {details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
      <style>{`
      ul {
        ${!displayAsList ? "list-style-type: none;" : ""}
      }
      li {
        margin-bottom: 10px;
      }
      `}</style>
    </>
  );
};

export default SectionDetails;
