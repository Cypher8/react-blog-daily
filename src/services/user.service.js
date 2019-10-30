import AuthService from '../services/auth.service';
const service = {}
const USER = {
    id: "ZINZ2JE7XK",
    firstName: "Seera",
    lastName: "Kaenkaew",
    email: "user@gmail.com",
    role: "general"
};
service.login = ({ email, password }) => {
    const result = { message: 'Login failured' };
    if (email === 'user@gmail.com' && password === '12345678') {
        AuthService.setUserAuth(USER);
        result.message = 'Login success'
    }
    return result;
}

service.logout = () => {
    const res = AuthService.onSignOut();
    return res;
}

export default service;