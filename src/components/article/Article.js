import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

import { downvote, upvote } from "../../store/actions/upvote";
import Tag from "./Tag";
import SaveToReadingListIcon from "./SaveIcon";

const Article = ({
  id,
  title,
  url,
  description,
  createdAt,
  interactions,
  voteTotal,
  views,
  tag,
}) => {
  const user = useSelector((state) => state.authReducer);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [voteColor, setVoteColor] = useState("");
  const [votes, setVotes] = useState(voteTotal);
  const date = new Date(createdAt).toLocaleString();
  const dispatch = useDispatch();

  useEffect(() => {
    const userInteractions = interactions.find(
      (item) => item.userID === user.id
    );
    if (userInteractions)
      if (userInteractions.upvote) setUpvoted(userInteractions.upvote);
      else if (!userInteractions.upvote) setDownvoted(!userInteractions.upvote);
  }, [user, interactions]);

  useEffect(() => {
    if (upvoted) setVoteColor("vote-total-increase");
    else if (downvoted) setVoteColor("vote-total-decrease");

    setTimeout(() => {
      setVoteColor("");
    }, 5000);
  }, [votes, upvoted, downvoted]);

  const onUpvote = (e) => {
    if (user && user?.isLoggedIn) {
      if (!upvoted) {
        dispatch(upvote({ articleID: id, userID: user.id, upvote: true }))
          .then((res) => {
            setUpvoted(true);
            setDownvoted(false);
            setVotes(votes + 1);
            toast.success("TO THE MOON! 🚀");
          })
          .catch((err) => {
            toast.error(
              "Upvoted failed. Please ensure that you are logged in!"
            );
          });
      }
    } else toast.error("Not logged in. Please login to vote on articles.");
  };

  const onDownvote = (e) => {
    if (user && user?.isLoggedIn) {
      if (!downvoted) {
        dispatch(downvote({ articleID: id, userID: user.id, upvote: false }))
          .then((res) => {
            setDownvoted(true);
            setUpvoted(false);
            setVotes(votes - 1);
            toast.error("DUMP IT! 💩");
          })
          .catch((err) => {
            toast.error(
              "Downvoted failed. Please ensure that you are logged in!"
            );
          });
      }
    } else toast.error("Not logged in. Please login to vote on articles.");
  };

  const getVoteIcons = () => {
    return (
      <div
        className="flex"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="text-center mr-3 border-r-2 pr-3 text-2xl justify-self-center">
          <p className={`mt-4 ${voteColor}`}>{votes}</p>
        </div>
        <div className="">
          <span className="icon article-vote">
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              size="2x"
              className={upvoted ? "text-darkblue-100" : "cursor-pointer"}
              onClick={onUpvote}
            />
          </span>
          <span className="icon article-vote">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              size="2x"
              className={downvoted ? "text-darkblue-100" : "cursor-pointer"}
              onClick={onDownvote}
            />
          </span>
        </div>
      </div>
    );
  };

  const saveToReadingList = () => {
    console.log("Saved article to reading list~");
  };

  return (
    <div
      className="m-4 px-5 py-3 rounded-lg bg-darkblue-900"
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
    >
      <header
        className=""
        data-aos="fade-in"
        data-aos-offset="400"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="flex justify-between">
          <p className="font-semibold text-darkblue-200">{title}</p>
          <SaveToReadingListIcon callback={saveToReadingList} />
        </div>
        <div className="flex text-darkblue-500 text-sm">
          <p className="flex mx-2">{date}</p>
          <p className="ml-2">
            <FontAwesomeIcon className="mr-2" icon={faEye} size="1x" />
            {`${views} total views`}
          </p>
        </div>
      </header>

      <div
        className="flex"
        data-aos="fade-in"
        data-aos-offset="400"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="pl-8 py-4 text-sm">{description}</p>
        <div className="mx-4 self-center">{getVoteIcons()}</div>
      </div>

      <footer className="flex justify-between border-t border-darkblue-700 pt-2">
        <div className="relative inset-0 rounded-full bg-gray-200">
          <Tag {...tag} />
        </div>
        <button
          className="flex self-end text-darkblue-900 p-2 m-1 rounded bg-darkblue-300 hover:bg-darkblue-700 hover:text-darkblue-300"
          onClick={() => (window.location = url)}
        >
          READ MORE
        </button>
      </footer>
    </div>
  );
};

export default Article;
