import React, { useReducer } from "react";
import { reducer } from "./reducer";
const initialState = {
  Name: "",
  Email: "",
  people: [],
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.Name && state.Email) {
      const newPerson = {
        id: new Date().getTime().toString(),
        Name: state.Name,
        Email: state.Email,
      };
      dispatch({ type: "Submit", value: newPerson });
      state.Name = "";
      state.Email = "";
    } else {
      console.log("Add Users.........");
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter name"
          value={state.Name}
          onChange={(e) => dispatch({ type: "Name", value: e.target.value })}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter name"
          value={state.Email}
          onChange={(e) => dispatch({ type: "Email", value: e.target.value })}
        />{" "}
        <br />
        <br />
        <button type="submit">click me</button>
      </form>
      <br />
      <div>
        {state.people.map((person) => {
          return (
            <h6
              key={person.id}
              onClick={() => dispatch({ type: "Delete", value: person.id })}
            >
              {person.Name} {person.Email}
            </h6>
          );
        })}
      </div>
    </>
  );
};
