import Ecosystem from "./Components/Ecosystem";
import Showcase from "./Components/Showcase";
import Multiplatform from "./Components/Multiplatform";
import Docs from "./Components/Docs";
import Development from "./Components/Development";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Main from "./Components/Main";

function App (){
  return (
  
    <BrowserRouter>

    <Main />
    
      <Routes >
        <Route path="/" element={ <Multiplatform />}></Route>
        <Route path="development" element={ <Development />}></Route>
        <Route path="ecosystem" element={ <Ecosystem/>}></Route>
        <Route path="showcase" element={ <Showcase/>}></Route>
        <Route path="docs" element={ <Docs/>}></Route>
      </Routes>
    </BrowserRouter>



  )
}
export default App