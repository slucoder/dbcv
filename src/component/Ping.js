import emailjs from "emailjs-com";
import {
  customPointer,
  dbHero,
  pingCancelStyle,
  pingSubmitStyle,
  pingPadding,
  visitor,
} from "../util.tsx";
import { useRef, useState } from "react";
import useSound from "use-sound";
import sendMessageDitty from "../audio/also-sprach-zarathustra.wav";

const Ping = ({
  onCancelClick,
  clickIncrementer,
  messageIncrementer,
  handleVisitorName,
  clickTotal,
  hoverTotal,
}) => {
  const refPingForm = useRef(null);
  const refVisitorNameInput = useRef(null);
  const refVisitorEmailInput = useRef(null);
  const refVisitorCommentInput = useRef(null);
  const [messageStatus, setMessageStatus] = useState("initial");
  const [errMessage, setErrMessage] = useState(null);
  const [pointerCursor, setPointerCursor] = useState(false);
  const [visitorChosenName, setVisitorChosenName] = useState(visitor);
  const [playSendMailSong, {stop}] = useSound(sendMessageDitty);
  const handleMessaging = (result) => {
    setMessageStatus(result);
  };
  const onButtonHover = (hovering) => {
    if (hovering !== pointerCursor) {
      setPointerCursor(hovering);
      if (hovering) {
        document.body.style.cursor = customPointer;
      } else {
        document.body.style.cursor = "revert";
      }
    }
  };
  
function bleach(str){
  const badChars = /[^\\<>/{}]/gi;
  const retVal = str.replace(badChars, " ").substring(0, 1000);
  return retVal;  
};

  const handleClose = () => {
    clickIncrementer();
    onButtonHover(false);
  };

  const postVisitorName = () => {
    const newVisitorName = refVisitorNameInput.current.value.trim();    
    if (newVisitorName && newVisitorName.length > 1) {
      const alias = newVisitorName.split(' ')[0].substring(0, 10);
      setVisitorChosenName(alias);
      handleVisitorName(alias);
    }
  };

  const pbr = { playbackRate : 1.15 };

  function visitorMessageToHost(e) {
    e.preventDefault();
    setPointerCursor(false);
    postVisitorName();
    setMessageStatus("sending");
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refPingForm.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        setErrMessage("");
        messageIncrementer();
        handleMessaging("sent");
      })
      .catch((err) => {
        setErrMessage(err);
        handleMessaging("fail");
      });
  };

  function recycleFocus(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      refVisitorNameInput.current.focus();
    } else {
      return true;
    }
  }
  return (
    <>
      <div>
        {messageStatus === "initial" && (
          <div className="cursor-pointer">
            <form
              action=""
              ref={refPingForm}
              key="ping-form"
              onSubmitCapture={() => { playSendMailSong(pbr)} }
              onSubmit={visitorMessageToHost}
              id="ping-form"
              aria-label="Contact"
              name="ping-form"
            >
              <fieldset disabled={messageStatus === "sending"}>
                <table className="table-auto" id="contact-table">
                  <thead>
                    <tr style={pingPadding}>
                      <th
                        colSpan="2"
                        style={{
                          color: "#ffffff",
                          fontSize: "2rem",
                          padding: "1rem",
                        }}
                      >
                        <div
                          style={{
                            width: "50vw",
                            paddingLeft: "1rem",
                            margin: "auto",
                          }}
                        >
                          <p>Contact</p>
                          <p>{`${dbHero}`}</p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: "#ffffff",
                          textAlign: "right",
                          ...pingPadding,
                        }}
                      >
                        <label
                          style={{ fontSize: "1.25rem", ...pingPadding }}
                          id="ping-name-label"
                          htmlFor="ping-name"
                        >
                          Name
                        </label>
                      </td>
                      <td style={pingPadding}>
                        <input
                          tabIndex={1}
                          ref={refVisitorNameInput}
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          id="ping-name"
                          aria-labelledby="ping-name-label"
                          autoComplete="off"
                          minLength={2}
                          maxLength={100}
                          required
                          autoFocus
                          onBlur={postVisitorName}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#ffffff",
                          textAlign: "right",
                          ...pingPadding,
                        }}
                      >
                        <label
                          style={{ fontSize: "1.25rem", ...pingPadding }}
                          id="ping-email-label"
                          htmlFor="ping-email"
                        >
                          Your Email Address
                        </label>
                      </td>
                      <td style={pingPadding}>
                        <input
                          id="ping-email"
                          tabIndex={2}
                          ref={refVisitorEmailInput}
                          aria-labelledby="ping-email-label"
                          type="email"
                          height="5rem"
                          width="20rem"
                          name="email"
                          minLength={8}
                          maxLength={64}
                          placeholder="email@address.com"
                          autoComplete="on"
                          required={true}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "right", ...pingPadding }}>
                        <label
                          style={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            top: "0",
                            ...pingPadding,
                          }}
                          id="ping-comments-label"
                          htmlFor="ping-comments"
                        >
                          Comments | Inquiries
                        </label>
                      </td>
                      <td>
                        <input
                          tabIndex={3}
                          ref={refVisitorCommentInput}
                          aria-labelledby="ping-comments-label"
                          id="ping-comments"
                          type="text"
                          name="comments"
                          placeholder="Comments | Inquiries"
                          aria-placeholder="Comments, Inquiries"
                          autoComplete="off"
                          minLength={3}
                          maxLength={750}
                          style={{
                            height: "15vh",
                            width: "25vw",
                            display: "block",
                            bottom: "0",
                          }}
                          required={true}                          
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "right", ...pingPadding }}>
                        <div
                          onMouseEnter={() => onButtonHover(true)}
                          onMouseLeave={() => onButtonHover(false)}
                        >
                          <button
                            className="send"
                            tabIndex={4}
                            alt="Send"
                            style={pingSubmitStyle}
                            type="submit"
                            name="submit"
                            id="ping-submit-button"
                            aria-label="Send"
                            onClickCapture={clickIncrementer}
                          >
                            Send
                          </button>
                        </div>
                      </td>
                      <td style={{ textAlign: "left", ...pingPadding }}>
                        <div>
                          <div
                            tabIndex={5}
                            alt="Cancel"
                            name="cancel"
                            style={pingCancelStyle}
                            id="ping-cancel-button"
                            aria-label="Cancel"
                            onMouseEnter={() => onButtonHover(true)}
                            onMouseLeave={() => onButtonHover(false)}
                            onKeyDownCapture={(e) => recycleFocus(e)}
                            onClickCapture={handleClose}
                            onClick={onCancelClick}
                          >
                            <div
                              style={{
                                marginTop: "1.75rem",
                                marginLeft: "0.70rem",
                              }}
                            >
                              Cancel
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot style={{ display: "none" }}>
                    <tr>
                      <td>
                        <input
                          tabIndex={-1}
                          id="click-total"
                          name="clickTotal"
                          type="hidden"
                          value={clickTotal}
                        ></input>
                      </td>
                      <td>
                        <input
                          tabIndex={-1}
                          id="hover-total"
                          name="hoverTotal"
                          type="hidden"
                          value={hoverTotal}
                        ></input>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </fieldset>
            </form>
          </div>
        )}
        {messageStatus === "sending" && (
          <div aria-label="Sending your message" style={pingPadding}>
            <br />
            <h2>
              <i>¡Sending your message!</i>
            </h2>
          </div>
        )}
        {messageStatus === "sent" && (
          <div aria-label="Your message is sent" style={pingPadding}>
            <br />
            <h2>¡Your message is sent!</h2>
            <h2>¡Thank you, {visitorChosenName}!</h2>
            <br />
            <h3>¡Don Brown will respond in a timely manner!</h3>
          </div>
        )}
        {messageStatus === "fail" && (
          <div aria-label="Message failed to send" style={pingPadding}>
            <div aria-label="Please try again later">
              <h2>
                Unfortunately,&nbsp;{visitorChosenName}
                !&nbsp;the&nbsp;message&nbsp;did&nbsp;not&nbsp;send!
              </h2>
              <h2>Please&nbsp;try&nbsp;again&nbsp;momentarily!</h2>
            </div>
            <p aria-label="Message failure details">
              Message&nbsp;failure&nbsp;details&nbsp;following.&nbsp;
            </p>
            <p className="border-2 border-red-900 rounded-md">{errMessage}</p>
          </div>
        )}

        <div
          style={{
            display:
              messageStatus === "initial" || messageStatus === ""
                ? "none"
                : "block",
            marginTop: "3rem",
            marginLeft: "25rem",
            ...pingCancelStyle,
          }}
          tabIndex={5}
          alt="Close"
          name="close"
          id="ping-close-button"
          aria-label="Close Contact Form"
          onMouseEnter={() => onButtonHover(true)}
          onMouseLeave={() => {
            onButtonHover(false);
          }}
          onClickCapture={() => { clickIncrementer(); stop(); }}
          onClick={onCancelClick}
        >
          <div
            aria-label="Click to Close the Contact Form"
            alt="Click to Close the Contact Form"
            style={{ marginTop: "1.75rem", marginLeft: "0.75rem" }}
          >
            Close
          </div>
        </div>
      </div>
    </>
  );
};
export default Ping;
