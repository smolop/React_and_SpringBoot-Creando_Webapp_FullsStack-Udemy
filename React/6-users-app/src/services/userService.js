import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/users";

export const findAllUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const createUser = async ({ username, email, password }) => {
  try {
    const response = await axios.post(BASE_URL, {
      username,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }

};

export const updateUser = async ({ id, username, email }) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, {
      username,
      email,
      // password: 'nothing',
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }

};

export const removeUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    
  } catch (error) {
    console.error(error);
  }
}
