import { useEffect } from "react";
import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UsersPage = () => {
  const { users, visibleForm, isLoading, handlerOpenForm, getUsers } =
    useUsers();

  const { login } = useAuth();

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="container my-4">
        {/* <h4>Loading...</h4> */}
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      {!visibleForm || <UserModalForm />}
      <div className="container my-4">
        <h2>UsersApp</h2>
        <div className="row">
          <div className="col">
            {visibleForm || !login.isAdmin || (
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                New User
              </button>
            )}
            {users.length === 0 ? (
              <div className="alert alert-warning">
                There aren't users in the system!
              </div>
            ) : (
              <UserList />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
