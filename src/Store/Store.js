import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import theme from "./theme/theme";

export default configureStore({
  reducer: {
    theme: theme,
    user: userReducer,
  },
});