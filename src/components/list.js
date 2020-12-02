import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../utils/list-context";
import Button from '@material-ui/core/Button';

export default function List() {
  // Subscribe to `items` state and access dispatch function
  const [state, dispatch] = useContext(ListContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

  const [newItem, setNewItem] = useState(null);

  const delItem = (task) => {
    dispatch({
      type: "DEL_ITEM",
      payload: task,
    });
  };

  const addItem = () => {
    //make sure value is not blank
    if (newItem) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: 4,
          task: newItem,
        },
      });
      setNewItem("");
    }
  };
  return (
    <div>
    {state.items.length > 0 ? 
      state.items.map((item) => {
        return (
          <p>
            {item.task}
            &nbsp;<Button variant="contained" color="secondary" onClick={() => delItem(item.task)}>Delete</Button>
          </p>
        );
      })
      :   
         (<p>You have nothing on your list!</p>)
    }

      <p>Add new item?</p>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button onClick={() => addItem()}>Add</button>
      </div>
    </div>
  );
}
