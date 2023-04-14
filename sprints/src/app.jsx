import Home from "./components/home"
import Addition from "./components/addition"
import Subtraction from "./components/subtraction"
import Multiplication from "./components/multiplication"
import Division from "./components/division"
import Mixed from "./components/mixed"
import Multi from "./components/multi"
import { Routes, Route } from "react-router"

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addition" element={<Addition />} />
                <Route path="/subtraction" element={<Subtraction />} />
                <Route path="/mixed" element={<Mixed />} />
                <Route path="/multiplication" element={<Multiplication />} />
                <Route path="/division" element={<Division />} />
                <Route path="/multi" element={<Multi />} />
            </Routes>
        </>
    )
}