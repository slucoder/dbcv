import { customPointer } from "../util.tsx";
const Star = ({ props }) => {
  const contactFormMouseHover = () => {
    props.hoverIncrementer();
    document.body.style.cursor = customPointer;
  };
  const contactFormMouseLeave = () => {
    document.body.style.cursor = "revert";
  };
  const contactFormClick = () => {
    document.body.style.cursor = "revert";
    props.handleContactClick();
  };
  const gratis = () => {
    return true;
  };
  return (
    <div
      id={`star-wrapper-${props.subject}`}
      className="star"
      key={`tooltip-${props.subject}`}
      onMouseEnter={
        props.subject !== "Contact"
          ? props.hoverIncrementer
          : contactFormMouseHover
      }
      onMouseLeave={
        props.subject !== "Contact" ? gratis : contactFormMouseLeave
      }
      onClickCapture={
        props.subject !== "Contact" ? gratis : props.clickIncrementer
      }
      onClick={props.subject !== "Contact" ? gratis : contactFormClick}
      aria-label={props.subject}
      title={props.subject}
    >
      <div className="blurbSubject">{props.subject}</div>
      <div aria-label={props.experience} className="blurbExperience">
        {props.experience}
      </div>
      <div
        key={props.subject}
        id={`corona-wrapper-${props.subject}`}
        title={`${props.subject} Details`}
        style={{ top: "11vh", left: "0.25vw" }}
        className={props.isRev ? "corona_rev" : "corona"}
      >
        <div className="ray ray1"></div>
        <div className="ray ray2"></div>
        <div className="ray ray3"></div>
        <div className="ray ray4"></div>
        <div className="ray ray5"></div>
        <div className="ray ray6"></div>
        <div className="ray ray7"></div>
        <div className="ray ray8"></div>
        <div className="ray ray9"></div>
        <div className="ray ray10"></div>
      </div>
    </div>
  );
};

export default Star;
