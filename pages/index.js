import ResumeHeader from "../components/ResumeHeader";
import ResumeInfo from "../components/ResumeInfo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Carlos Morales</title>
      </Head>
      <div className="container">
        <ResumeHeader name="Juan Carlos Morales" title="Software Engineer" />
        <ResumeInfo />
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
