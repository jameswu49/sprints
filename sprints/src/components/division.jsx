import Header from "./header"
import Table from "./table"

export default function Division() {
    return (
        <section className="my-10">
            <Header />
            <Table equation={division} />
        </section>
    )
}

function division() {
    let firstNumber, secondNumber;
    do {
        firstNumber = Math.floor(Math.random() * 10) + 1;
        secondNumber = Math.floor(Math.random() * 9) + 1;
    } while (firstNumber % secondNumber !== 0);
    return `${firstNumber} ÷ ${secondNumber} =`;
}

