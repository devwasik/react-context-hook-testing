import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../utils/list-context";

export default function List() {
  // Subscribe to `items` state and access dispatch function
  const [state, dispatch] = useContext(ListContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

  const [newItem, setNewItem] = useState(null)

  const delItem = (id) => {
    dispatch({
      type: "DEL_ITEM",
      payload: id,
    });
  };

  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
          id: 4,
          task: newItem
      },
    });
  };


     


  return (
    <div>
      {state.items.map((item) => {
        return (
          <p>
            {item.task}
            <button onClick={() => delItem(item.id)}>Delete</button>
          </p>
        );
      })}

      <p>Add new item?</p>
      <div>
          <input type="text" onChange={(e) => setNewItem(e.target.value)}></input>
          <button onClick={() => addItem()}>Add</button>
      </div>
    </div>
  );
}
