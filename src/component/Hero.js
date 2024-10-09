import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import gong from "../audio/gong.wav";
import flutter from "../audio/flutter.wav";
import intro from "../audio/intro.wav";
import egg from "../img/egg/egg.png";
import closedBrace from "../img/abc/closedBrace.png";
import openBrace from "../img/abc/openBrace.png";
import capitalD from "../img/abc/capD.png";
import capitalO from "../img/abc/capO.png";
import capitalO2 from "../img/abc/capO2.png";
import capitalN from "../img/abc/capN.png";
import capitalN2 from "../img/abc/capN2.png";
import capitalB from "../img/abc/capB.png";
import capitalR from "../img/abc/capR.png";
import capitalW from "../img/abc/capW.png";
import principalEscape from "../img/principal/principal-escape.png";
import principalReturn from "../img/principal/principal-return.png";
import sparkler1 from "../img/flash/sparkler1.png";
import sparkler2 from "../img/flash/sparkler2.png";
import { calcGlyphPosition, catnap } from "../util.tsx";
import {
  abcVariants,
  braceVariants,
  containerVariants,
  firstInitalsAnimationOptions,
  firstInitialVariants,
  secondInitialVariants,
  principalEntranceDelay,
  principalBouncingDelay,
  principalExitDelay,
  secondInitalsAnimationOptions,
  sparkler1Variants,
  sparkler2Variants,
  principalEscapeVariants,
  principalReturnVariants,
} from "../util.tsx";

