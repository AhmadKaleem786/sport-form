import { createSlice } from "@reduxjs/toolkit";
import data from "../data/formData.json";

const initialState = {
  formData: data,
  formInfo: {},
};

const SportSlice = createSlice({
  name: "sportform",
  initialState,
  reducers: {
    handleCheck: (state, { payload }) => {
      state.formData.actions = state.formData.actions.map((action) => {
        return {
          title: action.title,
          id: action.id,
          type: action.type,
          enabled: action.id === payload.id ? !action.enabled : action.enabled,
          bg: action.bg,
          forms: action.forms,
        };
      });
      if (payload.enabled) {
        delete state.formInfo?.[payload.title];
      }
    },
    handleInfo: (state, { payload }) => {
      state.formInfo = Object.assign({}, state.formInfo, payload);
    },
  },
});

export const { handleCheck, handleInfo } = SportSlice.actions;
export default SportSlice.reducer;
