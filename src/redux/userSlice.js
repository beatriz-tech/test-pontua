import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "loginText",
  initialState: {
    title: "Bem-vindo",
    label: "informe as suas credenciais de acesso ao portal",
    page: 1,
    isLogged: false,
    users: [
      { email: "1234@gmail.com", senha: "12345678" },
      { email: "4321@gmail.com", senha: "87654321" },
      { email: "1234@hotmail.com", senha: "12345678" },
      { email: "4321@hotmail.com", senha: "12345678" },
      { email: "8765@gmail.com", senha: "12345678" },
    ],
    characterState: [],
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
    changeCharacter(state, { payload }) {
      return {
        ...state,
        characterState: payload,
      };
    },
    logout(state) {
      return { ...state, isLogged: false, name: "" };
    },
  },
});

export const { changeLoginText, changeCharacter, logout } = slice.actions;

export const selectLoginText = (state) => state;

export default slice.reducer;