function Hero({ props }) {
  const [firstInitialBehavior, setFirstInitialBehavior] = useState("dancing");
  const [secondInitialBehavior, setSecondInitialBehavior] =
    useState("vibrating");
  const [logoBehavior, setLogoBehavior] = useState("bouncing");
  const [playGong] = useSound(gong);
  const [playFlutter] = useSound(flutter);
  const [playIntro] = useSound(intro);
  const bracePosLeft = "-100vw";
  const bracePosRight = "+100vw";
  const sparkleDroppingPosX = calcGlyphPosition(-0.5, true);
  const dPosX = calcGlyphPosition(0, true);
  const o1PosX = calcGlyphPosition(0.93, true);
  const n1PosX = calcGlyphPosition(1.7, true);
  const bPosX = calcGlyphPosition(2.7, true);
  const rPosX = calcGlyphPosition(3.5, true);
  const o2PosX = calcGlyphPosition(4.2, true);
  const wPosX = calcGlyphPosition(5.0, true);
  const n2PosX = calcGlyphPosition(6, true);
  const animateContainer = useAnimationControls();
  const animateBraces = useAnimationControls();
  const animateFirstInitial = useAnimationControls();
  const animateSecondInitial = useAnimationControls();
  const animateChars = useAnimationControls();
  const animatePrincipalReturn = useAnimationControls();
  const animatePrincipalEscape = useAnimationControls();
  const animateSparkle1 = useAnimationControls();
  const animateSparkle2 = useAnimationControls();
  const alphabetStyle = {
    position: "absolute",
    opacity: 0,
    zIndex: 15,
  };
  const fixedStyle = {
    position: "absolute",
    zIndex: 15,
  };
  const floatPrincipleStyle = {
    position: "absolute",
    float: "left",
    filter: "drop-shadow(0 0 0.15rem #fff)",
    zIndex: 20,
  };
  const escapePrincipalStyle = {
    position: "absolute",
    float: "left",
    filter: "drop-shadow(0 0 0.15rem #fff)",
    zIndex: 20,
  };
  const sparkleDroppingStyle = {
    position: "fixed",
    x: sparkleDroppingPosX,
    y: "16vh",
    float: "right",
    zIndex: 20,
  };

  useEffect(() => {
    async function overture() {
      animateContainer.start("visible");
      animateFirstInitial.start("visible");
      animateSecondInitial.start("visible");
      await animateBraces.start("visible");
      animateBraces.start("sliding");
      animateFirstInitial.start("sliding");
      animateSecondInitial.start("sliding");
      animatePrincipalEscape.start("escaping");
      await animateChars.start("visible");
      await animateChars.start("sliding");
      await animateBraces.start("quit");
      animateBraces.stop();
      await animatePrincipalEscape.start("quit");
      animatePrincipalEscape.stop();
      await catnap(principalEntranceDelay);
      await animatePrincipalReturn.start("visible");
      await catnap(principalBouncingDelay);
      animatePrincipalReturn.start("bouncing");
      animateSparkle1.start("visible");
      animateSparkle1.start("dropping");
      animateSparkle2.start("visible");
      await animateSparkle2.start("dropping");
      animatePrincipalReturn.start("revRight");
      animateFirstInitial.start("spinning");
      animateChars.start("spinning");
      animateSecondInitial.start("spinning");
      await animateSparkle2.start("quit");
      await animateSparkle1.start("quit");
      await catnap(principalExitDelay);
      animatePrincipalReturn.stop();
      animateSparkle2.stop();
      animateSparkle1.stop();
    }
    async function runIntroSequence() {
      overture();
    }
    runIntroSequence();
  }, [
    animateBraces,
    animateFirstInitial,
    animateChars,
    animateContainer,
    animatePrincipalReturn,
    animatePrincipalEscape,
    animateSecondInitial,
    animateSparkle1,
    animateSparkle2,
  ]);
  function getFirstInitialsAnimationOption() {
    const j =
      firstInitalsAnimationOptions.indexOf(firstInitialBehavior) + 1 >
      firstInitalsAnimationOptions.length - 1
        ? 0
        : firstInitalsAnimationOptions.indexOf(firstInitialBehavior) + 1;
    return firstInitalsAnimationOptions[j];
  }
  function getSecondInitialsAnimationOption() {
    const j =
      secondInitalsAnimationOptions.indexOf(secondInitialBehavior) + 1 >
      secondInitalsAnimationOptions.length - 1
        ? 0
        : secondInitalsAnimationOptions.indexOf(secondInitialBehavior) + 1;
    return secondInitalsAnimationOptions[j];
  }
  const activateLogoAnimation = () => {
    animateChars.start(logoBehavior);
    animateFirstInitial.start(firstInitialBehavior);
    animateSecondInitial.start(secondInitialBehavior);
    setLogoBehavior(logoBehavior === "bouncing" ? "twirling" : "bouncing");
    setFirstInitialBehavior(getFirstInitialsAnimationOption());
    setSecondInitialBehavior(getSecondInitialsAnimationOption());
  };

  const clickFirstInitial = () => {
    animateFirstInitial.start(firstInitialBehavior);

    setFirstInitialBehavior(
      firstInitialBehavior === "dancing" ? "outro" : "dancing"
    );
  };

  const clickSecondInitial = () => {
    animateSecondInitial.start(secondInitialBehavior);

    setSecondInitialBehavior(
      secondInitialBehavior === "vibrating" ? "outro" : "vibrating"
    );
  };

  const easterEggHover = () => {
    document.body.style.cursor = "url(" + egg + "), pointer";
  };
  return (
    <>
      <motion.div
        variants={containerVariants}
        className="h-1/3 w-9/12 relative"
        id="heroWrapper"
      >
        <motion.img
          alt="Creature Escapes Black Hole on Flying Saucer"
          src={principalEscape}
          variants={principalEscapeVariants}
          initial="hidden"
          style={escapePrincipalStyle}
          animate={animatePrincipalEscape}
        />
        <motion.img
          alt="Creature Rides Flying Saucer"
          custom={{ x: "-22vw", y: "+100vh" }}
          src={principalReturn}
          variants={principalReturnVariants}
          initial="hidden"
          style={floatPrincipleStyle}
          animate={animatePrincipalReturn}
        />
        <motion.img
          src={sparkler1}
          variants={sparkler1Variants}
          initial="hidden"
          style={sparkleDroppingStyle}
          animate={animateSparkle1}
        />
        <motion.img
          src={sparkler2}
          variants={sparkler2Variants}
          initial="hidden"
          style={sparkleDroppingStyle}
          animate={animateSparkle2}
        />
        <motion.div
          custom={{
            x: "32vw",
            y: "-100vh",
            slide: bracePosLeft,
            slideDuration: 2.25,
            constRotate: "0",
          }}
          variants={braceVariants}
          initial="hidden"
          animate={animateBraces}
          style={fixedStyle}
          className="brace"
        >
          <img src={openBrace} alt="Open Curly Brace: {" />
        </motion.div>

        <motion.div
          custom={{
            x: "38vw",
            y: "35vh",
            slide: dPosX,
            constRotate: "0",
            spinDelay: 0,
            spinCycle: 1,
          }}
          key={"firstInitial"}
          variants={firstInitialVariants}
          initial="hidden"
          animate={animateFirstInitial}
          style={fixedStyle}
          className="initial"
          whileHover={() => {
            easterEggHover();            
          }}
          onHoverStart={props.handleHover}
          onHoverEnd={() => {
            document.body.style.cursor = "revert";
          }}
          onClickCapture={playFlutter}
          onClick={() => {
            clickFirstInitial();
            props.handleClick();
          }}
        >
          <img src={capitalD} alt="D" />
        </motion.div>
        <motion.div
          custom={{
            x: "45vw",
            y: "0vh",
            slide: o1PosX,
            delay: 0,
            spinDelay: 1.5,
          }}
          variants={abcVariants}
          initial="hidden"
          animate={animateChars}
          style={alphabetStyle}
          className="abc"
        >
          <img src={capitalO} alt="O" />
        </motion.div>

        <motion.div
          custom={{
            x: "50vw",
            y: "0vh",
            slide: n1PosX,
            delay: 1,
            spinDelay: 2,
          }}
          variants={abcVariants}
          initial="hidden"
          whileHover={easterEggHover}
          onHoverStart={props.handleHover}
          onHoverEnd={() => {
            document.body.style.cursor = "revert";
          }}
          animate={animateChars}
          style={alphabetStyle}
          className="abc"
          onClickCapture={playIntro}
          onClick={activateLogoAnimation}
        >
          <img src={capitalN} alt="N" />
        </motion.div>

        <motion.div
          custom={{
            x: "53vw",
            y: "35vh",
            slide: bPosX,
            constRotate: "1",
            spinCycle: 0.5,
          }}
          variants={secondInitialVariants}
          initial="hidden"
          animate={animateSecondInitial}
          style={fixedStyle}
          className="initial"
          onClickCapture={playGong}
          onClick={() => {
            clickSecondInitial();
            props.handleClick();
          }}
          whileHover={easterEggHover}
          onHoverStart={props.handleHover}
          onHoverEnd={() => {
            document.body.style.cursor = "revert";
          }}
        >
          <img src={capitalB} alt="B" />
        </motion.div>

        <motion.div
          custom={{
            x: "50vw",
            y: "0vh",
            slide: rPosX,
            delay: 0.3,
            spinDelay: 2.25,
          }}
          variants={abcVariants}
          initial="hidden"
          animate={animateChars}
          style={alphabetStyle}
          className="abc"
        >
          <img src={capitalR} alt="R" />
        </motion.div>

        <motion.div
          custom={{
            x: "50vw",
            y: "0vh",
            slide: o2PosX,
            delay: 1,
            spinDelay: 3,
          }}
          variants={abcVariants}
          initial="hidden"
          animate={animateChars}
          style={alphabetStyle}
          className="abc"
        >
          <img src={capitalO2} alt="O" />
        </motion.div>

        <motion.div
          custom={{
            x: "50vw",
            y: "0vh",
            slide: wPosX,
            delay: 1.25,
            spinDelay: 3.75,
          }}
          variants={abcVariants}
          initial="hidden"
          animate={animateChars}
          style={alphabetStyle}
          className="abc"
        >
          <img src={capitalW} alt="W" />
        </motion.div>

        <motion.div
          custom={{
            x: "50vw",
            y: "0vh",
            slide: n2PosX,
            delay: 1.75,
            spinDelay: 4.45,
          }}
          variants={abcVariants}
          initial="hidden"
          animate={animateChars}
          style={alphabetStyle}
          className="abc"
        >
          <img src={capitalN2} alt="N" />
        </motion.div>

        <motion.div
          custom={{
            x: "60vw",
            y: "-100vh",
            slide: bracePosRight,
            slideDuration: 1.5,
            constRotate: "1",
          }}
          rotor={{ degStart: -360, degEnd: 180 }}
          variants={braceVariants}
          initial="hidden"
          animate={animateBraces}
          style={fixedStyle}
          className="brace"
        >
          <img src={closedBrace} alt="Closed curly brace: }" />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
