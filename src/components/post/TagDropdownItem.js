import React, { useState, useEffect } from "react";

import btc from "../../assets/images/btc.png";
import eth from "../../assets/images/eth.png";
import ada from "../../assets/images/ada.png";
import dot from "../../assets/images/dot.png";

const TagDropdownItem = ({ id, name, icon }) => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (name === "Bitcoin") setImgSrc(btc);
    else if (name === "Ethereum") setImgSrc(eth);
    else if (name === "Cardano") setImgSrc(ada);
    else if (name === "Polkadot") setImgSrc(dot);
  }, [name]);

  return (
    <div className="cursor-pointer w-full border-darkblue-600 border-b hover:bg-darkblue-50 hover-transition">
      <div className="flex w-full items-center p-2 pl-10 border-transparent border-l-1 relative hover:border-darkblue-300">
        <div className="w-6 flex flex-col items-center">
          <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 mt-1 rounded-full">
            <img className="rounded-full" alt="A" src={imgSrc} />
          </div>
        </div>
        <div className="w-full items-center flex">
          <div className="mx-2 -mt-1 w-1/2 ">
            {name}
            <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
              CTO &amp; technical manager
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-darkblue-200 bg-darkblue-400">
              <div className="text-xs font-normal leading-none max-w-full flex-initial">
                HOT!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagDropdownItem;
