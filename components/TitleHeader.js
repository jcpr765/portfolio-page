import React from "react";
import MAIN_COLORS from "../styles/colors";

const TitleHeader = ({ name, title }) => {
  return (
    <div className="title-header">
      <div className="top-section" />

      <span>{name}</span>
      <h3>{title}</h3>
      <div className="bottom-section" />
      <style>
        {`
        .title-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .top-section {
            background-color: ${MAIN_COLORS.BLUE};
            height: 3.125rem;
            width: 100vw;
            margin-bottom: 3.125rem;
        }

        .bottom-section {
            background-color: ${MAIN_COLORS.BLUE};
            height: 10px;
            width: 70%;
            margin-bottom: 3.125rem;
        }

        span {
            font-weight: 600;
            font-size: 3rem;
        }

        h3 {
            font-weight: 300;
            font-size: 2rem;
        }
          `}
      </style>
    </div>
  );
};

export default TitleHeader;
