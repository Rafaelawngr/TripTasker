import { Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Registration from "./pages/registration"
import Home from "./pages/home"
import NewTravel from "./pages/newTravel"
import InfoTravel from "./pages/infoTravel"

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/home" element={<Home />} />
                <Route path="/newTravel" element={<NewTravel />} />
                <Route path="/infoTravel" element={<InfoTravel />} />
            </Routes>
        </>
    )
}