import { useEffect, useState } from "react";
import UserService from "../../services/userService";
import SidebarUserUpvoteItem from "./SidebarUserUpvoteItem";

const SidebarUserUpvoteList = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus("LOADING");
    UserService.getAll().then((data) => {
      setUsers(data);
      setStatus("SUCCESS");
    });
    return () => {
      //cleanup;
    };
  }, []);

  const userList = users.map((user, index) => {
    return <SidebarUserUpvoteItem key={user.userName} {...user} />;
  });
  return (
    <div className="">
      {status === "LOADING" ? <div className="">LOADING USERS...</div> : null}
      {users ? userList : null}
    </div>
  );
};

export default SidebarUserUpvoteList;
