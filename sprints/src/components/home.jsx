import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <Title />
            <section className="grid grid-cols-3">
                <Link to="/addition">Addition</Link>
                <Link to="/subtraction">Subtraction</Link>
                <Link to="/multiplication">Multiplication</Link>
                <Link to="/division">Division</Link>
                <Link to="/mixed">Mixed</Link>
            </section>
        </>
    )
}

function Title() {
    return (
        <h1 className="text-center text-4xl underline">Math Sprints</h1>
    )
}