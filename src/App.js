import "./App.css";
import Adduser from "./components/Adduser";
import AllUsers from "./components/AllUsers";
import CodeFo from "./components/CodeFo";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeFo />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
