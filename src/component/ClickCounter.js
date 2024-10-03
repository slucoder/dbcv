import { useState, useEffect } from "react";

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    const stateClickCount = localStorage.getItem("clickCount");
    if (stateClickCount) {
      setClickCount(parseInt(stateClickCount, 10));
    }
  }, []);

  const tallyClicks = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    localStorage.setItem("clickCount", clickCount.toString());
  });

  return { clickCount, tallyClicks };
};
export default ClickCounter;
