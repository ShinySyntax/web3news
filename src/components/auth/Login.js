import { React } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import toast from "react-hot-toast";
import { faTimesCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

// import { login } from "../../store/actions/auth";
import CardanoLogo from "../../assets/images/cardano.svg";
import w3news from "../../assets/images/w3news-office.jpg";
import NamiLogo from "../../assets/images/nami.svg";
import CCVaultLogo from "../../assets/images/ccvault.png";
import GeroWalletLogo from "../../assets/images/gero.ico";
import FlintLogo from "../../assets/images/flint.svg";

const Login = ({ setShowModal }) => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const closeLogin = () => {
    setShowModal(false);
  };

  // const connectWallet = (e) => {
  //    e.preventDefault();
  //   // dispatch(
  //     login({ email, password }, history))
  //     .then(() => {
  //       toast.success("Welcome back to web3 🚀🚀🚀");
  //       closeLogin();
  //     })
  //     .catch((message) => {
  //       toast.error(`${message} 💩`);
  //     });
  // };

  return (
    <div className="flex flex-row max-w-2xl bg-darkblue-900 rounded-xl shadow w3n-hover">
      <div className="w-72 hidden md:flex">
        <img src={w3news} alt="Web3News" className="rounded-tl-lg rounded-bl-lg" />
      </div>
      <div className="w-96 text-center p-5 justify-center text-darkblue-400">
        <div className="flex justify-between ml-40 mb-2">
          <div className="self-center items-center animate-spin-slow">
            <img src={CardanoLogo} alt="Cardano" height="36px" width="36px" />
          </div>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="2x"
            onClick={closeLogin}
            className="cursor-pointer text-darkblue-700 hover:text-darkblue-50"
          />
        </div>
        <h1 className="font-semibold text-xl text-center text-darkblue-100">Connect Your Wallet</h1>
        <h3 className="m-2 font-semibold text-xs">
          The web was made for you, it's time to take it back.
        </h3>
        <div className="flex flex-col mb-8 px-4">
          <div className="relative">
            <button class="p-5 my-2 min-w-full text-left text-sm md:text-normal hover-transition rounded-xl  text-darkblue-900  bg-darkblue-300 hover:bg-darkblue-900 hover:text-darkblue-300 focus:outline-none button-shadow">
              CCVault
            </button>
            <img
              src={CCVaultLogo}
              alt="CCvault.io Wallet"
              height="30px"
              width="30px"
              className="absolute inset-y-6 right-6"
            />
          </div>
          <div className="relative">
            <button class="p-5 my-2 min-w-full text-left text-sm md:text-normal cursor-not-allowed hover-transition rounded-xl  text-darkblue-900  bg-darkblue-300 hover:bg-darkblue-900 hover:text-darkblue-300 focus:outline-none button-shadow">
              Gero Wallet
            </button>
            <img
              src={GeroWalletLogo}
              alt="Gero Wallet Logo"
              height="30px"
              width="30px"
              className="absolute inset-y-6 right-6"
            />
          </div>
          <div className="relative">
            <button class="p-5 my-2 min-w-full text-left text-sm md:text-normal hover-transition rounded-xl  text-darkblue-900  bg-darkblue-300 hover:bg-darkblue-900 hover:text-darkblue-300 focus:outline-none button-shadow">
              Nami
            </button>
            <img
              src={NamiLogo}
              alt="Nami Wallet"
              height="30px"
              width="30px"
              className="absolute inset-y-6 right-6"
            />
          </div>
          <div className="relative">
            <button class="p-5 my-2 min-w-full text-left text-sm md:text-normal cursor-not-allowed hover-transition rounded-xl  text-darkblue-900  bg-darkblue-300 hover:bg-darkblue-900 hover:text-darkblue-300 focus:outline-none button-shadow">
              Flint
            </button>
            <img
              src={FlintLogo}
              alt="Flint Wallet"
              height="30px"
              width="30px"
              className="absolute inset-y-6 right-6"
            />
          </div>
        </div>
        <div className="flex mb-4 text-xs justify-self-center">
          <FontAwesomeIcon icon={faExclamationCircle} className="absolute" />
          <div>Many features will not be available if you don't connect a wallet.</div>
        </div>
        <div className="flex flex-col text-xs">
          Don't have one?
          <a
            className="text-darkblue-200 font-semibold"
            href="https://www.youtube.com/watch?v=qtV7Ye9hF2k"
            target="_blank"
            rel="noreferrer"
          >
            We recommend CCVault
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
