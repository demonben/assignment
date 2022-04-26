const https = require("https");

module.exports = getData = () => {
  let data = "";
  https
    .get(
      "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q",
      (resp) => {
        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
        //   console.log(JSON.parse(data));
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
//   console.log(data);
  return data;
};
