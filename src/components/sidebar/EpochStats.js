import { useState, useEffect } from "react";
import ProgressBar from "react-customizable-progressbar";

import ada from "../../assets/images/ada.png";
import blockfrostService from "../../services/blockfrostService";

const EpochStats = () => {
  const [epochData, setEpochData] = useState();
  const [epochOutput, setEpochOutput] = useState();
  const [txCount, setTxCount] = useState();
  const [epochFees, setEpochFees] = useState();
  const [epochRemaining, setEpochRemaining] = useState();
  const [epochTPS, setEpochTPS] = useState();

  useEffect(() => {
    const getEpoch = async () => {
      const latest = await blockfrostService.epochsLatest();
      const output = Number(Number(latest?.output / 1000000).toFixed(0)).toLocaleString();
      const tx = Number(latest?.tx_count).toLocaleString();
      const fees = Number(Number(latest?.fees / 1000000).toFixed(0)).toLocaleString();
      setEpochData(latest);
      setEpochOutput(output);
      setTxCount(tx);
      setEpochFees(fees);
      const block = await blockfrostService.blocksLatest();
      const epochSlot = Number(block?.epoch_slot / 432000).toPrecision(3) * 100;
      const epochStr = epochSlot.toLocaleString().split(0, 5)?.[0];
      const tps = latest?.tx_count
        ? Number(Number(latest?.tx_count) / block?.epoch_slot).toPrecision(2)
        : 0;
      const tpsStr = ` - ${tps}/s`;
      setEpochRemaining(epochStr);
      setEpochTPS(tpsStr);
    };

    getEpoch();
  }, []);

  return (
    <div className="rounded-lg bg-darkblue-900 w3n-hover">
      <ProgressBar
        radius={100}
        progress={epochRemaining}
        strokeWidth={5}
        strokeColor="#31b9ff"
        strokeLinecap="round"
        trackStrokeColor="#94a3b8"
        trackStrokeWidth={1}
        trackStrokeLinecap="butt"
        pointerRadius={10}
        pointerFillColor="#31b9ff"
        pointerStrokeColor="#31b9ff"
        pointerStrokeWidth={1}
        initialAnimation
        initialAnimationDelay={500}
        transition="1.5s ease 0.5s"
        trackTransition="0s ease"
        cut={120}
        rotate={-210}
        className="flex mx-auto px-2 text-center relative h-48 text-xs"
      >
        <div className="flex flex-col absolute top-8 left-14 mx-1 text-darkblue-400 animated fade-in">
          <img src={ada} alt="Cardano" height={32} width={32} className="flex self-center"></img>
          <div className="font-bold">{epochData?.epoch}</div>
          <div className="font-bold text-lg text-darkblue-50">{epochRemaining} %</div>
          <div>{epochOutput} ₳ </div>
          <div>
            {txCount} TXs {epochTPS}
          </div>
          <div>{epochFees} ₳ fees</div>
        </div>
      </ProgressBar>
    </div>
  );
};

export default EpochStats;
