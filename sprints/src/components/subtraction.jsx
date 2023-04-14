import Header from "./header"
import Table from "./table"

export default function Subtraction() {
    return (
        <section className="mt-5 mb-10">
            <Header />
            <Table equation={subtraction} />
        </section>
    )
}

function subtraction() {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;
    return `${Math.max(firstNumber, secondNumber)} - ${Math.min(firstNumber, secondNumber)} =`;
}
