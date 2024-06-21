import { Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Registration from "./pages/registration"
import Home from "./pages/home"

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
}