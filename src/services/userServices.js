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
  addNewProject,
  deleteProject,
  acceptRequest,
  declineRequest
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
    // headers: { "Content-Type": "application/json" },
    headers: auth_header(),
  };
  return callApi("/user/getMyProjects", requestOptions);
}
function getRequests() {
  const requestOptions = {
    method: "GET",
    headers: auth_header(),
  };
  return callApi("/user/requestJobs/7b8ff50a-a58a-4b7e-98a4-f2a847d3e9ad", requestOptions);
}
function getReviews() {
  const requestOptions = {
    method: "GET",
    headers: auth_header(),
  };
  return callApi("/profile", requestOptions);
}
function logout() {
  localStorage.removeItem("sp_user");
}

function addNewProject(data) {
  let user = JSON.parse(localStorage.getItem("sp_user"));
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + user.token },
    body: data,
  };
  return callApi("/user/addNewProject", requestOptions);
}

function deleteProject(id){
  let user = JSON.parse(localStorage.getItem("sp_user"));
  const requestOptions = {
    method: "DELETE",
    headers: { Authorization: "Bearer " + user.token },
  };
  return callApi("/user/post/"+id, requestOptions)
}

function acceptRequest(id){
  let user = JSON.parse(localStorage.getItem("sp_user"));
  const requestOptions = {
    method: "PATCH",
    headers: { Authorization: "Bearer " + user.token },
  };
  return callApi("/user/acceptJob/"+id, requestOptions)
}
function declineRequest(id){
  let user = JSON.parse(localStorage.getItem("sp_user"));
  const requestOptions = {
    method: "PATCH",
    headers: { Authorization: "Bearer " + user.token },
  };
  return callApi("/user/declineJob/"+id, requestOptions)
}
export default userServices;
