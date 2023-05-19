import Header from "./header"
import Table from "./table"

export default function Subtraction() {
    return (
        <section className="my-10">
            <Header />
            <Table equation={subtraction} />
        </section>
    )
}

function subtraction() {
    let firstNumber = Math.floor(Math.random() * 10) + 1;
    let secondNumber = Math.floor(Math.random() * 9) + 1;

    while (firstNumber === secondNumber) {
        firstNumber = Math.floor(Math.random() * 10) + 1;
        secondNumber = Math.floor(Math.random() * 9) + 1;
    }

    return `${Math.max(firstNumber, secondNumber)} - ${Math.min(firstNumber, secondNumber)} =`;
}

