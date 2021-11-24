import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import blockfrostService from "../../services/blockfrostService";

const NFTGallery = () => {
  const [assets, setAssets] = useState();
  // const infuraBase = "https://infura-ipfs.io/ipfs/";
  // const blockfrostBase = "https://ipfs.blockfrost.dev/ipfs/";

  useEffect(() => {
    const getAssets = async () => {
      const stakeAddress = "stake1uxsmeghleacrwvyxqwqc4ddmhylulksd2yzxqjq2udy924q5mufzu";
      const data = await blockfrostService.accountsAddressesAssets(stakeAddress);
      const sortedAssets = data.sort((a, b) => a - b);
      setAssets(sortedAssets);
    };
    getAssets();
  }, []);

  const renderedAssets = () => {
    return assets.map((asset) => {
      const ipfsURL =
        typeof asset?.onchain_metadata?.image === "string"
          ? `https://ipfs.blockfrost.dev/ipfs/${
              asset?.onchain_metadata?.image?.split("ipfs://")[1]
            }`
          : "";
      let name = asset?.onchain_metadata?.name || asset?.onchain_metadata?.Name;
      let quantity;

      if (
        !name &&
        asset?.policy_id === "a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235"
      ) {
        name = "HOSKY";
        quantity = Number(asset?.quantity / 100000);
      }

      return (
        <div
          key={asset?.asset_name}
          className="m-2 p-2 w-36 rounded-lg cursor-pointer w3n-hover hover:opacity-75"
        >
          {quantity > 1 ? (
            <div className="mt-24">
              <div className="text-center pt-2 font-bold">{quantity.toLocaleString()}</div>
              <div className="text-center font-bold">{name}</div>
            </div>
          ) : (
            <>
              <img
                src={ipfsURL}
                alt="View Asset"
                height={96}
                width={96}
                className="mx-auto rounded-xl"
              />
              <div className="text-center pt-2 font-bold">{name}</div>
            </>
          )}
        </div>
      );
    });
  };

  const showLoader = () => {
    return <Loader type="Bars" color="#31b9ff" height={60} width={60} className="mx-auto" />;
  };

  return (
    <div className="flex h-72 my-4 overflow-scroll rounded-lg bg-darkblue-900 w3n-hover">
      <div className="p-4 text-xs text-darkblue-400">
        <div className="text-normal font-semibold">My NFTs</div>
        <div className="flex flex-wrap"> {assets ? renderedAssets() : showLoader()}</div>
      </div>
    </div>
  );
};

export default NFTGallery;
