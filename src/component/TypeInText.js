import React, { useState, useEffect } from "react";
import { cursorCharacter } from "../util.tsx";

function TypeInText({ props }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isLed, setIsLed] = useState(false);
  const pause =
    props.charInterval == null || props.charInterval < 1
      ? 100
      : props.charInterval;

  let j = 1;

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const textTimer = setInterval(() => {
        let quip = props.displayText.trim();
        if (j <= quip.length) {
          let txt = j === quip.length ? quip : quip.substring(0, j);
          setIsLed(j === quip.length || j % 2 === 0 ? false : true);
          setDisplayedText(txt);
          j++;
        } else {
          clearInterval(textTimer);
        }
      }, pause);
    }, props.effectDelay);

    return () => clearTimeout(delayTimer); // dispose!
  }, [props.displayText, pause, j, props.effectDelay]);

  function teaseText() {
    if (isLed) {
      let silly = displayedText.slice(-1);
      let sane = displayedText.slice(0, -1);
      return (
        <>
          <span>{sane}</span>
          <span style={{ opacity: 0.5 }}>{silly}</span>
          <span>{cursorCharacter}</span>
        </>
      );
    } else {
      return (
        <>
          <span>{displayedText}</span>
        </>
      );
    }
  }

  return (
    <div
      id="eased"
      style={{
        fontSize: props.textSize,
        textShadow: [
          '1px -1px 0px rgba(118, 118, 118, 0.3)', 
          '-1px 2px 1px rgba(115, 115, 114, 0.3)', 
          '-2px 4px 1px rgba(118, 116, 116, 0.3)', 
          '-3px 6px 1px rgba(120, 119, 119, 0.3)', 
          '-4px 8px 1px rgba(123, 122, 122, 0.3)', 
          '-5px 10px 1px rgba(127, 125, 125, 0.3)', 
          ]    
      }}
    >
      {teaseText()}
    </div>
  );
}

export default TypeInText;
