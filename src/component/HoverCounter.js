import { useState, useEffect } from "react";

const HoverCounter = () => {
  const [hoverCount, setHoverCount] = useState(0);

  useEffect(() => {
    const stateHoverCount = localStorage.getItem("hoverCount");
    if (stateHoverCount) {
      setHoverCount(parseInt(stateHoverCount, 10));
    }
  }, []);

  const tallyHovers = () => {
    setHoverCount(hoverCount + 1);
  };

  useEffect(() => {
    localStorage.setItem("hoverCount", hoverCount.toString());
  });

  return { hoverCount, tallyHovers };
};
export default HoverCounter;
