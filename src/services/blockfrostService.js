import API from "./api";

const blockfrostService = {
  blocksLatest: () => {
    return API.get("/blockfrost/blocksLatest")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  epochsLatest: () => {
    return API.get("/blockfrost/epochsLatest")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  addresses: (data) => {
    return API.get("/blockfrost/addresses")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  assetsPolicyByIdAll: (data) => {
    return API.get("/blockfrost/assetsPolicyByIdAll")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  accountsAddressesAssets: (data) => {
    return API.get("/blockfrost/accountsAddressesAssets")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  health: (data) => {
    return API.get("/health")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default blockfrostService;
