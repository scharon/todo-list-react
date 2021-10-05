import React, {useState} from 'react';
import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';

//Simulate the data that we fetch from  our database 
const list = [
  {
    id: 1,
    title: "Test 1", 
    completed: false
  },
  {
    id: 2,
    title:"Test 2",
    completed: false
  },
  {
    id: 3,
    title:"Test 3",
    completed: false
  }
];

// const addTodo = () =>{
//   list.push({ title: "Test 4"});
// }

const appTitle = "To-DO-List App";

const App = () => {

  const [todoList, setTodoList] = useState(list);

  const addTodo = (item) =>{
   // setTodoList((oldList) => oldList.concat(item));
    setTodoList((oldList) => [...oldList, item]); // concat Array in ES6
  };

  const removeTodo = (id) => {
    setTodoList((oldList) => oldList.filter((item) => item.id !== id));
    // setTodoList((oldList) => {
    //   oldList.filter((item) => {

    //   }))
    // } 
  };

  return (
    <div className="ui container center aligned">
      <Section></Section>
      <h1>{appTitle}</h1>
     
      {/* <br></br> pas elegant en programmation */}
      
      <Section></Section>
      <Form addTodoItem= {addTodo}></Form>

      <Section></Section> 
      <List removeTodoItem= {removeTodo} list= {todoList} ></List>
    </div> 
  
  )};

export default App;
