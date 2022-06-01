import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Navbar';
import Calculator from './components/Big';
import Quote from './components/Quote';



const App = () => {
    return (
       <Router>
         <div>
            <Nav />  
            <div className="content">    
              <Routes>
                 <Route path="/" element={<Home />} />              
                 <Route path="/Calculator" element={<Calculator />} />                            
                <Route path="/Quote" element={<Quote />} />
              </Routes>   
            </div>        
        </div>
       </Router>
    )
}

export default App
