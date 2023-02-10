import './App.css';
import Header from './Components/Header';
import { useState, createContext } from 'react';
import Comp1 from './Components/Comp1';

const Con =createContext();

function App() {
  const [data, setData] = useState("Prop-Drilling");
  const [name, setName] = useState({name:"Rishab", age:22});
  return (
    <div className="App">
      <Con.Provider value={{data,name}}>
      <Header/>
      <Comp1/>
      </Con.Provider>
    </div>
  );
}

export default App;
export {Con};
