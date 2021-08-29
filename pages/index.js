import Head from "next/head";
import TitleHeader from "../components/TitleHeader";

export default function Home() {
  return (
    <>
      <div className="container">
        <TitleHeader name="Juan Carlos Morales" title="Software Engineer" />
      </div>
      <style>{`
      .container{
        background-color: #ffffff;
        min-height: 100vh;
        height: 100vh;
        padding-top: 50px;
      }
      `}</style>
    </>
  );
}
