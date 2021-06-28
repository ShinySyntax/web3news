import React, { useEffect, useState } from "react";
import { getAllTags } from "../../store/actions/tag";
import TagDropdownItem from "./TagDropdownItem";

const TagDropdown = ({ callback }) => {
  const [tags, setTags] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [activeClass, setActiveClass] = useState("");
  const [chevron, setChevron] = useState("feather-chevron-down");
  const handleSetDropdown = () => {
    setDropdown(!dropdown);
    if (dropdown) {
      setActiveClass("");
      setChevron("feather-chevron-up");
    } else {
      setActiveClass("hidden");
      setChevron("feather-chevron-down");
    }
  };

  useEffect(() => {
    const getTags = async () => {
      const tagList = await getAllTags();
      setTags(tagList);
    };
    getTags();
  }, []);

  const generateTags = () => {
    return tags.map((item) => {
      return <TagDropdownItem key={item.id} {...item} />;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center h-64">
        <div className="w-full px-4">
          <div className="flex flex-col items-center relative">
            <div className="w-full">
              <div className="my-2 p-1 bg-white flex borderrounded">
                <div className="flex flex-auto flex-wrap">
                  <input
                    placeholder="Choose the applicable tag for this content"
                    className="pborder-1 rounded p-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  />
                </div>

                <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                  <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`feather ${chevron} w-4 h-4`}
                      onClick={handleSetDropdown}
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`relative shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto overflow-x-hidden ${activeClass}`}
            >
              <div className="flex flex-col w-full max-h-40">
                {tags ? generateTags() : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagDropdown;
