import React from "react";
import { useSelector } from "react-redux";

const UserAvatar = () => {
  const auth = useSelector((state) => state.authReducer);

  return (
    <div class="flex justify-center items-center">
      <div class="relative">
        <div class="flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full">
          <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
        </div>

        <div class="absolute bottom-0 right-0 w-4 h-4 mr-1 rounded-full bg-green-500 border-2 border-white"></div>
      </div>

      <div class="relative">
        <div class="flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full">
          <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
        </div>

        <div class="absolute bottom-0 right-0 w-4 h-4 mr-1 rounded-full bg-blue-500 border-2 border-white"></div>
      </div>

      <div class="relative">
        <div class="flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full">
          <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
        </div>

        <div class="absolute bottom-0 right-0 w-4 h-4 mr-1 rounded-full bg-yellow-500 border-2 border-white"></div>
      </div>

      <div class="relative">
        <div class="flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full">
          <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
        </div>

        <div class="absolute bottom-0 right-0 w-4 h-4 mr-1 rounded-full bg-red-500 border-2 border-white"></div>
      </div>
    </div>
  );
};

export default UserAvatar;
