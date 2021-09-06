import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const ChatNotification = () => {
  return (
    <div className="p-4 h-24 max-w-sm fixed bg-darkblue-500 w-64 bottom-4 right-4 rounded-xl shadow-white flex items-center space-x-4">
      <div className="">
        <FontAwesomeIcon
          icon={faCommentDots}
          size="2x"
          className="text-darkblue-300 absolute -top-5 left-28"
        />
      </div>
      <div>
        <div className="text-md font-medium text-darkblue-300">
          Notification
        </div>
        <p className="text-darkblue-900">You have a new message!</p>
      </div>
    </div>
  );
};

export default ChatNotification;
