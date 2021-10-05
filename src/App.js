import React, {useState} from 'react';
import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';

//Simulate the data that we fetch from  our database 
const list = [
  {
    title: "Test 1", 
    completed: false
  },
  {
    title:"Test 2",
    completed: false
  },
  {
    title:"Test 3",
    completed: false
  }
];

const appTitle = "To-DO-List App";

const App = () => {

  const [todoList, setTodoList] = useState(list);

  return (
    <div className="ui container center aligned">
      <Section></Section>
      <h1>{appTitle}</h1>
     
      {/* <br></br> pas elegant en programmation */}
      
      <Section></Section>
      <Form></Form>

      <Section></Section> 
      <List list= {todoList} ></List>
    </div> 
  
  )};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
