import './App.css';
import Test from '../src/pages/Test'
import Test2 from '../src/pages/Test2'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (

    <Router>
      <Routes>
        <Route path='/test1' element={<Test/>}/>
        <Route path='/test2' element={<Test2/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
