import axios from "axios";

export const getAllUsers = async () => {
  const response = await axios.get(
    // "https://run.mocky.io/v3/d2bb9973-01f6-4ef1-889c-f5cd8cda2701"
    "http://localhost:3005/users"
  );
  return response.data;
};
