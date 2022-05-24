import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GeneralContextProvider } from './Context/GeneralContext';
import Home from './Components/Home';
import  NavBar from './Components/NavBar'
//import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer';
import ListProducts from './Components/ListProducts';
import Contact from './Components/Contact/Contact';

const links=[   
  {href:"/", name:"Inicio", id: 1},
  {href:"categoria/escritorio", name:"Pc Escritorio", id: 2}, 
  {href:"categoria/portatil", name:"Notebook", id: 3},
  {href:"categoria/tablet", name:"Tablet", id: 4}    
]; 

function App() {
  return (
    <div className="App">
      <GeneralContextProvider>
        <BrowserRouter>
          <NavBar links={links}/>
          {/* <Banner /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/products' element={<ListProducts/>}/>
            <Route path='/products/:id' element={<ListProducts/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
