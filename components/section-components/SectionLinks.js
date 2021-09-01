import React from "react";
import Link from "next/link";

const SectionLinks = ({ links }) => {
  return (
    <>
      {links.map(({ text, to }, idx) => (
        <a key={idx} target="_blank" href={to} rel="noopener noreferrer">
          {text}
        </a>
      ))}

      <style jsx>{`
        a {
          display: block;
          padding-bottom: 10px;
        }

        a:hover {
          color: blue;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default SectionLinks;
