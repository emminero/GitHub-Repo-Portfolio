import axios from 'axios';


const accessToken = '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';

const fetchRepositories = async (page = 1, perPage = 1) => {
  try {
    const response = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${accessToken}`,
      },
      params: {
        page,
        per_page: perPage,
      },
    });

    return {repositories: response.data};
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

export default fetchRepositories;
