import ResumeHeader from "../components/ResumeHeader";
import ResumeInfo from "../components/ResumeInfo";

export default function Home() {
  return (
    <>
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
