import './App.css';
import Navbar from './components/Navbar'
import Test2 from '../src/pages/Test2'
import Main from './pages/Main';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Browse from './pages/Browse';


function App() {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/main' element={<Main/>}/> 
        <Route path='/browse' element={<Browse/>}/> 
        {/* <Route path='/test1' element={<Test/>}/> */}
        <Route path='/' element={<Test2/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
