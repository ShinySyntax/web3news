import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SaveToReadingListIcon = ({ callback }) => {
  return (
    <div className="">
      <FontAwesomeIcon
        icon={faClipboardList}
        size="1x"
        className="text-darkblue-300 hover:text-darkblue-700 cursor-pointer w-1/12"
      />
      <button onClick={callback()}></button>
    </div>
  );
};

export default SaveToReadingListIcon;
