import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchRepositories from "../utilities/fetchRepo";

const RepoList = () => {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");

  useEffect(() => {
    const getRepositories = async () => {
      const { repositories } = await fetchRepositories(currentPage);
      setRepositories(repositories);
    };
    getRepositories();
  }, [currentPage]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLanguageFilterChange = (event) => {
    setLanguageFilter(event.target.value);
  };

  const filteredRepositories = repositories.filter((repo) => {
    if (
      searchQuery &&
      !repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (languageFilter && repo.language !== languageFilter) {
      return false;
    }

    return true;
  });

  const nextPage = () => {
    if (currentPage < 6) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1)); //so the prev page can't go below 1
  };

  return (
    <div className="repo">
      <h1>GitHub Repositories</h1>

      <div>
        <input
          type="text"
          placeholder="Search repositories"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <select value={languageFilter} onChange={handleLanguageFilterChange}>
          <option value="">All Languages</option>
          <option value="HTML">HTML</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Vue">Vue</option>
        </select>
      </div>

      <p className="attention">
        *The search and filter are not fully working yet. Results from other
        pages don't show up immediately on the current page of the pagination.
        You'll need to click 'Next' to see all relevant results. I apologize for
        the inconvenience and am working to fix this soon. Thank you for your
        patience.*
      </p>

      <ul>
        {filteredRepositories.map((repo) => (
          <div className="btn-container">
            <Link to={`/repository/${repo.id}`} className="btn">
              {repo.name}
            </Link>
          </div>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} className="btn">
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage >= 6} className="btn">
          Next
        </button>
      </div>

      <Link to={`/test-error-page`} className="btn-error">
        Test Error Page
      </Link>
      <p className="attention">
        *The 404 page can be tested using any of the navigation links apart from
        Home i.e About, My Works, Contact since those URLs do not exist in this
        Application. Thanks*
      </p>
    </div>
  );
};

export default RepoList;
