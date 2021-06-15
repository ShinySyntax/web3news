const SidebarUserUpvoteItem = ({
  userName,
  email,
  role,
  createdAt,
  interactions,
}) => {
  return (
    <div className="m-2 px-2 py-1 bg-darkblue-700 rounded-md text-sm hover:shadow-md cursor-pointer hover:bg-darkblue-700">
      <p className="font-semibold">{userName}</p>
      <p>
        {email} {role}
      </p>
      <p>Votes: {interactions}</p>
    </div>
  );
};

export default SidebarUserUpvoteItem;
