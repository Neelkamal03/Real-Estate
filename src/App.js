import './App.css';
import Header from './Component/Header/Header.js';
import Extra from './Component/Extra/Extra.js';
import Companies from './Component/Companies/Companies.js';
import Residencies from './Component/Residencies/Residencies.js';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header /> 
        <Extra />
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
