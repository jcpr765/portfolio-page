import React from "react";
import ResumeSection from "./ResumeSection";
import { leftColumnData, rightColumnData } from "../resumeData";

const ResumeInfo = () => {
  return (
    <div className="resume-info">
      <div className="left-column">
        {leftColumnData.map((section, idx) => (
          <ResumeSection key={idx} {...section} />
        ))}
      </div>
      <div className="right-column">
        {rightColumnData.map((section, idx) => (
          <ResumeSection key={idx} {...section} />
        ))}
      </div>
      <style jsx global>{`
        .resume-info {
          display: flex;
          padding-bottom: 10vh;
        }

        .left-column,
        .right-column {
          flex: 1;
        }

        .left-column > div {
          margin: 0 0 0 auto;
          padding-right: 5%;
        }

        .right-column > div {
          padding-left: 5%;
          margin: 0 auto 0 0;
        }

        @media screen and (max-width: 1400px) {
          .left-column,
          .right-column {
            flex: none;
          }

          .left-column > div {
            margin: 0;
            padding: 0;
          }

          .right-column > div {
            margin: 0;
            padding: 0;
          }

          .resume-info {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeInfo;
