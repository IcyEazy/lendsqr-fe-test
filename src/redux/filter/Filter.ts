import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterProps {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: number | string;
  status: string;
}

const initialState: FilterProps = {
  organization: "",
  username: "",
  email: "",
  date: "",
  phoneNumber: "",
  status: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<FilterProps>>) => {
      // Partial<FilterProps> allows passing only part of the FilterProps
      state.organization = action.payload.organization || "";
      state.username = action.payload.username || "";
      state.email = action.payload.email || "";
      state.date = action.payload.date || "";
      state.phoneNumber = action.payload.phoneNumber || "";
      state.status = action.payload.status || "";
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const selectFilter = (state: { filter: FilterProps }) => state.filter;
export default filterSlice.reducer;
