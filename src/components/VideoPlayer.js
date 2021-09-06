import React, { useState } from "react";
import Plyr from "plyr-react";
import "../assets/plyr.css";

import DefiWhiteboard from "../assets/videos/defi-whiteboard.mp4";
import CardanoWhiteboard from "../assets/videos/cardano-whiteboard.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  const playerRotation = [
    {
      title: "What is Defi?",
      text: "Find out about the decentralized stock exchange of the future, native to web3. Why should you need a bank to get a loan?",
      src: DefiWhiteboard,
      provider: "html5",
    },
    {
      title: "What is Cardano?",
      text: "The operation system of the internet. Secure, scalable and interoperable proof-of-stake blockchain, with digital identity built in.",
      src: CardanoWhiteboard,
      provider: "html5",
    },
    {
      title: "Why web3?",
      text: "Becuase your entire digital life, personal data and financial information belongs to YOU, not them. Be your own digital custodian in an open source future.",
      src: DefiWhiteboard,
      provider: "html5",
    },
  ];

  const rndItem = {
    type: "video",
    sources: [
      playerRotation[Math.floor(Math.random() * playerRotation.length)],
    ],
  };

  const options = {
    clickToPlay: true,
    storage: { enabled: true, key: "plyr" },
  };

  return (
    <div className="flex flex-col max-w-sm fixed bottom-4 left-4 rounded-xl shadow-white items-center bg-darkblue-800">
      <div className="h-70 w-96 px-6 py-4">
        <div className="flex flex-1 pb-2">
          <div className="flex flex-col pb-2">
            <div className="font-semibold text-sm text-darkblue-100">
              {rndItem.sources[0].title}
            </div>
            <div className="font-normal text-xs text-darkblue-300">
              {rndItem.sources[0].text}
            </div>
          </div>
          <div className="top-0 cursor-pointer text-darkblue-300 hover:text-darkblue-600">
            <FontAwesomeIcon
              icon={isCollapsed ? faPlus : faMinus}
              title={
                isCollapsed ? "Expand News Player" : "Minimize News Player"
              }
              onClick={handleClick}
            />
          </div>
        </div>
        <div className={isCollapsed ? "hidden" : ""}>
          <Plyr source={rndItem} options={options} disabled={isCollapsed} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
