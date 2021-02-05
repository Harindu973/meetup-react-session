
import Navbar from "./components/Navbar/navbar";
import Comp1 from "./components/comp1/comp1";
import Comp2 from "./components/comp2/comp2";

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div>
          <Route exact path='/' component={Comp1} />
          <Route exact path='/contact' component={Comp2} />
          
          
        </div>

      </div>
    </Router>
  );
}

export default App;
