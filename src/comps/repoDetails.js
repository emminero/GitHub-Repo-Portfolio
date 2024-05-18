import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchRepositoryDetails from "../utilities/fetchDetails";
import { Link } from "react-router-dom";

const RepoDetails = () => {
  const { id } = useParams();
  const [repository, setRepository] = useState("");

  useEffect(() => {
    const getRepositoryDetails = async () => {
      try {
        const repoDetails = await fetchRepositoryDetails(id);
        setRepository(repoDetails);
      } catch (error) {
        console.error("Error fetching repository details:", error);
      }
    };
    getRepositoryDetails();
  }, [id]);

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div className="repo-details">
      <div>
        <img
          alt="profile_pic"
          src={repository.owner.avatar_url}
          className="repo-img"
        />
      </div>

      <h2>{repository.name}</h2>
      <p>
        <span>Description:</span> {repository.description}
      </p>
      <p>
        <span>Owner's username:</span> {repository.owner.login}
      </p>
      <p>
        <span>Number of forks:</span> {repository.forks_count}
      </p>
      <p>
        <span>URL:</span>{" "}
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          {repository.html_url}
        </a>
      </p>
      <p>
        <span>Stars:</span> {repository.stargazers_count}
      </p>

      <Link
        to="/"
        className="btn"
        style={{
          backgroundColor: "#ce7406",
          display: "block",
          width: "150px",
          margin: "20px auto",
          textDecoration: "none"
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default RepoDetails;
