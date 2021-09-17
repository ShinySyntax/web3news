import SidebarUserUpvoteList from "./SidebarUserUpvoteList";

const SidebarLeft = () => {
  return (
    <div className="flex-col my-10 ml-8 p-4 w-1/4 hidden lg:block rounded-lg bg-darkblue-900 text-darkblue-400">
      <div className="px-4">
        <span className="font-bold mb-2">Most Upvoted - Last 24hrs</span>
        <SidebarUserUpvoteList />
      </div>
    </div>
  );
};

export default SidebarLeft;
