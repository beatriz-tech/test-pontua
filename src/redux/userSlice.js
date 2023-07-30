import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "loginText",
  initialState: {
    title: "Bem-vindo",
    label: "informe as suas credenciais de acesso ao portal",
    page: 1,
    isLogged: false,
  },
  reducers: {
    changeLoginText(state, { payload }) {
      return {
        ...state,
        isLogged: true,
        title: payload.title,
        label: payload.label,
        page: payload.page,
      };
    },
    logout(state) {
      return { ...state, isLogged: false, name: "" };
    },
  },
});

export const { changeLoginText, logout } = slice.actions;

export const selectLoginText = (state) => state;

export default slice.reducer;
