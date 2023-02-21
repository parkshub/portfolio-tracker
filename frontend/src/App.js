import './App.css';
import Navbar from './pages/Navbar'
import Test2 from '../src/pages/Test2'
import Main from './pages/Main';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/main' element={<Main/>}/> 
        {/* <Route path='/test1' element={<Test/>}/> */}
        <Route path='/' element={<Test2/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
