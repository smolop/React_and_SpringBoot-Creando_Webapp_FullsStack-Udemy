import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createUser, findAllUsers, removeUser, updateUser } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
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
  }

  const handlerAddUser = async (user) => {
    // console.log(user);

    let response;
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
    navigate('/users');
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
    navigate('/users');
  };

  const handlerUserSelectedForm = (user) => {
    // console.log(user);
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  }

  const handleCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  }

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handleCloseForm,
    getUsers,
  };
};
