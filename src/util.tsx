import pointer from "./img/nav/pointer.png";
import eightPointStar from "./img/flash/eight-point-star.png";
const glyphSizer = 10.6;
const typeInTextDelay = 8500; 
export const typeInTextStyle = {
  top: "13vh",
  left: "19vw",
  position: "absolute",
  color: "#ffffff",
  fontWeight: "bold",
  fontFamily: "jetbrains-italic",
  zIndex: 5,
};
export const dbHero = "Don Brown Software Engineer";
export const principalBouncingDelay = 150;
export const principalExitDelay = 55000; 
export const principalEntranceDelay = 9000;
export const viewportBuffer = 13;
export const tooltipStyle = {
  background: "transparent",
  color: "#ffffff",
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: "bold",
  height: "8vh",
  width: "50vw",
  overflow: "hidden",
  padding: "1rem",
  margin: "1rem",
  zIndex: 20,
};
export const calcGlyphPosition = (glyphIndex: number, isXaxis: boolean) => {
  return getViewportPosition(viewportBuffer + glyphIndex * glyphSizer, isXaxis);
};
export const getViewportPosition = (gridPosition: number, xAxis: boolean) => {
  const _gridVal = String(gridPosition >> 0);
  return xAxis ? _gridVal + "vw" : _gridVal + "vh";
};
export const cursorCharacter = "◄";
export const hoverCursor = (mouseHover: boolean, elementId: string) => {
  const element = document.getElementById(elementId);
  if (element != null) {
    let cursorStyle: string = "url(" + pointer + "), pointer",
      opacityLevel: string = "1.0",
      scaling: string = "1.10";
    if (!mouseHover) {
      cursorStyle = "auto";
      opacityLevel = "0.5";
      scaling = "1.0";
    }
    document.body.style.cursor = cursorStyle;
    element.style.opacity = opacityLevel;
    element.style.scale = scaling;
  } else {
    return false;
  }
};
export const lazySusanVariants = {
  hidden: {
    opacity: 0,
    height: "0vh",
    width: "0%",
    x: "0vw",
  },
  visible: {
    opacity: 1,
    top: "11vh",
    position: "relative",
    height: "80vh",
    width: "100%",
    transition: {
      delay: 5.5,
      duration: 1.75,
      type: "Inertia",
    },
  },
};
export const altPrevious = "Previous Frame";
export const altNext = "Next Frame";
export const shuffle = (array: string[]) => {
  for (let ix = array.length - 1; ix > 0; ix--) {
    const j = Math.floor(Math.random() * (ix + 1));
    [array[ix], array[j]] = [array[j], array[ix]];
  }
  return array;
};
export const catnap = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export const blurbId = "Blurb-O-Matic";
export const blurbVariants = {
  hidden: {
    x: "20rem",
    y: "10rem",
    height: 0,
    width: 0,
    display: "none",
  },
  expand: {
    display: "flex",
    zIndex: 20,
    height: "+50vh",
    width: "+20vw",
    transition: {
      duration: 2500,
      ease: "linear",
    },
  },
  collapse: {
    x: "20rem",
    y: "20rem",
    height: 0,
    width: 0,
    display: "none",
    transition: {
      duration: 1500,
      ease: "anticipate",
      type: "tween",
    },
  },
};
export const blurbStyle = {
  position: "absolute",
  color: "black",
  minHeight: "10rem",
  minWidth: "20rem",
  maxHeight: "50rem",
  maxWidth: "35rem",
  padding: "1rem",
  opacity: 0.99,
  zIndex: 20,
  background: "linear-gradient(135deg, #ffffff 40%, #99d6ff)",
  border: "5px solid black",
  overflow: "auto",
  textWrap: "stable",
  borderRadius: "30%",
};
export const pingStyle = {
  border: "solid #ffffff",
  background: "content-box radial-gradient(#006600, #5cd65c)",
  color: "black",
  fontFamily: "Cascadia Code",
  top: "25vh",
  left: "20vw",
  height: "60vh",
  width: "60vw",
  position: "fixed",
  padding: "1rem",
  margin: "1rem",
  borderRadius: "20% / 20%",
  zIndex: 40,
};
export const pingSubmitStyle = {
  height: "5rem",
  margin: "auto",
  width: "5rem",
  color: "black",
  fontSize: "1.25rem",
  fontWeight: "bold",
  backgroundColor: "#ffffff",
  boxShadow: "10px 5px 5px grey",
  border: "solid powderblue",
};
export const pingCancelStyle = {
  height: "6rem",
  width: "6rem",
  margin: "auto",
  color: "whitesmoke",
  fontSize: "1.25rem",
  fontWeight: "bold",
  backgroundColor: "#b4b5b5",
  boxShadow: "10px 5px 5px grey",
  border: "solid #ffffff",
  borderRadius: "50%",
};
export const pingPadding = { padding: "1.5rem" };
export const prevArrowPosition = {
  position: "fixed",
  top: "35vh",
  left: "0.2vw",
  width: "auto",
  height: "auto",
  opacity: 0.75,
  zIndex: "1",
};
export const nextArrowPosition = {
  position: "fixed",
  top: "35vh",
  right: "0.2vw",
  width: "auto",
  height: "auto",
  opacity: 0.75,
  zIndex: "1",
};

