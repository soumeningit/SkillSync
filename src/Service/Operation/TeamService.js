import axios from "axios";
import { teamEndPoints } from "../Api";

const {
    ADD_MEMBER_TO_TEAM_API
} = teamEndPoints;

export const addUserToTeamAPI = async (data, token) => {
    try {
        const response = await axios.post(ADD_MEMBER_TO_TEAM_API, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}