const service = {};
const USER_KEY = "auth-user";
const TOKEN_KEY = "auth-token";
const USER = JSON.stringify({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "visitor",
    authenticated: false
});
service.onSignIn = token => {
    try {
        localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    } catch (error) {
        console.log(error);
    }
};

service.onSignOut = () => {
    try {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
        return JSON.parse(USER);
    } catch (error) {
        console.log(error);
    }
};

service.setUserAuth = user => {
    try {
        user.authenticated = true;
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
};
service.isSignedIn = () => {
    try {
        const res = localStorage.getItem(USER_KEY);
        return res !== null ? true : false;
    } catch (error) {
        console.log(error);
    }
};

service.getUserAuth = () => {
    try {
        const res = localStorage.getItem(USER_KEY) || USER;
        return JSON.parse(res);
    } catch (error) {
        console.log(error);
    }
};

service.getToken = () => {
    try {
        const token = localStorage.getItem(TOKEN_KEY);
        return JSON.parse(token);
    } catch (error) {
        console.log(error);
    }
};

export default service;
