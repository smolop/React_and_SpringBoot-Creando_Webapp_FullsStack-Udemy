import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const UserForm = ({
  handleCloseForm,
  userSelected,
}) => {

  const {handlerAddUser, initialUserForm, errors} = useUsers();
  const [userForm, setUserForm] = useState(initialUserForm);
  const [checked, setChecked] = useState(userForm.admin)
  const { id, username, password, email, admin } = userForm;

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

  const onCheckboxChange = () => {
    setChecked(!checked);
    setUserForm({
      ...userForm,
      admin: checked
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(userForm)

    /* if (!username || (!password && id === 0) || !email) {
      Swal.fire({
        title: "Validation error",
        text: "You should complete the form fields.",
        icon: "error",
      });
      return;
    }

    if (!email.includes('@'))
      Swal.fire({
        title: "Email validation error",
        text: "The email should be valid, it must include an @",
        icon: "error",
      }); */

    handlerAddUser(userForm);
  };

  const onCloseForm = () => {
    handleCloseForm();
    setUserForm(initialUserForm);
  };

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
      <p className="text-danger">{errors?.username}</p>

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
      <p className="text-danger">{errors?.password}</p>

      <input
        className="form-control my-3 w-75"
        placeholder="E-Mail"
        type="email"
        value={email}
        name="email"
        onChange={onInputChange}
      />
      <p className="text-danger">{errors?.email}</p>

      <div className="my-3 form-check">
        <input type="checkbox" 
        name="admin" 
        checked={admin}
        className="form-check-input"
        onChange={onCheckboxChange} 
        />
        <label className="form-check-label">Admin</label>
      </div>

      <button type="submit" className="btn btn-primary">
        {id > 0 ? "Edit" : "Create"}
      </button>
      { !handleCloseForm || (
        <button
          className="btn btn-primary mx-2"
          type="button"
          onClick={onCloseForm}
        >
          Close
        </button>
      )}
    </form>
  );
};
