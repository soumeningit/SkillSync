import axios from "axios";
import { groupEndPoints } from "../Api";

const {
    CREATE_GROUP_API,
    GET_USER_API,
    GET_GROUPS_API,
    GET_GROUP_MEMBERS_API,
    CREATE_ONE_TO_ONE_CHAT
} = groupEndPoints;

export const createGroupAPI = async (groupData, token) => {
    try {
        const response = await axios.post(CREATE_GROUP_API, groupData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const searchUsersAPI = async (query, token, user) => {
    try {
        const response = await axios.get(`${GET_USER_API}/userId/${user}?query=${query}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getGroupsAPI = async (token, teamId) => {
    try {
        const response = await axios.get(`${GET_GROUPS_API}/${teamId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const getUsersAPI = async (token, teamId) => {
    try {
        const response = await axios.get(`${GET_GROUPS_API}/${teamId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const getGroupMembersAPI = async (teamId, groupId, token) => {
    try {
        const response = await axios.get(`${GET_GROUP_MEMBERS_API}/team/${teamId}/groupId/${groupId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createOneToOneChat = async (teamId, senderId, receiverId, token) => {
    try {
        const response = await axios.post(`${CREATE_ONE_TO_ONE_CHAT}/team/${teamId}/sender/${senderId}/receiver/${receiverId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response;
    } catch (error) {
        throw error;
    }
}