import Home from "./components/home"
import Addition from "./components/addition"
import Subtraction from "./components/subtraction"
import Multiplication from "./components/multiplication"
import Division from "./components/division"
import Mixed from "./components/mixed"
import Multi from "./components/multi"
import { Routes, Route } from "react-router"

import TkAddition from "./components/tk/tk-addition"
import TkHome from "./pages/tk-home"
import TkSubtraction from "./components/tk/tk-subtraction"
import TkMixed from "./components/tk/tk-mixed"

import HomePage from "./components/home-page"

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upper" element={<Home />} />
                <Route path="/addition" element={<Addition />} />
                <Route path="/subtraction" element={<Subtraction />} />
                <Route path="/mixed" element={<Mixed />} />
                <Route path="/multiplication" element={<Multiplication />} />
                <Route path="/division" element={<Division />} />
                <Route path="/multi" element={<Multi />} />
                <Route path="/tk" element={<TkHome />} />
                <Route path="/tkaddition" element={<TkAddition />} />
                <Route path="/tksubtraction" element={<TkSubtraction />} />
                <Route path="/tkmixed" element={<TkMixed />} />
            </Routes>
        </>
    )
}