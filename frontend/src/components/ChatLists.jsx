import React, { useEffect, useRef } from "react";

const ChatLists = ({ chats }) => {
  const user = localStorage.getItem("user");
  const endOfMessages = useRef();

  const SenderChat = ({ username, avatar, message }) => {
    return (
      <div className="chat_sender">
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong>
          <br />
          {message}
        </p>
      </div>
    );
  };

  const ReceiverChat = ({ username, avatar, message }) => {
    return (
      <div className="chat_receiver">
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong>
          <br />
          {message}
        </p>
      </div>
    );
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    endOfMessages.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="chats_list">
      {chats.map((chat, index) => {
        if (chat.username === user) {
          return (
            <SenderChat
              key={index}
              message={chat.message}
              username={chat.username}
              avatar={chat.avatar}
            />
          );
        } else {
          return (
            <ReceiverChat
              key={index}
              message={chat.message}
              username={chat.username}
              avatar={chat.avatar}
            />
          );
        }
      })}
      <div ref={endOfMessages}></div>
    </div>
  );
};

export default ChatLists;