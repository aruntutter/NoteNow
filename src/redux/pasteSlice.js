import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const pasteSlice = createSlice({
  name: "paste",
  initialState: {
    pastes: localStorage.getItem("pastes")
      ? JSON.parse(localStorage.getItem("pastes"))
      : [],
  },
  reducers: {
    // Add Paste
    addPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));

      toast.success("Successfully pasted!");
    },
    // Update Paste
    editPaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId._id);

      if (index >= 0) {
        state.pastes[index] = pasteId;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }

      toast.success("Successfully updated!");
    },
    // Delete Paste
    deletePaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      console.log(index);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted!");
      }
    },
  },
});

export const { addPaste, editPaste, deletePaste, viewPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
