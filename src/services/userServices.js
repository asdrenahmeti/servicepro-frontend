import { ROOT_URL } from "Constants";
import "whatwg-fetch";
import auth_header from "services/auth_header";
const userServices = {
  login,
  logout,
  register,
  getProjects,
  getRequests,
  getReviews,

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

function login(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return callApi("/login", requestOptions);
}

function register(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return callApi("/register", requestOptions);
}

function getProjects() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return callApi("/getMyProjects", requestOptions);
}
function getRequests() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return callApi("/profile", requestOptions);
}
function getReviews() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return callApi("/profile", requestOptions);
}
function logout() {
  localStorage.removeItem("sp_user");
}
export default userServices;
