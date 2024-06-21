import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/searchSlice";
import filterReducer from "./filter/Filter";

const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export default store;
