import React, { useReducer, createContext } from "react";

export const ListContext = createContext();

const initialState = {
  items: [
    {
      task: "Go to store",
    },
    {
      task: "Laundry",
    },
    {
      task: "Relax"
    },
  ]
//these could be used for async calls to show a loading wheel
//   loading: false,
//   error: null,
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
          (item) => item.task !== action.payload
        ),
      };
    // case "START":
    //   return {
    //     loading: true,
    //   };
    // case "COMPLETE":
    //   return {
    //     loading: false,
    //   };
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
