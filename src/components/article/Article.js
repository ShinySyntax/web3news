import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { downvote, upvote } from "../../store/actions/upvote";

const Article = ({
  id,
  title,
  url,
  description,
  createdAt,
  interactions,
  voteTotal,
}) => {
  const auth = useSelector((state) => state.authReducer);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [voteColor, setVoteColor] = useState("");
  const [votes, setVotes] = useState(voteTotal);
  const date = new Date(createdAt).toLocaleString();
  const dispatch = useDispatch();

  useEffect(() => {
    const userInteractions = interactions.find((item) => item.userID === auth.user.id);
    if (userInteractions)
      if (userInteractions.upvote) setUpvoted(userInteractions.upvote);
      else if (!userInteractions.upvote) setDownvoted(!userInteractions.upvote);
  }, [auth]);

  const onUpvote = (e) => {
    if (auth && auth?.isLoggedIn) {
      if (!upvoted) {
        dispatch(upvote({ articleID: id, userID: auth.user.id, upvote: true }))
          .then((res) => {
            setUpvoted(true);
            setDownvoted(false);
            setVotes(votes + 1);
            toast.success("Successfully Upvoted!");
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
    if (auth && auth?.isLoggedIn) {
      if (!downvoted) {
        dispatch(
          downvote({ articleID: id, userID: auth.user.id, upvote: false })
        )
          .then((res) => {
            setDownvoted(true);
            setUpvoted(false);
            setVotes(votes - 1);
            toast.success("Successfully Downvoted!");
          })
          .catch((err) => {
            toast.error(
              "Downvoted failed. Please ensure that you are logged in!"
            );
          });
      }
    } else toast.error("Not logged in. Please login to vote on articles.");
  };

  useEffect(
    (e) => {
      console.log(e);
    },
    [upvote, downvote]
  );

  const getVoteIcons = () => {
    return (
      <div
        className="columns is-multiline"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        {
          <div className="column is-half is-size-4 has-text-weight-bold has-text-centered article-vote-total">
            {votes}
          </div>
        }
        <div className="column is-half">
          <span className="clickable icon article-vote">
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              size="2x"
              className={upvoted ? "has-text-info" : "has-text-grey-dark"}
              onClick={onUpvote}
            />
          </span>
          <span className="clickable icon article-vote">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              size="2x"
              className={downvoted ? "has-text-danger" : "has-text-grey-dark"}
              onClick={onDownvote}
            />
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className="card article"
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
        className="card-header"
        data-aos="fade-in"
        data-aos-offset="400"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="card-header-title is-5">{title}</p>
        <p className="card-header-date subtitle is-7">{date}</p>
      </header>

      <div
        className="card-content columns"
        data-aos="fade-in"
        data-aos-offset="400"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="column is-11">
          <p className="is-size-7">{description}</p>
        </div>
        <div className="column">{getVoteIcons()}</div>
      </div>

      <footer className="card-footer columns">
        <div className="column is-10"></div>
        <div className="column is-2">
          <button
            className="button is-info"
            onClick={() => (window.location = url)}
          >
            READ MORE
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Article;
