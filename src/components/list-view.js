import React from "react";
import List from "../components/list";
// import ContactTable from "../components/contact-table";
import { ListContextProvider } from "../utils/list-context";

export default function Contacts() {
  return (
    <ListContextProvider>
      This is your to do list: <br />
      <List></List>
    </ListContextProvider>
  );
}
