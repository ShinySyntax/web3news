import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import PostItem from "./PostItem";
import { listAll } from "../../store/actions/post";

const PostList = () => {
  const auth = useSelector((state) => state.authReducer);
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await toast.promise(dispatch(listAll()), {
        loading: "Loading posts...",
        success: "Top posts from the last week loaded",
        error: "Error when fetching posts. Please reload the app!",
      });
    };
    fetchData();
  }, [dispatch]); // Empty array runs on inital render ONLY.

  if (posts && posts.length > 0) {
    const renderedResults = posts.map((item) => {
      return <PostItem key={item.id} id={item.id} />;
    });

    return <div className="my-6">{renderedResults}</div>;
  } else {
    return (
      <div className="my-6">
        <h1 className="flex justify-center">
          Welcome, {auth.isLoggedIn ? `${auth.user.userName}` : "Guest"}. Here
          is what is currently trending around the web3 world.
        </h1>
        No current posts to render!
      </div>
    );
  }
};

export default PostList;
