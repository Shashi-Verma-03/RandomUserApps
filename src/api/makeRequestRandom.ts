import axios from "axios";

const axiosRandomUser = axios.create({
  baseURL: process.env.REACT_APP_RANDOM_USER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const makeRandomUserRequest = async (
  url: string,
  method: "get" | "post" | "update" | "delete",
  data?: unknown
) => {
  try {
    const response = await axiosRandomUser({ url, method });
    return response.data;
  } catch {
    throw new Error("API request failed");
  }
};
