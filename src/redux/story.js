import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./userSlice";
import { reducer as toastrReducer } from "react-redux-toastr";

export default configureStore({
  reducer: {
    loginText: loginReducer,
    toastr: toastrReducer,
  },
});
