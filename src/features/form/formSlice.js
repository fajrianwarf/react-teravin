import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: {
    id: Math.floor(Date.now() * Math.random()),
    name: '',
    email: '',
    address: '',
    phone: '',
  },
  pendidikan: [''],
  pengalamanKerja: [''],
  keahlian: [''],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.form = action.payload;
    },
    addPendidikan: (state, action) => {
      state.pendidikan = action.payload;
    },
    addPengalamanKerja: (state, action) => {
      state.pengalamanKerja = action.payload;
    },
    addKeahlian: (state, action) => {
      state.keahlian = action.payload;
    },
    resetData: () => {
      return initialState;
    },
  },
});

export default formSlice.reducer;
export const {
  generateId,
  addForm,
  addPendidikan,
  addPengalamanKerja,
  addKeahlian,
  resetData,
} = formSlice.actions;
