import Home from "/src/Home.tsx"
import About from "/src/About.tsx";
import SignUp from "./SignUp";


import { BrowserRouter,Route,Routes } from "react-router-dom";



function App() {
  
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<SignUp/>} />
        
      </Routes>
    </>
  );
}

export default App;

