import { useContext } from "react";
import { UserForm } from "./UserForm";
import { UserContext } from "../context/UserContext";
import { useUsers } from "../hooks/useUsers";

export const UserModalForm = () => {
  
  const { userSelected, handleCloseForm } = useUsers();

  return (
    <>
      <div className="open-modal animation fadeIn">
        <div className="modal" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {userSelected.id > 0 ? "Edit" : "Create"} User Modal
                </h5>
              </div>
              <div className="modal-body">
                <UserForm
                  userSelected={userSelected}
                  handleCloseForm={handleCloseForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
