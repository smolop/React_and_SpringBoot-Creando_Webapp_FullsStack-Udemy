import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";

export const UsersPage = ({
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handleCloseForm,
  }) => {

  return (
    <>
      {!visibleForm || (
        <UserModalForm
          initialUserForm={initialUserForm}
          userSelected={userSelected}
          handlerAddUser={handlerAddUser}
          handleCloseForm={handleCloseForm}
        />
      )}
      <div className="container my-4">
        <h2>UsersApp</h2>
        <div className="row">
          <div className="col">
            {visibleForm || (
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
              <UserList
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
                users={users}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
