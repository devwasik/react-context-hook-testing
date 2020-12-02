import React, { useState, useContext } from "react";
import { ListContext } from "../utils/list-context";

export default function List() {
  // Subscribe to `items` state and access dispatch function
  const [state, dispatch] = useContext(ListContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

  const delItem = id => {
    dispatch({
      type: "DEL_ITEM",
      payload: id
    });
  };

  const onRemoveItem = () => {
    delItem(selectedId);
    setSelectedId(null); // Clear selection
  };

  return (
      <div>
          {state.items.map(item => {
              return <p>{item.task}</p>
        })}
      </div>
  )}