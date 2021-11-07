import { combineReducers } from "redux";
import { ADD, DELETE, CHANGE_FILTER } from "./contacts-types";
import defaultContacts from "../../contacts.json";

const items = (state = defaultContacts, { type, payload }) => {
  switch (type) {
    case ADD: {
      let namesArray = state.map((item) => item.name);
      if (!namesArray.includes(payload.name)) {
        return [payload, ...state];
      } else {
        alert(`${payload.name} is already exist`);
        return state;
      }
    }
    // case ADD:
    //   return [payload, ...state];

    case DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
