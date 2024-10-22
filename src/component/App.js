import { useState } from "react";
import { motion } from "framer-motion";
import ClickCounter from "./ClickCounter.js";
import HoverCounter from "./HoverCounter.js";
import MessageCounter from "./MessageCounter.js";
import LazySusan from "./LazySusan.js";
import { Tooltip } from "react-tooltip";
import TypeInText from "./TypeInText.js";
import Hero from "./Hero.js";
import Ping from "./Ping.js";
import {
  dbHero,
  lazySusanVariants,
  pingStyle,
  tooltipStyle,
  typeInTextStyle,
  typeInTextProps,
  visitor,
} from "../util.tsx";

function App() {
  const [contactFormDisplay, setContactFormDisplay] = useState(false);
  const { clickCount, tallyClicks } = ClickCounter();
  const { hoverCount, tallyHovers } = HoverCounter();
  const { messageCount, tallyMessages } = MessageCounter();
  const [visitorName, setVisitorName] = useState(visitor);
  const handleContactClick = () => {
    setContactFormDisplay((contactFormDisplay) => !contactFormDisplay);
  };
  const handleVisitorName = (visitor) => {
    setVisitorName(visitor);
  };
  const handleHover = () => {
    tallyHovers(hoverCount + 1);
  };
  const handleClick = () => {
    tallyClicks(clickCount + 1);
  };
  return (
    <>
      <div className="blackhole"></div>
      <div
        data-tooltip-id="tooltip-hero"
        data-tooltip-content="Hunt for Eggs!"
        data-tooltip-place="bottom-start"
        data-tooltip-offset="90"
        data-tooltip-float={false}
        aria-label={`${dbHero} Banner`}
      >
        <Hero
          key={visitor}
          props={{ handleClick: handleClick, handleHover: handleHover }}
          className="z-30"
        />
        <Tooltip id="tooltip-hero" style={tooltipStyle}></Tooltip>
      </div>
      <div aria-label={`${dbHero} Animated Title Logo`} style={typeInTextStyle}>
        <TypeInText id="type-in-text" props={typeInTextProps} />
      </div>
      <div
        aria-label="Contact"
        onMouseOverCapture={tallyHovers}
        onClickCapture={tallyClicks}
        onClick={handleContactClick}
        alt="Contact"
        id="contact-link-top"
        className="contactLinkTop"
      >
        Contact Don Brown
      </div>
      <div
        alt={`${visitorName} Statistics`}
        aria-label={`${visitorName} Statistics`}
        key={`${visitorName}`}
        id="user-statistics"
        className="userStats font-TNR"
      >
        <span id="stats-span">
          <span className="visitorName">{visitorName}</span>&nbsp;Clicks:
          {clickCount}&nbsp;Hovers:{hoverCount}&nbsp;Messages:&nbsp;
          {messageCount}
        </span>
      </div>
      <div id="contact-form-display">
        {contactFormDisplay && (
          <div style={pingStyle} alt="Contact">
            <Ping
              id="ping-form"
              onCancelClick={handleContactClick}
              clickIncrementer={tallyClicks}
              messageIncrementer={tallyMessages}
              handleVisitorName={handleVisitorName}
              clickTotal={clickCount}
              hoverTotal={hoverCount}
            />
          </div>
        )}
      </div>
      <div aria-label="Carousel" id="carousel" className="z-0">
        <motion.div
          className="lazySusanWrapper"
          initial="hidden"
          variants={lazySusanVariants}
          animate="visible"
        >
          <LazySusan props={{hoverIncrementer:handleHover,
            clickIncrementer:tallyClicks}}
            
          />
        </motion.div>
      </div>
    </>
  );
}
export default App;
