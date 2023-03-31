import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './views/Home.js';
import Details from './components/Details';
import Update from './components/Update';
import Vehicle from './components/CreateVehicle';
import About from './views/About.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Vehicle/>} path='/vehicles'/>
          <Route element={<Home/>} path='/' default/>
          <Route element={<About/>} path='/vehicles/about/:vin'/>
          <Route element={<Details/>} path='/vehicles/:vin'/>
          <Route element={<Update/>} path='/vehicles/edit/:id'/>
        </Routes>
      </BrowserRouter>
      <div>

      </div>
    </div>
  );
}

export default App;
