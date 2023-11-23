import axios from 'axios';

const BASE_URL = 'https://www.reddit.com/r';

export const getPosts = async (Search, sorting) => {
  const url = `${BASE_URL}/${Search}/${sorting}.json`;
  try {
    const response = await axios.get(url);
    return response.data.data.children.map(post => post.data);
  } catch (error) {
    console.error('Reddit API Error:', error);
    throw error;
  }
};
