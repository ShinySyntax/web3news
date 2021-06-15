import React from "react";

const NotFound = ({ history }) => {
  return (
    <div className="min-w-screen h-screen flex justify-center items-center">
      <h1 className="">404 PAGE NOT FOUND.</h1>
      <p className="">
        It looks like nothing was found at this location. Maybe try one of the
        links in the menu or press back to go to the previous page.
      </p>
    </div>
  );
};

export default NotFound;
