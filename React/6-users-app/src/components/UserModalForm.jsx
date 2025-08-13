import { UserForm } from "./UserForm";

export const UserModalForm = ({userSelected, initialUserForm, handlerAddUser, handleCloseForm}) => {
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
                  initialUserForm={initialUserForm}
                  userSelected={userSelected}
                   handlerAddUser={handlerAddUser}
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
