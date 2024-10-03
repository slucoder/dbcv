import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { blurbId, blurbStyle, blurbVariants } from "../util.tsx";

const Blurbomatic = ({ props }) => {
  const blurbAnimate = useAnimation();
  const reffy = useRef(null);

  useEffect(() => {

    const closer = reffy.current;

    function closeBlurb() {
      blurbAnimate.start("collapse");            
    };

    function openBlurb(){
      blurbAnimate.start("expand");
    };

    closer.addEventListener("click", closeBlurb);

    if(props.blurbEvent === "open"){
      openBlurb();
    }else if(props.blurbEvent === "close"){
      closeBlurb();
    }
    
    return () => {
      closer.removeEventListener("click", closeBlurb);
    };
    
  }, [blurbAnimate, props.blurbEvent]);

  return (
    <>
      <motion.div
        variants={blurbVariants}
        ref={reffy}
        key={props.blurbName}
        id={blurbId}
        animate={blurbAnimate}
        initial={"hidden"}
        style={blurbStyle}
      >
        <h4>{props.blurbSubject}</h4>
        <p>{props.blurbExperience}</p>
        <p>{props.blurbSynopsis}</p>
      </motion.div>
    </>
  );
};

export default Blurbomatic;
