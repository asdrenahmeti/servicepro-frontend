function authHeader() {
    let user = JSON.parse(localStorage.getItem('sp_user'));
    console.log("local storage user..:",user)
    if (user) {
        return { 'Authorization': 'Bearer ' + user.token,"Content-Type": "application/json","Accept":'application/json'};
    } else {
        return {};
    }
}
export default authHeader