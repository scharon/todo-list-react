import React, {useState, useEffect} from 'react';
//import axios from 'axios'; // library use to fecht Data from our database
import todos from './apis/index'; // ./apis/index

import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';

//Simulate the data that we fetch from  our database 
// const list = [
//   {
//     id: 1,
//     title: "Test 1", 
//     completed: false
//   },
//   {
//     id: 2,
//     title:"Test 2",
//     completed: false
//   },
//   {
//     id: 3,
//     title:"Test 3",
//     completed: false
//   }
// ];

// const addTodo = () =>{
//   list.push({ title: "Test 4"});
// }

const appTitle = "To-DO-List App";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  // Fetching Data from our Database 
  useEffect(() => {

    // async function () {
    // const response = await axios.get("http://localhost:4141/todos/");
    // }();
    async function fetchData() {
      //const response = await axios.get("http://localhost:4141/todos/");
      //console.log(response);
      const {data} = await todos.get("/todos");
      setTodoList(data);
      
    }
    fetchData();

  }, []);

  const addTodo = async (item) =>{
    const {data} = await todos.post("/todos", item); // Because we r most interested on the data and not anything else, we gonna destructured the data propertie au lieu de response object
   // setTodoList((oldList) => oldList.concat(item));
    setTodoList((oldList) => [...oldList, data]); // concat Array in ES6, data that we recieve from our server
  };

  const removeTodo = async (id) => {
    await todos.delete("/todos/" + id); // /todos/:id
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    const {data} =  await todos.put(`/todos/${id}`, item);

  }

  return (
    <div className="ui container center aligned">
      <Section></Section>
      <h1>{appTitle}</h1>
     
      {/* <br></br> pas elegant en programmation */}
      
      <Section></Section>
      <Form addTodoItem= {addTodo}></Form>

      <Section></Section> 
      <List 
        editTodoListProp = {editTodo}
        removeTodoItem= {removeTodo} 
        list= {todoList} >
      </List>
    </div> 
  
  )};

export default App;
