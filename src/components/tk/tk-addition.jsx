import Header from "../header"
import TkTable from "./tk-table";

export default function TkAddition() {
    return (
        <>
            <Header />
            <TkTable equation={add} />
        </>
    )
}
function add() {
    let num1 = 0;
    let num2 = 0;

    while (num1 === 0) {
        num1 = Math.floor(Math.random() * 10);
    }

    while (num2 === 0) {
        num2 = Math.floor(Math.random() * 5);
    }

    const dots1 = '●'.repeat(num1);
    const dots2 = '●'.repeat(num2);

    return `${dots1} + ${dots2} =`;
}

