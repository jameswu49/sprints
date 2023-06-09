import Table from "./table"
import Header from "./header"
import "../index.css"

export default function Mixed() {
    return (
        <section className="my-10">
            <Header />
            <Table equation={mixed} />
        </section>
    )
}

function mixed() {
    let num1 = 0;
    let num2 = 0;

    while (num1 <= num2 || num1 === 0 || num2 === 0) {
        num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * 6) + 1;
    }

    const operator = Math.random() < 0.5 ? '+' : '-';

    return `${num1} ${operator} ${num2} =`;
}


