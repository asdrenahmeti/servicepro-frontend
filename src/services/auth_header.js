function authHeader() {
    let user = JSON.parse(localStorage.getItem('labbox_user'));
    if (user && user.auth_token) {
        return { 'Authorization': 'Bearer ' + user.auth_token ,"Content-Type": "application/json","Accept":'application/json'};
    } else {
        return {};
    }
}
export default authHeader