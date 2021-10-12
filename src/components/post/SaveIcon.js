import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isBrowser } from "react-device-detect";

const SaveToReadingListIcon = ({ callback }) => {
  return (
    <div className="">
      <FontAwesomeIcon
        icon={faBookmark}
        size={isBrowser ? "2x" : "1x"}
        className="hover-transition text-darkblue-300 hover:text-darkblue-700 cursor-pointer w-1/12"
      />
      <button onClick={callback}></button>
    </div>
  );
};

export default SaveToReadingListIcon;
