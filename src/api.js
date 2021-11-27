import axios from "axios";

const locationUrl = "https://api.geoapify.com/v1";
const newsApiUrl = "https://newsapi.org/v2";
const apiKey = "b23b2e340dab49e58e9a5592bf753dda";

async function getUserLocation() {
  const response = await axios.get(
    `${locationUrl}/ipinfo?apiKey=e078924a3a2d4a018163dc5a6cb0eda2`
  );
  return response;
}

async function getTopNewsHeading(country) {
  const response = await axios.get(
    `${newsApiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`
  );
  return response;
}

async function getTopNewsHeadingCategories(country, category) {
  const response = await axios.get(
    `${newsApiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
  );
  return response;
}

async function searchAllCategories(search_query) {
  const response = await axios.get(
    `${newsApiUrl}/top-headlines?q=${search_query}&apiKey=${apiKey}`
  );
  return response;
}

async function filterNewsBySource(source) {
  const response = await axios.get(
    `${newsApiUrl}/top-headlines?sources=${source}&apiKey=${apiKey}`
  );
  return response;
}

async function getAllSources() {
  const response = await axios.get(
    `${newsApiUrl}/top-headlines/sources?&apiKey=${apiKey}`
  );
  return response;
}

export default {
  getUserLocation,
  getTopNewsHeading,
  getTopNewsHeadingCategories,
  searchAllCategories,
  filterNewsBySource,
  getAllSources,
};
