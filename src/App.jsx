import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroDiv from "./components/Cadastro";
import Login from "./pages/login";


export default function App(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CadastroDiv />} />
    </Routes>
    </BrowserRouter>
    )
}