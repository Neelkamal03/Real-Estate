import './App.css';
import Header from './Component/Header/Header.js';
import Extra from './Component/Extra/Extra.js';
import Companies from './Component/Companies/Companies.js';
import Residencies from './Component/Residencies/Residencies.js';
import Value from './Component/Value/Value.js';
import Contact from './Component/Contact/Contact.js';
import GetStarted from './Component/GetStarted/GetStarted.js';
import Footer from './Component/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Extra />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
