import { authEndPoints } from "../Api";
import axios from 'axios';

const {
    SEND_OTP_API,
    REGISTER_API,
    LOGIN_API,
    FORGOT_PASSWORD_API,
    RESET_PASSWORD_API,
    REGISTER_WITH_GOOGLE_API,
    LOGIN_WITH_GOOGLE_API,
    REGISTER_WITH_GITHUB_API,
    LOGIN_WITH_GITHUB_API,
    GET_OAUTH_USER_DETAILS,
    LOG_OUT_API
} = authEndPoints;

export const sendOTPAPI = async (data) => {
    try {
        const response = await axios.post(SEND_OTP_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error sending OTP');
    }
}

export const registerUserAPI = async (data) => {
    try {
        const response = await axios.post(REGISTER_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error registering user');
    }
}

export const loginUserAPI = async (data) => {
    try {
        const response = await axios.post(LOGIN_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error logging in user');
    }
}

export const forgotPasswordAPI = async (data) => {
    try {
        const response = await axios.post(FORGOT_PASSWORD_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error in forgot password');
    }
}

export const resetPasswordAPI = async (data) => {
    try {
        const response = await axios.post(RESET_PASSWORD_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error resetting password');
    }
}

export const registerWithGoogleAPI = async (data) => {
    try {
        const response = await axios.post(REGISTER_WITH_GOOGLE_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error registering with Google');
    }
}
export const loginWithGoogleAPI = async (data) => {
    try {
        const response = await axios.post(LOGIN_WITH_GOOGLE_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error logging in with Google');
    }
}

export const registerWithGitHubAPI = async (data) => {
    try {
        const response = await axios.post(REGISTER_WITH_GITHUB_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error registering with GitHub');
    }
}

export const loginWithGitHubAPI = async (data) => {
    try {
        const response = await axios.post(LOGIN_WITH_GITHUB_API, data);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error logging in with GitHub');
    }
}

export const getOAuthUserDetails = async () => {
    try {
        const response = await axios.get(GET_OAUTH_USER_DETAILS);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching OAuth user details');
    }
}

export const logoutUserAPI = async () => {
    try {
        const response = await axios.post(LOG_OUT_API);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error logging out user');
    }
}
