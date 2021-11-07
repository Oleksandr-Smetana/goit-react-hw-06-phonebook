import { v4 as uuidv4 } from "uuid";
import { ADD, DELETE, CHANGE_FILTER } from "./contacts-types";

const addContact = (name, number) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  payload: value,
});

export { addContact, deleteContact, changeFilter };
