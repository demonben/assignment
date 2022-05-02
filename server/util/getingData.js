const axios = require("axios");

const BaseUrl =
  "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q";

async function fetchData(option, page) {
  const perPage = 9;
  const response = await axios.get(`${BaseUrl}=${option}&per_page=${perPage}&page=${page}`);
  return response.data;
}

const gettingData = (option,page) => {
  let data = fetchData(option,page);
  return data;
};

module.exports = gettingData;
