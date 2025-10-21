import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroDiv from './components/FormCadastro'
import Login from "./pages/Login";


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