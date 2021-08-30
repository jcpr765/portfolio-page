import React from "react";
import MAIN_COLORS from "../../styles/colors";

const SectionHeader = ({ title }) => {
  return (
    <header>
      <h5>{title}</h5>
      <div className="bottom-line" />
      <style>
        {`
        header {
          margin-bottom: 10px;
        }

        h5 {
          font-size: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .bottom-line {
          height: 10px;
          width: 50px;
          background-color: ${MAIN_COLORS.BLUE};
        }
            
        `}
      </style>
    </header>
  );
};

export default SectionHeader;
