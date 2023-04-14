import Table from "./table"
import Header from "./header"
import "../index.css"

export default function Addition() {
    return (
        <section className="mt-5 mb-10">
            <Header />
            <Table equation={add} />
        </section>
    )
}

function add() {
    return Math.floor(Math.random() * 10) + " + " + Math.floor(Math.random() * 10) + " ="
}

