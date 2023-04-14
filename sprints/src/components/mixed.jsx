import Table from "./table"
import Header from "./header"
import "../index.css"

export default function Mixed() {
    return (
        <section className="mt-5 mb-10">
            <Header />
            <Table equation={mixed} />
        </section>
    )
}

function mixed() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = Math.random() < 0.5 ? '+' : '-';
    return `${num1} ${operator} ${num2} =`;
}


