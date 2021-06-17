import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../components/ChatFeed";
//import LoginView from "./LoginView";  This to
import { Redirect } from "react-router";

const ChatView = () => {
  const [home, setHome] = useState(false);
  return (
    <>
      {home && <Redirect to="/home" />}
      <div className="p-2 mx-2">
        <Button onClick={() => setHome(true)}>Home</Button>
      </div>
      <ChatEngine
        height="90vh"
        projectID="db80b9d7-09ad-4bf2-b3d7-2081d032355b"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  );
};

export default ChatView;
