import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '32995191-b21c3f9cffc59aabb19c49243';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(searchQuery, page) {
  const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(url);
}

fetchImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default fetchImages;
