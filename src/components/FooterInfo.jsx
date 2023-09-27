import gitHubIcon from "../images/github-original.svg";

function FooterInfo() {
  return (
    <div className="links">
      <a href="https://github.com/JLouisa" target="__blank">
        <img src={gitHubIcon} alt="gitHubIcon" />
      </a>
      <div className="copyright">©2023 | Jonathan Louisa</div>
    </div>
  );
}

export default FooterInfo;
