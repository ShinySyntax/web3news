import React from "react";
import btc from "../../assets/images/btc.png";
import eth from "../../assets/images/eth.png";
import ada from "../../assets/images/ada.png";
import dot from "../../assets/images/dot.png";

const Tag = ({ id, name, icon }) => {
  let imgSrc = "";
  if (name === "Bitcoin") imgSrc = btc;
  else if (name === "Ethereum") imgSrc = eth;
  else if (name === "Cardano") imgSrc = ada;
  else if (name === "Polkadot") imgSrc = dot;

  return (
    <div className="hover-transition rounded-full flex p-2 bg-darkblue-300 cursor-pointer hover:bg-darkblue-700 hover:text-darkblue-300">
      {imgSrc ? <img src={imgSrc} alt={name} className="px-2"></img> : null}
      <button id={id} className="pr-2">
        {name}
      </button>
    </div>
  );
};

export default Tag;
