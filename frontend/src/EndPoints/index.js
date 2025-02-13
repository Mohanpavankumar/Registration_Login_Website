const backendDomain = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

const SummaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    signIn: {
        url: `${backendDomain}/api/signin`,
        method: "post"
    },
    current_user: {
        url: `${backendDomain}/api/user-details`,
        method: "get"
    },
    logout_user: {
        url: `${backendDomain}/api/userLogout`,
        method: "get"
    },
    Contact: {
        url: `${backendDomain}/api/contact`,
        method: "post"
    }
};

export default SummaryApi;
