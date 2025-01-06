const backendDomain = "https://registration-login-website-ksg6.onrender.com";

const SummaryApi = {
    signUp: {
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    signIn: {
        url : `${backendDomain}/api/signin`,
        method : "post"
    },
    current_user: {
        url : `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user: {
        url : `${backendDomain}/api/userLogout`,
        method : "get"
    },
    Contact: {
        url : `${backendDomain}/api/contact`,
        method : "post"
    }
}

export default SummaryApi;