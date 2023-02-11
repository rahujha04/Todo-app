import { Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { db } from '../firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Todos = (props) => {
  const deleteList = (id) =>{
    db.collection("todos").doc(id).delete();
  }
  return (
    <List>
      <ListItem>
        <ListItemText primary="Todo" secondary={props.todo.todo} />
        <DeleteForeverIcon 
        onClick={event=>deleteList(props.id)}
        // onClick={event=>{
        //     db.collection("todos").doc(props.id).delete()
        // }} 
        />
      </ListItem>
      </List>
  )
}

export default Todos