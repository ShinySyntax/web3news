import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const ChatNotification = () => {
  return (
    <div className="p-2 h-20 max-w-sm fixed bg-darkblue-500 w-64 bottom-4 right-4 rounded-xl w3n-hover shadow-white flex items-center space-x-4 cursor-pointer">
      <div className="">
        <FontAwesomeIcon
          icon={faCommentDots}
          size="2x"
          className="absolute -top-5 left-28 animate-bounce text-darkblue-300"
        />
      </div>
      <div className="text-sm">
        <div className="font-medium text-darkblue-300">Notification</div>
        <p className="text-darkblue-900">You have a new message!</p>
      </div>
    </div>
  );
};

export default ChatNotification;
