import React, { useEffect, useState } from "react";

import blockfrostService from "../../services/blockfrostService";

const NFTGallery = () => {
  const [assets, setAssets] = useState();

  useEffect(() => {
    const getAssets = async () => {
      const stakeAddress = "stake1uxzcunv4q3guhk3n6935dsmm8p24fm406p8npy2l229m73sjutlxv";
      const data = await blockfrostService.accountsAddressesAssets(stakeAddress);
      setAssets(data);
    };
    getAssets();
  }, []);

  const renderedAssets = () => {
    return assets.map((asset) => {
      return (
        <div
          key={asset?.asset_name}
          className="h-30 w-30 rounded-lg bg-darkblue-800 hover:opacity-75"
        >
          <img
            src={asset.onchain_metadata?.image}
            alt={asset?.onchain_metadata?.name}
            className="cursor-pointer"
          />
          {asset?.onchain_metadata?.name}
        </div>
      );
    });
  };

  return (
    <div className="flex h-48 my-4 overflow-scroll rounded-lg bg-darkblue-900 w3n-hover">
      <div className="flex flex-col p-4 text-xs text-darkblue-400">
        <div className="pb-1 text-normal font-semibold">My NFTs</div>
        <div> {assets ? renderedAssets() : null}</div>
      </div>
    </div>
  );
};

export default NFTGallery;