export const customPointer = "url('" + pointer + "'), pointer";
export const starPointer = "url('" + eightPointStar + "'), pointer";
export const visitor = "Guest";
export const sparkler1Variants = {
  hidden: {
    opacity: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
      duration: 0,
    },
  },
  dropping: {
    opacity: 1,
    scale: 1.25,
    rotateY: 671,
    y: "+100vh",
    transition: {
      duration: 4.5,
      delay: 0,
      type: "Inertia",
      ease: "easeOut",
    },
  },
  quit: {
    display: "none",
    opacity: 0,
    visibility: "collapse",
    scale: 0,
  },
};
export const sparkler2Variants = {
  hidden: {
    opacity: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
      duration: 0,
    },
  },
  dropping: {
    opacity: 1,
    scale: 1.25,
    rotateY: 280,
    y: "+100vh",
    transition: {
      duration: 3.5,
      delay: 1,
      type: "Inertia",
      ease: "easeOut",
    },
  },
  quit: {
    display: "none",
    opacity: 0,
    visibility: "collapse",
    scale: 0,
  },
};
export const principalEscapeVariants = {
  hidden: {
    opacity: 1,
    y: "0.1vh",
    x: "14vw",
    rotateY: 5,
    scale: 0.01,
    display: "none",
  },
  escaping: {
    display: "block",
    scale: 0.75,
    opacity: 1,
    x: "-60vw",
    y: "+10vh",
    rotate: 46,
    transition: {
      duration: 5.25,
      repeat: 0,
      type: "anticipate",
      ease: "easeInOut",
    },
  },
  quit: {
    display: "none",
    opacity: 0,
  },
};
export const principalReturnVariants = {
  hidden: (custom) => ({
    opacity: 1,
    scale: 0.2,
    y: custom.y,
    x: custom.x,
  }),
  visible: {
    opacity: 1,
    rotate: 360,
    y: "-34vh",
    scale: 0.35,
    transition: {
      duration: 5,
      delay: 0,
      type: "anticipate",
      ease: "easeInOut",
    },
  },
  bouncing: {
    y: ["-34vh", "-26vh", "-34vh"],
    scale: [0.35, 0.41, 0.35],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: 5,
    },
  },
  revRight: {
    x: "100vw",
    scale: [0.35, 0.39, 0.37, 0.35, 0.39],
    rotate: [-1, -30, -25, -15, 15],
    transition: {
      duration: 3.75,
      delay: 0.05,
      type: "backInOut",
      ease: "easeOut",
    },
  },
  quit: {
    display: "none",
    opacity: 0,
    visibility: "collapse",
    scale: 0,
  },
  transition: {
    duration: 1.25,
    ease: "Linear",
    type: "Inertia",
  },
};
export const braceVariants = {
  hidden: (custom) => ({
    opacity: 0.1,
    x: custom.x,
    y: custom.y,
    rotate: custom.constRotate === "0" ? -180 : 180,
  }),
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    y: "+35vh",
    rotate: custom.constRotate === "0" ? 360 : -360,
    transition: {
      duration: 0.5,
      delay: 0.25,
      type: "spring",
      stiffness: 250,
    },
  }),
  sliding: (custom) => ({
    x: custom.slide,
    y: "+25vh",
    opacity: 0,
    scale: 20,
    rotateX: custom.constRotate === "0" ? 720 : -720,
    rotateY: custom.constRotate === "0" ? 720 : -720,
    transition: {
      duration: custom.slideDuration,
      delay: 0.2,
    },
  }),
  quit: {
    display: "none",
    opacity: 0,
    visibility: "collapse",
    scale: 0,
  },
};
export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const firstInitalsAnimationOptions = ["spinning", "dancing", "outro"];
export const secondInitalsAnimationOptions = [
  "shimmy",
  "spinning",
  "dancing",
  "outro",
];
export const firstInitialVariants = {
  hidden: (custom) => ({
    opacity: 0.01,
    x: custom.x,
    y: custom.y,
    scale: 0.1,
    rotate: custom.constRotate === "0" ? -180 : 180,
  }),
  visible: (custom) => ({
    opacity: 1,
    // y: "+35vh",
    scale: 1,
    rotate: custom.constRotate === "0" ? 360 : -360,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  }),
  sliding: (custom) => ({
    x: custom.slide,
    rotateX: -360,
    rotateY: -360,
    style: { boxShadow: "none" },
    y: "-1vh",
    scale: 1,
    transition: {
      duration: 3.75,
      delay: 0.25,
      type: "spring",
      stiffness: 100,
    },
  }),
  spinning: {
    rotateY: 2880,
    rotateX: 720,
    transition: {
      duration: 3.75,
      delay: 0.05,
      ease: "easeOut",
    },
  },
  dancing: {
    opacity: 1,
    rotate: -360,
    rotateY: 360,
    transition: {
      duration: 3,
      type: "spring",
      stiffness: 200,
    },
  },
  outro: {
    opacity: 1,
    rotateY: 720,
    rotateX: 360,
    rotate: -360,
    scale: [1.75, 2.75, 2, 1.25, 0.5, 1],
    transition: {
      duration: 1.5,
      delay: 0,
      type: "Inertia",
    },
  },
};
export const secondInitialVariants = {
  hidden: (custom) => ({
    opacity: 0.1,
    scale: 0.1,
    x: custom.x,
    y: custom.y,
    rotate: custom.constRotate === "0" ? -180 : 180,
  }),
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    rotate: custom.constRotate === "0" ? 360 : -360,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  }),
  sliding: (custom) => ({
    x: custom.slide,
    rotateX: -360,
    rotateY: -360,
    y: "-1vh",
    scale: 1,
    transition: {
      duration: 3.25,
      delay: 0.25,
      type: "spring",
      stiffness: 100,
    },
  }),
  spinning: {
    rotate: 2880,
    rotateY: 360,
    transition: {
      duration: 5.25,
      delay: 0.45,
      ease: "easeOut",
    },
  },
  dancing: {
    opacity: 1,
    rotate: 720,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 200,
    },
  },
  outro: {
    opacity: 1,
    rotate: -720,
    scale: [1.5, 2.5, 1.25, 0.75, 1.5, 1],
    transition: {
      duration: 3.5,
      delay: 0,
    },
  },
  shimmy: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition: {
      duration: 2,
      repeat: 3,
    },
  },
  vibrating: (custom) => ({
    x: [
      `calc(${custom.slide} + 3%)`,
      `calc(${custom.slide} - 3%)`,
      `calc(${custom.slide} + 3%)`,
      `calc(${custom.slide} - 3%)`,
      `calc(${custom.slide} + 3%)`,
      custom.slide,
    ],
    y: ["-2vh", "2vh", "-1.5vh", "-2vh", "1.5vh", "-1vh"],
    transition: {
      duration: 0.15,
      repeat: 20,
      type: "Inertia",
    },
  }),
};
export function getRandomInteger(maxVal: number) {
  return Math.floor(Math.random() * maxVal);
}
function getRandomEastWest() {
  return Math.random() >= 0.5 ? -1 : 1;
}
function getRandomDecimal() {
  const rando = Math.random();
  return rando === 0 ? 0.1 : rando;
}
const randomTwirlVariants = () => {
  const rando = getRandomInteger(3) + 1;
  const x = getRandomInteger(5) + 1;
  const y = getRandomInteger(5) + 1;
  const xDir = getRandomEastWest();
  const yDir = getRandomEastWest();
  const randomTwirls = {
    rotateX: 360 * x * xDir,
    rotateY: 360 * y * yDir,
    transition: {
      duration: rando * 3 + yDir,
      ease: xDir > 0 ? "circInOut" : "backInOut",
    },
  };
  return randomTwirls;
};
const randomBounceVariants = () => {
  const rep = getRandomInteger(4) + 1;
  const randoScale = getRandomDecimal();
  const dur = getRandomDecimal();
  const bounceY = (getRandomInteger(2) + 1 + dur).toString() + "vh";
  const randoBounces = {
    y: ["-1vh", bounceY, "-1vh"],
    scale: [1, randoScale, 1],
    transition: {
      duration: dur,
      ease: dur > 0.5 ? "circInOut" : "backInOut",
      repeat: rep,
    },
  };
  return randoBounces;
};
export const abcVariants = {
  hidden: (custom) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y,
  }),
  visible: (custom) => ({
    opacity: 0,
    y: "+35vh",
    rotateY: 180,
    rotateX: 180,
    scale: 1.25,
    transition: {
      duration: 0.25,
      delay: 0.15,
    },
  }),
  sliding: (custom) => ({
    opacity: 1,
    x: custom.slide,
    y: "-1vh",
    rotateY: -720,
    rotateX: -720,
    scale: 1,
    zIndex: 10,
    transition: {
      duration: 4,
      delay: custom.delay * 1.02,
      type: "spring",
      stiffness: 100,
    },
  }),
  spinning: (custom) => ({
    rotateX: 1440,
    rotateY: -360,
    transition: {
      duration: 1.5 + 1.25 * custom.spinDelay,
      delay: 0.31 * custom.spinDelay,
      ease: "easeOut",
    },
  }),
  bouncing: randomBounceVariants,
  twirling: randomTwirlVariants,
};
export const typeInTextProps = {
  charInterval: "125",
  displayText: "Software Engineer",
  effectDelay: typeInTextDelay,
  textSize: "5rem",
};
export const blurbTopPosVals = [25, 10];
export const blurbLeftPosVals = [11, 27, 45];
