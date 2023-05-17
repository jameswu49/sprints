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
    const firstNumber = Math.floor(Math.random() * 7) + 1;
    const secondNumber = Math.floor(Math.random() * 5) + 1;

    const dot = '●';
    const dots1 = dot.repeat(Math.max(firstNumber, secondNumber));
    const dots2 = dot.repeat(Math.min(firstNumber, secondNumber));

    return `${dots1} - ${dots2} =`;
}

