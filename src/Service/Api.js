const API_URL = import.meta.env.VITE_BACKEND_URL;

export const authEndPoints = {
    SEND_OTP_API: `${API_URL}/auth/send-otp`,
    REGISTER_API: `${API_URL}/auth/register-user`,
    LOGIN_API: `${API_URL}/auth/login-user`,
    FORGOT_PASSWORD_API: `${API_URL}/auth/forgot-password`,
    RESET_PASSWORD_API: `${API_URL}/auth/reset-password`,
    REGISTER_WITH_GOOGLE_API: `${API_URL}/auth/register-with-google`,
    LOGIN_WITH_GOOGLE_API: `${API_URL}/auth/login-with-google`,
    REGISTER_WITH_GITHUB_API: `${API_URL}/auth/register-with-github`,
    LOGIN_WITH_GITHUB_API: `${API_URL}/auth/login-with-github`,
    GET_OAUTH_USER_DETAILS: `${API_URL}/Oauth/get-user-details`,
    LOG_OUT_API: `${API_URL}/auth/logout-user`,
}

export const workspaceEndPoints = {
    CREATE_WORKSPACE_API: `${API_URL}/workspace/create-workspace`,
    JOIN_WORKSPACE_API: `${API_URL}/team/join-team`,
};

export const contactEndPoint = {
    CONTACT_US_API: `${API_URL}/contact/contact-us`,
}

export const groupEndPoints = {
    CREATE_GROUP_API: `${API_URL}/chat-group/create-group`,
    GET_USER_API: `${API_URL}/chat-group/search-user`,
    GET_GROUPS_API: `${API_URL}/chat-group/get-groups`,
    GET_GROUP_MEMBERS_API: `${API_URL}/chat-group/get-group-details`,
    CREATE_ONE_TO_ONE_CHAT: `${API_URL}/one-to-one/chat`
}

export const profileEndPoints = {
    GET_PROFILE_DETAILS_API: `${API_URL}/profile/getProfileDetails`,
    UPDATE_PROFILE_API: `${API_URL}/profile/update-profile`,
    CHANGE_PASSWORD_API: `${API_URL}/profile/change-password`,
}

export const teamEndPoints = {
    CREATE_TEAM_API: `${API_URL}/team/create-team`,
    GET_TEAM_DETAILS_API: `${API_URL}/team/get-team-details`,
    ADD_MEMBER_TO_TEAM_API: `${API_URL}/team/rest-for-admin/add-user-to-team`,
    REMOVE_MEMBER_API: `${API_URL}/team/remove-member`
}