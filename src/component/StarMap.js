import { useState } from "react";
import { projectsSkills } from "../content.js";
import Star from "./Star.js";
import {
  getViewportPosition,
  blurbStyle,
  blurbLeftPosVals,
  blurbTopPosVals,
} from "../util.tsx";

const StarMap = ({ props }) => {
  const [blurbShow, setBlurbShow] = useState(false);
  const [blurbContent, setBlurbContent] = useState({});
  const [blurbTop, setBlurbTop] = useState("");
  const [blurbLeft, setBlurbLeft] = useState("");
  const topBaseline = 6;
  const leftBaseline = 30;

  function handleBlurbPosition(index, motifCount) {
    const topPosition = index < 3 ? blurbTopPosVals[0] : blurbTopPosVals[1];
    let leftPosition = "";
    if (index < 3) {
      leftPosition = blurbLeftPosVals[index];
    } else {
      switch (motifCount) {
        default:
        case 1:
        case 2:
        case 3:
          break;
        case 4:
          if (index === 3) {
            leftPosition = blurbLeftPosVals[0];
          }
          break;
        case 5:
          if (index === 3) {
            leftPosition = blurbLeftPosVals[1];
          }
          if (index === 4) {
            leftPosition = blurbLeftPosVals[0];
          }
          break;
        case 6:
          if (index === 3) {
            leftPosition = blurbLeftPosVals[2];
          }
          if (index === 4) {
            leftPosition = blurbLeftPosVals[1];
          }
          if (index === 5) {
            leftPosition = blurbLeftPosVals[0];
          }
          break;
      }
    }
    setBlurbTop(getViewportPosition(topPosition, false));
    setBlurbLeft(getViewportPosition(leftPosition, true));
    // document.body.style.cursor = starPointer;
  }

  const blurbPosition = {
    top: blurbTop,
    left: blurbLeft,
  };
  const blurbPositionStyle = {
    ...blurbPosition,
    ...blurbStyle,
  };
  const header = projectsSkills.filter((s) => s.title === props.heading);
  const motifs = Array.from(header[0]["topics"]);

  const currentStarId = (motifName, motifIndex) => {
    return `star-${motifName + motifIndex.toString()}`;
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
      onMouseEnter={() => {
        handleBlurbPosition(i, motifs.length);
        setBlurbShow(true);
        setBlurbContent({
          heading: motif.name,
          history: motif.experience,
          verbiage: motif.synopsis,
        });
        props.hoverIncrementer();
      }}
      onMouseLeave={() => {
        setBlurbShow(false);
        document.body.style.cursor = "revert";
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
        }}
      />
    </div>
  ));

  return (
    <>
      {blurbShow && (
        <div id="starmap-blurb" className="flex-1" style={blurbPositionStyle}>
          <h4 id="blurb-heading" className="text-center w-auto">
            {blurbContent.heading}
          </h4>
          <h5 id="blurb-history" className="text-center w-auto">
            {blurbContent.history}
          </h5>
          <h6 id="blurb-verbiage">
            <p>{blurbContent.verbiage}</p>
          </h6>
        </div>
      )}
      <div id="star-box">{stars}</div>
    </>
  );
};

export default StarMap;
