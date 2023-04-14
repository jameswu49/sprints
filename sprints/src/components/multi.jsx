import Table from "./table"
import Header from "./header"
import "../index.css"

export default function Multi() {
    return (
        <section className="mt-5 mb-10">
            <Header />
            <Table equation={multi} />
        </section>
    )
}

function multi() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * num1) + 1;
    let operator = Math.random() < 0.5 ? 'x' : '÷';
    if (operator === '÷') {
        let firstNumber, secondNumber;
        do {
            firstNumber = Math.floor(Math.random() * 10) + 1;
            secondNumber = Math.floor(Math.random() * 9) + 1;
        } while (firstNumber % secondNumber !== 0);
        return `${firstNumber} ÷ ${secondNumber} =`;
    }
    return `${num1} ${operator} ${num2} =`;
}




