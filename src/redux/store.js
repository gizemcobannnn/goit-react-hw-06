import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './contactsSlice'
import filtersReducers from './filtersSlice';

const initialState = {
  contacts: {
	  items: [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },

	    { id: 4, text: "Build amazing apps", completed: false },
	  ]
  },
  filters: {
    status: "all",
  },
};
// src/redux/store.js


export const store = configureStore({
  reducer:{
    contacts: contactsReducer, //+
    filters: filtersReducers, //+
  }
});