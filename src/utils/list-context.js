import React, { useReducer, createContext } from "react";

export const ListContext = createContext();

const initialState = {
  items: [
    {
      id: 1,
      task: "Go to store",
    },
    {
      id: 2,
      task: "Laundry",
    },
    {
      id: 3,
      task: "Relax"
    },
  ],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload],
      };
    case "DEL_ITEM":
      return {
        items: state.items.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const ListContextProvider = (props) => {
  //this of this as useState
  /*
    below is the similar to

    const [user, setUser] = useState(initialUserState)
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ListContext.Provider value={[state, dispatch]}>
      {props.children}
    </ListContext.Provider>
  );
};
