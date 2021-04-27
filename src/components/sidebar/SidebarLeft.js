import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const SidebarLeft = ({ ...props }) => {

    const auth = useSelector((state) => state.authReducer);

    return (
        <div className="flex flex-col my-14 ml-8 p-4 w-full overflow-y-hidden h-full rounded-lg bg-darkblue-900 text-darkblue-400 aos-init aos-animate">
            <div className="px-4">
                <span className="font-bold border-darkblue-400 border-b mb-2">Most Upvoted - Last 24hrs</span>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
                <p className="font-normal">{auth.user.userName} -- 66,456</p>
            </div>
        </div>
    );
}

export default SidebarLeft;