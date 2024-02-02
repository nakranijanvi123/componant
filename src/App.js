import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button ,Col,Nav, Navbar,Row,Container} from 'react-bootstrap';
import './App.css';

import Home from './Home';
import { Routes, Route } from "react-router-dom"
import Blog from './Blog';
import Hader from './Hader';
import About from './About';
import Services from './Services';
import Contact from './Contact';





function App() {
  return (

    <>
  
   


   
    <Hader/>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/Services" element={ <Services/> } />
        <Route path="/Contact" element={ <Contact/> } />

      </Routes>
      
    </>
   
  );
}

export default App;
