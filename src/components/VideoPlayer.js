import React, { useState, useEffect } from "react";
import Plyr from "plyr-react";
import "../assets/plyr.css";

import DefiWhiteboard from "../assets/videos/defi-whiteboard.mp4";
import CardanoWhiteboard from "../assets/videos/cardano-whiteboard.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = () => {
  const [isCollapsed, setIsCollapsed] = useState(loadFromLocalStorage() || false);
  const [video, setVideo] = useState(null);
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const playerRotation = [
      {
        title: "What is Defi?",
        text: "Find out about the decentralized stock exchange of the future, native to web3. Why should you need a bank to get a loan?",
        src: DefiWhiteboard,
        provider: "html5",
      },
      {
        title: "What is Cardano?",
        text: "The financial operating system of the internet. Secure, scalable and interoperable proof-of-stake blockchain, with digital identity built in.",
        src: CardanoWhiteboard,
        provider: "html5",
      },
      {
        title: "Why web3?",
        text: "Because your entire digital life, personal data and financial information belongs to YOU, not them. Be your own digital custodian in an open source future.",
        src: DefiWhiteboard,
        provider: "html5",
      },
    ];

    const rndItem = {
      type: "video",
      sources: [playerRotation[Math.floor(Math.random() * playerRotation.length)]],
    };

    setVideo(rndItem);
  }, []);

  useEffect(() => {
    saveToLocalStorage({ isCollapsed: isCollapsed });
  }, [isCollapsed]);
  const options = {
    clickToPlay: true,
    storage: { enabled: true, key: "plyr" },
  };

  return (
    <>
      {video ? (
        <div className="flex flex-col max-w-sm fixed bottom-4 left-4 rounded-xl shadow-white w3n-hover items-center bg-darkblue-800">
          <div className="h-70 w-80 px-6 py-4">
            <div className="flex flex-1 pb-2">
              <div className="flex flex-col">
                <div className="font-semibold text-sm text-darkblue-100">
                  {video.sources[0].title}
                </div>
                <div className="font-normal text-xs text-darkblue-300">{video.sources[0].text}</div>
              </div>
              <div className="top-0 cursor-pointer text-darkblue-300 hover:text-darkblue-600">
                <FontAwesomeIcon
                  icon={isCollapsed ? faPlus : faMinus}
                  title={isCollapsed ? "Expand News Player" : "Minimize News Player"}
                  onClick={handleClick}
                />
              </div>
            </div>
            <div className={isCollapsed ? "hidden" : ""}>
              <Plyr source={video} options={options} disabled={isCollapsed} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("web3news-prefs");
    if (serializedState === null) return null;
    else return JSON.parse(serializedState)?.isCollapsed || false;
  } catch (e) {
    console.warn(e);
    return null;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("web3news-prefs", serializedState);
  } catch (e) {
    console.warn(e);
  }
};

export default VideoPlayer;
