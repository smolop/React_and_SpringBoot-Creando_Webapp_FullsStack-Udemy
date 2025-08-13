import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
  {
    id: 1,
    username: "Pepito",
    password: "12345",
    email: "pepito@email.com",
  },
];

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

  const handlerAddUser = (user) => {
    // console.log(user);

    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user,
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
  };
};
