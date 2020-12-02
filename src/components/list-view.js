import React from "react";
import List from "../components/list";
import { ListContextProvider } from "../utils/list-context";
import Card from '@material-ui/core/Card';

export default function Contacts() {
  return (
    <ListContextProvider>
      <Card id="list" variant="outlined" style={{margin: "0 auto", width: "50vw", padding: "15px", background:"lightgray"}}>
      <h4>To Do:</h4>
      <List></List>
      </Card>
    </ListContextProvider>
  );
}
