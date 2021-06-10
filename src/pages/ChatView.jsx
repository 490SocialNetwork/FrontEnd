import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../components/ChatFeed";

const ChatView = () => {
  return (
    <ChatEngine
      height="100vh"
      //Chat Engine
      projectID="db80b9d7-09ad-4bf2-b3d7-2081d032355b"
      userName="courtneyh"
      //password
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default ChatView;
