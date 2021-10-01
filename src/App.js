import React from 'react';

import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';


const appTitle = "To-DO-List App";
const App = () => {
  return (
    <div className="ui container center aligned">
      <Section>
      
      </Section>
      <h1>{appTitle}</h1>

      {/* <br></br> pas elegant en programmation */}
      <Form></Form>

      <Section>
        
      </Section>

      <List></List>
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
