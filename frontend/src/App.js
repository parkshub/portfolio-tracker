import './App.css';
import Navbar from './components/Navbar'
import Test2 from '../src/pages/Test2'
import Main from './pages/Main';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Browse from './pages/Browse';
import Coins from './pages/Coins';

// consider getting store values here instead of from individual page
// and use a timer to update every min or so

function App() {

  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/main' element={<Main/>}/> 
        <Route path='/browse' element={<Browse/>}/> 
        {/* <Route path='/test1' element={<Test/>}/> */}
        <Route path='/' element={<Test2/>}/>
        <Route path='/coins/:id' element={<Coins/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
