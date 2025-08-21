import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = ({ login, handlerLogout }) => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handleCloseForm,
  } = useUsers();

  return (
    <>
      <Navbar login={login} handlerLogout={handlerLogout} />
      <Routes>
        <Route
          path="users"
          element={
            <UsersPage
              users={users}
              userSelected={userSelected}
              initialUserForm={initialUserForm}
              visibleForm={visibleForm}
              handlerAddUser={handlerAddUser}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
              handlerOpenForm={handlerOpenForm}
              handleCloseForm={handleCloseForm}
            />
          }
        />

        <Route
          path="users/register"
          element={
            <RegisterPage
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />

        <Route
          path="users/update/:id"
          element={
            <RegisterPage
              users={users}
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />

        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
