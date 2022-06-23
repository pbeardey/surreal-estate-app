import axios from "axios";

const getProperties = (setProperties, setAlert, search) => {
  let API_URL = "http://localhost:3000/api/v1/PropertyListing/";

  if (search) {
    API_URL += search;
  }

  axios
    .get(API_URL)
    .then((response) => {
      setProperties(response.data);
      setAlert("");
    })
    .catch((err) => {
      const { status } = err.response;
      if (status === 404) {
        setAlert("Properties not found");
      }
      if (status === 500) {
        setAlert("Server Error...Please try again later.");
      }
    });
};

export default getProperties;
