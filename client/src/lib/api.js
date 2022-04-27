import axios from "axios";

export async function getData(option) {
  const response = await axios.get(`http://0.0.0.0:5001/data/${option}`);
  return response.data.data;
}
