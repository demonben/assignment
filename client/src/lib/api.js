import axios from "axios";

const BaseUrl =
  "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q";

export async function getData(option) {
  const response = await axios.get(`${BaseUrl}=${option}`);
  return response.data;
}
