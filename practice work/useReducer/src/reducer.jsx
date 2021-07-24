export const reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.value };
    case "Email":
      return { ...state, Email: action.value };
    case "Submit":
      return { ...state, people: [...state.people, action.value] };
    case "Delete":
      const newPeopleState = state.people.filter((person) => {
        return action.value !== person.id;
      });
      return { ...state, people: newPeopleState };
    default:
      return { state };
  }
};