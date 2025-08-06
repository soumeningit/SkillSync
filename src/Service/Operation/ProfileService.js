import axios from "axios";
import { profileEndPoints } from "../Api";

const {
    GET_PROFILE_DETAILS_API,
    UPDATE_PROFILE_API,
    CHANGE_PASSWORD_API
} = profileEndPoints;

export const getProfileDetailsAPI = async (userId, token) => {
    try {
        const response = await axios.get(`${GET_PROFILE_DETAILS_API}?userId=${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}