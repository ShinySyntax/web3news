import React from "react";
import btc from "../../assets/images/btc.png";
import eth from "../../assets/images/eth.png";
import ada from "../../assets/images/ada.png";

const Tag = ({ id, name, icon }) => {
  let imgSrc = "";
  if (name === "Bitcoin") imgSrc = btc;
  else if (name === "Ethereum") imgSrc = eth;
  else if (name === "Cardano") imgSrc = ada;

  return (
    <div className="rounded-full border-2 flex p-2 bg-darkblue-300">
      {imgSrc ? <img src={imgSrc} alt={name} className="px-2"></img> : null}
      <button id={id} className="pr-2 cursor-pointer hover:text-darkblue-900">
        {name}
      </button>
    </div>
  );
};

export default Tag;
