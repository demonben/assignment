const axios = require("axios");

const BaseUrl =
  "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q";

async function fetchData(option) {
  const response = await axios.get(`${BaseUrl}=${option}`);
  return response.data;
}

const gettingData = (option) => {
  let data = fetchData(option);
  return data;
};

module.exports = gettingData;
