import { Routes, Route} from "react-router-dom";
import About from "./Pages/About/About";
import City from "./Pages/City/City";
import Home from "./Pages/Home/Home";
import RegisterEvent from "./Pages/RegisterEvent/RegisterEvent";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/City" element={<City />}></Route>
        <Route path="/RegisterEvent" element={<RegisterEvent />}></Route>
    </Routes> 
    </>
  );
}

export default App;
