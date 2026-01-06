import { createSlice } from "@reduxjs/toolkit";

export const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
  admin: false,
};

const initialErrors = {
  username: "",
  password: "",
  email: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userSelected: initialUserForm,
    visibleForm: false,
    errors: initialErrors,
    isLoading: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.users = [
        ...state.users,
        {
          ...action.payload,
        },
      ];
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id != action.payload);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return user;
      });
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    loadingUsers: (state, {payload}) => {
      state.users = payload;
      state.isLoading = false;
    },
    onHandlerUserSelectedForm: (state, {payload}) => {
        state.userSelected = payload;
        state.visibleForm = true;
    },
    onHandlerOpenForm: (state) => {
        state.visibleForm = true;
    },
    onHandleCloseForm: (state) => {
        state.visibleForm = false;
        state.userSelected = initialUserForm;
    },
    loadingErrors: (state, {payload}) => {
        state.errors = payload;
    },
  },
});

export const { addUser, removeUser, updateUser, loadingUsers, 
    onHandlerUserSelectedForm, onHandlerOpenForm, onHandleCloseForm, loadingErrors } =
  usersSlice.actions;
