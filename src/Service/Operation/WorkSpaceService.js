import axios from "axios";
import { workspaceEndPoints } from "../Api";

const {
    CREATE_WORKSPACE_API,
    JOIN_WORKSPACE_API
} = workspaceEndPoints;

export const createWorkSpaceAPI = async (data, token) => {
    try {
        const response = await axios.post(CREATE_WORKSPACE_API, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

export const joinTeamAPI = async (data) => {
    try {
        const response = await axios.post(JOIN_WORKSPACE_API, data);

        return response;
    } catch (error) {
        throw error;
    }
}