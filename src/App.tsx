import { TextField, Button } from "@mui/material"
import { Todo } from "./components/Todo"
import { useState } from "react";

function App() {
  const [todolist,setTodolist] = useState<{id: string;name:string}[]>([]);
  {
    id:1;
    name: "Item #1";
  
  };
  {
    id:2;
    name: "Item #2";
  };
  {
    id:3;
    name: "Item #3";
  };
  {
    id:4;
    name: "Item #4";
  };
  return (
    <>
        <p>This is to do app</p>
      <div>
        <TextField  size="small"/>
        <Button variant="contained">Thêm</Button>
      </div>
    <div>
      {
        todolist.map((todo) => {
          return <Todo name={Todo.name}/>;
}) }
      <Todo name="Item #1"/>
      <Todo name="Item #2"/>
      <Todo name="Item #3"/>
      <Todo name="Item #4"/>
      
    </div>
    </>
  )
}

export default App
