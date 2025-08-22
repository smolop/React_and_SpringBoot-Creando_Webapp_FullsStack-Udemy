import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

export const UserRoutes = () => {

  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route
            path="users"
            element={
              <UsersPage />
            }
          />

          <Route
            path="users/register"
            element={
              <RegisterPage />
            }
          />

          <Route
            path="users/update/:id"
            element={
              <RegisterPage />
            }
          />

          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
