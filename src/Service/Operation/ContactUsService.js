import { contactEndPoint } from "../Api";

const { CONTACT_US_API } = contactEndPoint;

export const contactUsAPI = async (data, token) => {
    try {
        const response = await axios.post(CONTACT_US_API, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
}