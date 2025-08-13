import { useEffect, useState } from "react";
import { UserList } from "./UserList";
import Swal from "sweetalert2";

export const UserForm = ({ handleCloseForm, handlerAddUser, userSelected, initialUserForm }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({
      ...userSelected,
      password: "",
    });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    // console.log(target.value)
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(userForm)

    if (!username || (!password && id === 0) || !email) {
      Swal.fire({
        title: "Validation error",
        text: "You should complete the form fields.",
        icon: "error",
      });
      return;
    }

    handlerAddUser(userForm);

    // Save the userForm in the user lists
    setUserForm(initialUserForm);
  };

  const onCloseForm = () => {
     handleCloseForm();
     setUserForm(initialUserForm);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="hidden" name="id" value={id} />

      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {id > 0 || (
        <input
          className="form-control my-3 w-75"
          placeholder="Password"
          type="password"
          value={password}
          name="password"
          onChange={onInputChange}
        />
      )}

      <input
        className="form-control my-3 w-75"
        placeholder="E-Mail"
        type="email"
        value={email}
        name="email"
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-primary">
        {id > 0 ? "Edit" : "Create"}
      </button>
      <button className="btn btn-primary mx-2" type="button"
      onClick={onCloseForm}>
        Close
      </button>
    </form>
  );
};
