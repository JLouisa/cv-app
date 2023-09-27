import Button from "./Button.jsx";
// import { DisplaySection } from "./DisplaySection.jsx";

function FooterSection() {
  //   console.log(DisplaySection);
  const downloadPDF = () => {
    //     window.DisplaySection.print();
    //Work in progress
  };
  return (
    <>
      <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548" target="__blank">
        <Button text="Download PDF" classNameBtn="btn downloadBtn" onClick={downloadPDF} />
      </a>
    </>
  );
}

export default FooterSection;
