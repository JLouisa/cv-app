import Button from "./Button.jsx";
// import { DisplaySection } from "./DisplaySection.jsx";

function DownloadSection() {
  //   console.log(DisplaySection);
  const downloadPDF = () => {
    setTimeout(alert("Srry, still in development!"), 2000);
  };
  return (
    <section className="downloadSection">
      <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548" target="__blank">
        <Button text="Download PDF" classNameBtn="btn downloadBtn" onClick={() => downloadPDF} />
      </a>
    </section>
  );
}

export default DownloadSection;
