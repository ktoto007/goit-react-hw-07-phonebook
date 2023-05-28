import { configureStore } from '@reduxjs/toolkit';

import { phonebookReduser } from './phonebookSlise';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReduser,
  },
});
