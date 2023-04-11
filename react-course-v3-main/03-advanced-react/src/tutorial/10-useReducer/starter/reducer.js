import { data } from "../../../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_ITEM) {
    /* `let newPeople = people.filter((person) => person.id !== id)` is filtering out the person with
    the specified `id` from the `people` array and creating a new array `newPeople` that does not
    include that person. This is used in the `REMOVE_ITEM` case of the `reducer` function to update
    the state with the new array of people. */
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }

  // return state;
  throw new Error(`Invalid action: ${action.type}`);
};

export default reducer;
