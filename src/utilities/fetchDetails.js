import axios from 'axios';

const fetchRepositoryDetails = async (id) => {
  try {
    const response = await axios.get(`https://api.github.com/repositories/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repository details:', error);
    return null;
  }
};

export default fetchRepositoryDetails;