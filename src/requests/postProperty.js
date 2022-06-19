/* eslint-disable no-console */
import axios from "axios";

const postProperty = (data) => {
  const API_ENDPOINT = "http://localhost:3000/api/v1/PropertyListing";
  console.log(`${data}<--Data`);
  axios
    .post(API_ENDPOINT, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postProperty;
