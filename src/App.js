import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GeneralContextProvider } from './Context/GeneralContext';
import Home from './Components/Home';
import Form from './Components/Form';
import { NavBar } from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <GeneralContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
