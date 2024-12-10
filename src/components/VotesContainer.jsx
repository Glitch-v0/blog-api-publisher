import { useState, useEffect } from "react";
import upvoteIcon from "../assets/bxs--upvote.svg";
import downvoteIcon from "../assets/bxs--downvote.svg";
import propTypes from "prop-types";
import { voteComment } from "../utils/commentMethods";

export default function VotesContainer({ votes, userVote, commentId }) {
  const [totalVotes, setTotalVotes] = useState(null);
  const [vote, setVote] = useState(userVote);
  const [voteError, setVoteError] = useState(null);

  VotesContainer.propTypes = {
    votes: propTypes.array,
    userVote: propTypes.bool,
    commentId: propTypes.string,
  };

  // Calculate total votes
  useEffect(() => {
    const initialTotal = votes.reduce((sum, vote) => sum + vote.value, 0);
    setTotalVotes(initialTotal);
  }, [votes]);

  const handleVote = async (upOrDown) => {
    try {
      setVoteError(null);
      if (vote === upOrDown) {
        // Undo current vote
        await voteComment(commentId, null, "delete")
          .then(() => {
            setVote(null);
          })
          .then(() => {
            setTotalVotes(totalVotes - (upOrDown ? 1 : -1));
          });
      } else if (vote == null) {
        // New vote (upvote or downvote)
        await voteComment(commentId, upOrDown, "post")
          .then(() => {
            setVote(upOrDown);
          })
          .then(() => {
            setTotalVotes(totalVotes + (upOrDown ? 1 : -1));
          });
      } else {
        // Change from upvote to downvote or vice versa
        await voteComment(commentId, upOrDown, "put")
          .then(() => {
            setVote(upOrDown);
          })
          .then(() => {
            setTotalVotes(totalVotes + (upOrDown ? 2 : -2));
          });
      }
    } catch (error) {
      setVoteError(error);
    }
  };

  return (
    <div>
      {voteError ? <h2 className="error">Error: {voteError.message}</h2> : null}
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
    </div>
  );
}
