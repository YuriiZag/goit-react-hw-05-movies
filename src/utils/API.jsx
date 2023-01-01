import axios from "axios";

const API_KEY = '13f193ffe3d2a979617e1daaeff254ea';

const fetchApi = async (searchQuote, searchRequest) => {
    const apiData = await axios.get(
      `https://api.themoviedb.org/3/${searchQuote}?api_key=${API_KEY}&language=en-US${searchRequest}&include_adult=false`
    );
  return apiData
}

export default fetchApi;