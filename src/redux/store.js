import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

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

const contactReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case 'contacts/deleteContact':
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload),
      };

      case "contacts/updateContact":
        return {
          ...state,
          items: state.items.map((contact) =>
            contact.id === action.payload.id
              ? { ...contact, ...action.payload.data }
              : contact
          ),
        };


    default:
      return state;
  }
};

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer:{
    contacts:contactReducer,
    filters: filtersReducer,
  }
});