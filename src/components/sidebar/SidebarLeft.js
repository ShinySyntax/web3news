import SidebarUserUpvoteList from "./SidebarUserUpvoteList";

const SidebarLeft = () => {
  return (
    <div className="flex flex-col my-14 ml-8 p-4 w-full overflow-y-hidden h-full rounded-lg bg-darkblue-900 text-darkblue-400 aos-init aos-animate">
      <div className="px-4">
        <span className="font-bold mb-2">Most Upvoted - Last 24hrs</span>
        <SidebarUserUpvoteList />
      </div>
    </div>
  );
};

export default SidebarLeft;
