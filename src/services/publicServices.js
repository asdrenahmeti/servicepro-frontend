import { ROOT_URL } from "Constants";
import "whatwg-fetch";
const publicServices = {
  getServices,
};
const callApi = (url, options) => {
  console.log(`Calling API ${url} with options`, options);
  return fetch(ROOT_URL + url, options)
    .catch(() => {
      throw {
        status: 503,
        message:
          "There was a problem connecting to our servers! Please make sure that you are connected to a WiFi network and try again later!",
      };
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 500) {
        return response;
      }
      const error = {
        status: response.status,
        message: response.statusText,
      };
      throw error;
    })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.status == "success") {
        return response;
      }
      const error = {
        status: response.status,
        message: response.message,
      };
      throw error;
    })
    .then((json) => {
      return json;
    });
};

function getServices() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return callApi("/services", requestOptions);
}
function getService(id) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return callApi("/services/" + id, requestOptions);
}

function findServices(id) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return callApi("/services/" + id, requestOptions);
}

export default publicServices;
