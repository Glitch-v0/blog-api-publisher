import { useState, useEffect } from "react";
import upvoteIcon from "../assets/bxs--upvote.svg";
import downvoteIcon from "../assets/bxs--downvote.svg";
import propTypes from "prop-types";

export default function VotesContainer({ votes, userVote }) {
  const [totalVotes, setTotalVotes] = useState(null);
  const [vote, setVote] = useState(userVote);

  VotesContainer.propTypes = {
    votes: propTypes.array,
    userVote: propTypes.bool,
  };

  // Calculate total votes
  useEffect(() => {
    const initialTotal = votes.reduce((sum, vote) => sum + vote.value, 0);
    setTotalVotes(initialTotal);
  }, [votes]);

  const handleVote = (upOrDown) => {
    if (vote === upOrDown) {
      // Undo current vote
      setVote(null);
      upOrDown ? setTotalVotes(totalVotes - 1) : setTotalVotes(totalVotes + 1);
    } else if (vote == null) {
      // New vote (upvote or downvote)
      setVote(upOrDown);
      upOrDown ? setTotalVotes(totalVotes + 1) : setTotalVotes(totalVotes - 1);
    } else {
      // Change from upvote to downvote or vice versa
      setVote(upOrDown);
      upOrDown ? setTotalVotes(totalVotes + 2) : setTotalVotes(totalVotes - 2);
    }
  };

  return (
    <div className="votesContainer">
      <button className="upvoteButton" onClick={() => handleVote(true)}>
        <img
          src={upvoteIcon}
          alt="upvote icon"
          title="Upvote"
          className={`${vote === true ? "selectedVote" : "unselectedVote"}`}
        />
      </button>
      <p>{totalVotes}</p>
      <button className="downvoteButton" onClick={() => handleVote(false)}>
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
