import "./App.css";
import { Content } from "./components/Content";
import { Navbar } from "./components/Navbar";
import SweetAlert2 from 'react-sweetalert2';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Notes } from "./components/Notes";
import Edit from "./components/Edit";

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>

     <Routes>

      <Route path="/" element={<Notes/>}/>
      <Route path="/addnotes" element={<Content/>} />
      <Route path="/edit/:id" element={<Edit/>} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
