import { starPointer } from "../util.tsx";
const Star = ( {props} ) => {
  const starMouseOver = () => {
    document.body.style.cursor = starPointer;
  };
  const starMouseOut = () => {
    document.body.style.cursor = "revert";
  };
  return (
    <div
      id={`star-wrapper-${props.subject}`}
      className="star"
      key={`tooltip-${props.subject}`}
      onMouseOver={starMouseOver}
      onMouseOut={starMouseOut}
      aria-label={props.subject}
      alt={props.subject}
    >
      <div className="blurbSubject">{props.subject}</div>
      <div aria-label={props.experience} className="blurbExperience">
        {props.experience}
      </div>
      <div
        key={props.subject}
        aria-label={`${props.subject} Details`}
        id={`corona-wrapper-${props.subject}`}
        alt={`${props.subject}`}
        style={{ top: "11vh", left: "0.25vw", zIndex: 10 }}
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
