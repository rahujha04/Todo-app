import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './styles/App.css'
import Todos from './components/Todos'
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const App = () => {

    const [input, setInput] = useState("");

    const [todos, setTodos] = useState([])

    const handleEvent = (event) => {
        const target = event.target;
        const value = target.value;
        setInput(value);
    }

    const addToList = (event) => {
        event.preventDefault();

        db.collection("todos").add({
            todo: input, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    useEffect(()=>{
        db.collection('todos')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc=>({id: doc.id, todo: doc.data()})));
        })
    }, [])

    return (
        <div className="App">
            <center>
                <h1>TODO-LIST</h1>
                <form>
                    <FormControl>
                        <InputLabel>type...</InputLabel>
                        <Input value={input} onChange={handleEvent}/>
                        <Button disabled={!input} type='submit' onClick={addToList} variant="contained">ADD TODO</Button>
                    </FormControl>
                </form>
                <ul>
                    {
                        todos.map(({id, todo})=>(
                            <Todos id={id} todo={todo}/>
                        ))
                    }
                </ul>
            </center>
        </div>
    )
}

export default App