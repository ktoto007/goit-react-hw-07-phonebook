import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64723a196a9370d5a41b2d18.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/fetchAll',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', { contact });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/fetchAll',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/task${contactId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
