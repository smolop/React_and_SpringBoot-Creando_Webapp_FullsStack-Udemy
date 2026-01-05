import { NavLink } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UserRow = ({ id, username, email, admin }) => {
  const { handlerRemoveUser, handlerUserSelectedForm } = useUsers();

  const { login } = useAuth();

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      {!login.isAdmin || (
        <>
          <td>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() =>
                handlerUserSelectedForm({
                  id: id,
                  username: username,
                  email: email,
                  admin: admin,
                })
              }
            >
              Update modal
            </button>
          </td>
          <td>
            <NavLink
              className={"btn btn-secondary btn-sm"}
              to={"/users/update/" + id}
            >
              update route
            </NavLink>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handlerRemoveUser(id)}
            >
              Remove
            </button>
          </td>
        </>
      )}
    </tr>
  );
};
