import { projectsSkills } from "../content.js";
import Star from "./Star.js";
import { getViewportPosition, blurbStyle} from "../util.tsx";
import { useState } from "react";

const StarMap = ( {props} ) => {
  const [blurbShow, setBlurbShow] = useState(false);
  const [blurbContent, setBlurbContent] = useState({});
  const [blurbPosition, setBlurbPosition] = useState({top: "12rem", left: "25rem"})
  const blurbPositionStyle = {    
    ...blurbPosition,
    ...blurbStyle,
  }
  const header = projectsSkills.filter((s) => s.title === props.heading);
  const motifs = Array.from(header[0]["topics"]);
  const topBaseline = 6,
    leftBaseline = 30;
  const currentStarId = (motifName, motifIndex) =>{
    return `star-${motifName + motifIndex.toString()}`
  };
  function handleBlurbPosition(index, synopsisLength){
    const pos = {};
    const posFirstRow = getViewportPosition(topBaseline * 4, false);
    const posSecondRow = getViewportPosition(topBaseline * ((synopsisLength / 100 >> 0) < 5 ? 4: 2), false);    
    switch(index){
      case 0:
        pos.top = posFirstRow;
        pos.left = getViewportPosition(5, true);
        break;
      case 1:
        pos.top = posFirstRow;
        pos.left = getViewportPosition((leftBaseline + 2), true);
        break;
      case 2:
        pos.top = posFirstRow;
        pos.left = getViewportPosition((leftBaseline * 2), true);
        break;
      case 3:
        pos.top = posSecondRow;
        pos.left = getViewportPosition(leftBaseline * (motifs.length - 1 - index) + 10, true);
        break;
      case 4:
        pos.top = posSecondRow;
        pos.left = getViewportPosition(leftBaseline * (motifs.length - 1 - index) + 5, true);
        break;
      case 5:
        pos.top = posSecondRow;
        pos.left = getViewportPosition(leftBaseline * (motifs.length - 1 - index), true);
        break;
      default:
        break;
    }
    setBlurbPosition(pos);
  };

  const stars = motifs.map((motif, i) => (
    <div
      id={currentStarId(motif.name, i)}
      key={currentStarId(motif.name, i)}
      style={{
        top:
          i < 3
            ? getViewportPosition(topBaseline, false)
            : getViewportPosition(topBaseline * 6, false),
        left:
          i < 3
            ? getViewportPosition(leftBaseline * i + 10, true)
            : getViewportPosition(
                leftBaseline * (motifs.length - 1 - i) + 10,
                true
              ),
        position: "absolute",
        height: "13rem",
        width: "13rem",
        zIndex: 10,
        backgroundColor: "transparent",
      }}      
      onMouseOver={() => {
        handleBlurbPosition(i, motif.synopsis.length);
        setBlurbShow(true);
        setBlurbContent({
          heading: motif.name,
          history: motif.experience,
          verbiage: motif.synopsis,
        });
      }}
      onMouseOut={() => {
        setBlurbShow(false);
        setBlurbContent({
          heading: "",
          history: "",
          verbiage: "",
        });
      }}      
    >
      <Star
        key={i}
        id={`star-${motif.name}`}
        props={{
          subject: motif.name,
          experience: motif.experience,
          isRev: (i + 1) % 2 > 0 ? true : false,
          hoverIncrementer: props.hoverIncrementer,
          handleContactClick: props.handleContactClick,
          clickIncrementer: props.clickIncrementer,
        }}
      />
    </div>
  ));

  return (
    <>
      {blurbShow && (
        <div id="starmap-blurb" className="flex-1" style={blurbPositionStyle}>
          <h4 id="blurbHeading" className="text-center w-auto">{blurbContent.heading}</h4>
          <h5 id="blurbHistory" className="text-center w-auto">{blurbContent.history}</h5>
          <h6 id="blurbVerbiage">{blurbContent.verbiage}</h6>
        </div>
      )}
      <div id="star-box">{stars}</div>
    </>
  );
};

export default StarMap;
