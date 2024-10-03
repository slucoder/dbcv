import { useState, useEffect } from "react";

const MessageCounter = () => {
  const [messageCount, setMessageCount] = useState(0);
  useEffect(() => {
    const stateMessageCount = localStorage.getItem("messageCount");
    if (stateMessageCount) {
      setMessageCount(parseInt(stateMessageCount, 10));
    }
  }, []);

  const tallyMessages = () => {
    setMessageCount(messageCount + 1);
  };

  useEffect(() => {
    localStorage.setItem("messageCount", messageCount.toString());
  });

  return { messageCount, tallyMessages };
};
export default MessageCounter;
