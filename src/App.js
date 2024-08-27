//import logo from './logo.svg';
import './App.css';
//import StateMgm from './StateMgm';
import { useState } from 'react';
import FirstComp from './propsContainer/FirstComp';
//import SecondComp from './propsContainer/SecondComp';
//import ThirdComp from './propsContainer/ThirdComp';
//import FourthComp from './propsContainer/FourthComp';
import ClickEvent from './clickEvent';

const App=()=>{
const [sampleCondition, setSampleCondition]=useState(false);

  return (
    <div className="App">
      <ClickEvent/>
      <chat/>
      <h1> 
      {sampleCondition? <FirstComp /> : "This is false"}</h1>
      
    </div>
  );
}

export default App;
