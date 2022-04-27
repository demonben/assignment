import axios from "axios";

// const BaseUrl =
//   "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q";

// export async function getData(option) {
//   const response = await axios.get(`${BaseUrl}=${option}`);
//   return response.data;
// }


export async function getData(option) {
  console.log("get route front");
  const response = await axios.get(`http://0.0.0.0:5001/data${option}`);
  console.log(response.data);
  return response.data;
}