import React from "react";
import ResumeSection from "./ResumeSection";
import resumeData from "../resumeData.json";

const ResumeInfo = () => {
  return (
    <div>
      {resumeData.map((section, idx) => (
        <ResumeSection key={idx} {...section} />
      ))}
      <style></style>
    </div>
  );
};

export default ResumeInfo;
