import { useState } from "react";
import upvoteIcon from "../assets/bxs--upvote.svg";
import downvoteIcon from "../assets/bxs--downvote.svg";
import propTypes from "prop-types";

export default function VotesContainer({ votes, userVote }) {
  const [vote, setVote] = useState(userVote);

  let totalVotes = 0;
  for (let i = 0; i < votes.length; i++) {
    totalVotes += votes[i].value;
  }
  VotesContainer.propTypes = {
    votes: propTypes.array,
    userVote: propTypes.bool,
  };
  return (
    <div className="votesContainer">
      <button>
        <img
          src={upvoteIcon}
          alt="upvote icon"
          title="Upvote"
          className={`${vote === true ? "selectedVote" : "unselectedVote"}`}
        />
      </button>
      <p>{totalVotes}</p>
      <button>
        <img
          src={downvoteIcon}
          alt="downvote icon"
          title="Downvote"
          className={`${vote === false ? "selectedVote" : "unselectedVote"}`}
        />
      </button>
    </div>
  );
}
