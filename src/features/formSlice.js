import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    contactNumber: "",
    dob: "",
    currentCTC: "",
    expectedCTC: "",
    role: "",
  },
  reducers: {
    updateFormField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: () => {
      return {
        name: "",
        email: "",
        contactNumber: "",
        dob: "",
        currentCTC: "",
        expectedCTC: "",
        role: "",
      };
    },
  },
});

export const { updateFormField, resetForm } = formSlice.actions;

export default formSlice.reducer;
