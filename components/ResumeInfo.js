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
        }

        .left-column,
        .right-column {
          flex: 1;
        }

        .left-column > div {
          margin: 0 0 0 auto;
          padding-right: 10px;
        }

        .right-column > div {
          padding-left: 10px;
          margin: 0 auto 0 0;
        }
      `}</style>
    </div>
  );
};

export default ResumeInfo;
