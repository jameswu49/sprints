import Header from "../header"
import TkTable from "./tk-table";

export default function TkMixed() {
    return (
        <section className="my-10">
            <Header />
            <TkTable equation={mixed} />
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

    const dot = '●';
    const dots1 = dot.repeat(num1);
    const dots2 = dot.repeat(num2);

    return `${dots1} ${operator} ${dots2} =`;
}





