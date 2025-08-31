import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  createUser,
  findAllUsers,
  removeUser,
  updateUser,
} from "../services/userService";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

const initialErrors = {
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const getUsers = async () => {
    const result = await findAllUsers();
    console.log(result);
    if (result) {
      dispatch({
        type: "loadingUsers",
        payload: result.data,
      });
    }
  };

  const handlerAddUser = async (user) => {
    // console.log(user);

    let response;

    try {
      if (user.id === 0) {
        response = await createUser(user);
      } else {
        response = await updateUser(user);
      }

      dispatch({
        type: user.id === 0 ? "addUser" : "updateUser",
        payload: response.data,
      });

      Swal.fire({
        title: user.id === 0 ? "User created" : "User updated",
        text:
          "The user has been " +
          (user.id === 0 ? "created" : "updated") +
          " successfully!",
        icon: "success",
      });

      handleCloseForm();
      navigate("/users");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
      } else if (error.response && error.response.status === 500
        && error.response.data?.message?.includes("constraint")
      ) {

        if (error.response.data?.message?.includes("UK_username")) {
          setErrors({ username: "The username already exists" });
        }

        if (error.response.data?.message?.includes("UK_email")) {
          setErrors({ email: "The email already exists" });
        }

      } else {
        throw error;
      }
    }
  };

  const handlerRemoveUser = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeUser(id);
        dispatch({
          type: "removeUser",
          payload: id,
        });

        Swal.fire({
          title: "User Deleted!",
          text: "The user has been deleted sucessfully.",
          icon: "success",
        });
      }
    });
    navigate("/users");
  };

  const handlerUserSelectedForm = (user) => {
    // console.log(user);
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handleCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
    setErrors({});
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    errors,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handleCloseForm,
    getUsers,
  };
};
