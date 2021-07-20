import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

const SidebarUserUpvoteItem = ({
  userName,
  email,
  role,
  createdAt,
  _count,
}) => {
  return (
    <div className="flex m-2 py-2 px-4 bg-darkblue-700 rounded-md text-xs cursor-pointer hover:bg-darkblue-200 hover-transition">
      <div className="flex-col w-48">
        <p className="font-semibold">{userName}</p>
        <p>{email}</p>
        <p>Votes: {_count.interactions}</p>
      </div>
      <FontAwesomeIcon className="flex-grow" size="2x" icon={faIdCard} />
    </div>
  );
};

export default SidebarUserUpvoteItem;
