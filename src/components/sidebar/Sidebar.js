import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Sidebar = ({ ...props }) => {

    const auth = useSelector((state) => state.authReducer);
    
    return <div className="tile is-ancestor">{auth.user.userName}</div>;

}

export default Sidebar;