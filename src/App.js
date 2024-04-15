import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Prop1 from './components/Prop1';
import Statefunc from './components/Statefunc';
import Eventbind from './components/Eventbind';
import Usergreeting from './components/Usergreeting';
import Functionclick from './components/Functionclick';
import Counter from './components/Counter';
import parentcomponent from './components/parentcomponent';
import Namelist from './components/Namelist';
import { Component } from 'react';
import Classclick from './components/Classclick';
// function App() {
  class App extends Component{
    render(){
  return (
    <div className="App">
      {/* <Counter/>
      <Functionclick/>
      <Classclick/>
      <Eventbind/> */}
      <parentcomponent/>
      <Usergreeting/>
      <Namelist/>
      

      {/* <Statefunc/> */}
{/* // <Greet/>
// <Welcome/>
// <Hello/>
// <Prop1 name="Prav" heroname="Coder"/>
// <p>HI iam praveena studying 10th class</p>
// <Prop1 name="Bhuna" heroname="Batman"/>
// <Prop1 name="Meena" heroname="Superman"/>
// <Welcome name="Gyanitha"/>
// <Statefunc/> */}
    </div>
  );
}
  }
export default App;
