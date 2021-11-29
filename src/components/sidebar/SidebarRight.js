import EpochStats from "./EpochStats";
import NFTGallery from "./NFTGallery";
import ProjectCatalyst from "./ProjectCatalyst.js";

const SidebarRight = () => {
  return (
    <div className="flex-col my-10 px-4 w-full hidden xl:block overflow-y-hidden">
      <EpochStats />
      <NFTGallery />
      <ProjectCatalyst />
    </div>
  );
};

export default SidebarRight;
