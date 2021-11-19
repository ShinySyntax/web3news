import React, { useState, useEffect } from "react";

import blockfrostService from "../../services/blockfrostService";

const NFTGallery = () => {
  const [assets, setAssets] = useState();

  useEffect(() => {
    const getAssets = async () => {
      const policyID = "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed";
      const data = await blockfrostService.assetsPolicyByIdAll(policyID);
      setAssets(data);
    };
    getAssets();
  }, []);

  return (
    <div className="flex h-48 my-4 rounded-lg bg-darkblue-900 w3n-hover">
      <div className="flex p-4 text-sm text-darkblue-400">
        <div>My NFTs (CIP-0027)</div>
      </div>
    </div>
  );
};

export default NFTGallery;
