import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operetion';
const phonebookInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    // addContact(state, action) {
    //   console.log(state.contacts.findIndex);
    //   state.contacts.push(action.payload);
    // },

    // removeContact(state, action) {
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(
    //       contact => contact.id !== action.payload.id
    //     ),
    //   };
    //   // const index = state.contacts.findIndex(
    //   //   item => item.id === action.payload.id
    //   // );

    //   // state.contacts.splice(index, 1);
    // },

    filtredContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [removeContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [removeContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      console.log(action);
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { filtredContacts } = phonebookSlice.actions;

export const phonebookReduser = phonebookSlice.reducer;
