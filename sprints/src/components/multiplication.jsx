import Table from "./table"
import Header from "./header"
import "../index.css"

export default function Multiplication() {
    return (
        <section className="my-10">
            <Header />
            <Table equation={multiplication} />
        </section>
    )
}

function multiplication() {
    return Math.floor(Math.random() * 10 + 1) + " x " + Math.floor(Math.random() * 10) + " ="
}

