import axios from "axios";

export const getAllUsers = async () => {
  const response = await axios.get(
    "https://run.mocky.io/v3/cee76889-f53b-4d1d-8dc5-b130abb13c54"
    // "http://localhost:3005/users"
  );
  return response.data;
};
