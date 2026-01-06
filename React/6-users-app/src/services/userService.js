import usersApi from "../apis/userApi";

const BASE_URL = "";

/* const config = () => {
  return {
    headers: {
      Authorization: sessionStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  };
}; */

export const findAllUsers = async () => {
  try {
    const response = await usersApi.get(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const findAllUsersPages = async (page = 0) => {
  try {
    const response = await usersApi.get(`${BASE_URL}/page/${page}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const createUser = async ({ username, email, password, admin }) => {
  try {
    const response = await usersApi.post(
      BASE_URL,
      {
        username,
        email,
        password,
        admin
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUser = async ({ id, username, email, admin }) => {
  try {
    const response = await usersApi.put(
      `${BASE_URL}/${id}`,
      {
        username,
        email,
        admin
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const removeUser = async (id) => {
  try {
    await usersApi.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
