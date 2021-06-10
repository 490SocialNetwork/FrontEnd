import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
// import { sendOutlines, PictureOutlines } from "@ant-design/icons";
const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;
  const handleSubmit = (event) => {
    //dis-enables browswer refresh once submitted
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    //reset value as empty string for message box
    setValue("");
  };

  const handleChange = (event) => {
    //click event
    setValue(event.target.value);
    isTyping(props, chatId);
  };
  // event to maintain image, '' because image, use .files for images
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="messgae-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        //send a message clicking enter key
        onSubmit={handleSubmit}
      />

      <label htmlFor="upload-button">
        <span className="image-button">
          {/* <PictureOutlines className="picture-icon" /> */}
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />

      <button type="submit" className="send-button">
        {/* <SendOutlines className="send-icon" /> */}
      </button>
    </form>
  );
};

export default MessageForm;
