import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lNavArrow from "../img/nav/lNavArrow.png";
import rNavArrow from "../img/nav/rNavArrow.png";
import {
  hoverCursor,
  altPrevious,
  altNext,
  nextArrowPosition,
  prevArrowPosition,
} from "../util.tsx";
import StarMap from "./StarMap.js";
import { useSound } from "use-sound";
import bikebell from "../audio/bikebell.wav";
import softbikebell from "../audio/soft-bikebell.wav";
import { projectsSkills } from "../content.js";
import { useState } from "react";

// const navTopics = ["Navigating", "Scripting", "Data", "Web", "Projects", "About"];
const navTopics = projectsSkills.map((ps) => {
  return ps.title;
});
const LazySusan = ({
  clickIncrementer,
  handleContactClick,
  hoverIncrementer,
}) => {
  const [playBikeBell] = useSound(bikebell);
  const [playSoftBikeBell] = useSound(softbikebell);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const navPanel = (
    <div className="thumbsLinks" id="nav-images" title="Jump to Topic">
      {navTopics.map((navtop, i) => (
        <div
          id={`thumb-${i}`}
          className="thumb"
          key={navtop}
          onClick={() => handleCurrentTopicChange(i)}
          onClickCapture={playSoftBikeBell}
          onMouseEnter={hoverIncrementer}
        >
          {navtop}
        </div>
      ))}
    </div>
  );
  function handleCurrentTopicChange(index) {
    setCurrentTopicIndex(index);
    clickIncrementer();
  }

  const lazySusanFrames = projectsSkills.map((topic, j) => (
    <div
      className="lazySusanFrame"
      id={`lazy-susan-frame-${j.toString()}`}
      key={`lazy-susan-frame-${j.toString()}`}
    >
      <div
        aria-label={topic.title}
        className="lazySusanLegend"
        id={`lazy-susan-legend-${topic.title}`}
      >
        {topic.title}
      </div>
      <StarMap
        id="star-map"
        key={j}
        props={{
          heading: topic.title,
          hoverIncrementer: hoverIncrementer,
          handleContactClick: handleContactClick,
          clickIncrementer: clickIncrementer,
        }}
      />
    </div>
  ));
  return (
    <>
      {navPanel}
      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        selectedItem={currentTopicIndex}
        autoPlay={false}
        id="lazy-susan-carousel"
        className="lazySusan"
        axis="horizontal"
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <div
              aria-label="Next Slide"
              title="Next Slide"
              style={nextArrowPosition}
              id="next-arrow"
              onClickCapture={playBikeBell}
              onClick={clickHandler}
              onMouseEnter={() => {
                hoverIncrementer();
                hoverCursor(true, "next-arrow");
              }}
              onMouseOut={() => hoverCursor(false, "next-arrow")}
            >
              <img src={rNavArrow} alt={altNext} id="rNavArrow"></img>
            </div>
          )
        }
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <div
              aria-label="Previous Slide"
              title="Previous Slide"
              style={prevArrowPosition}
              id="prev-arrow"
              onClickCapture={playSoftBikeBell}
              onClick={clickHandler}
              onMouseEnter={() => {
                hoverIncrementer();
                hoverCursor(true, "prev-arrow");
              }}
              onMouseOut={() => hoverCursor(false, "prev-arrow")}
            >
              <img src={lNavArrow} alt={altPrevious} id="lNavArrow"></img>
            </div>
          )
        }
      >
        {lazySusanFrames}
      </Carousel>
    </>
  );
};

export default LazySusan;
