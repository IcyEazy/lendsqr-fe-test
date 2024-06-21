import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Search {
  search: string;
}

const initialState: Search = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export const selectSearch = (state: any) => state.search.search;
export default searchSlice.reducer;
