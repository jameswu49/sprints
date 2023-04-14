import Table from "./table"
import Header from "./header"
import "../index.css"

export default function Addition() {
    return (
        <section className="my-10">
            <Header />
            <Table equation={add} />
        </section>
    )
}

function add() {
    let num1 = 0, num2 = 0;
    
    while (num1 === 0) {
      num1 = Math.floor(Math.random() * 10);
    }
  
    while (num2 === 0) {
      num2 = Math.floor(Math.random() * 10);
    }
    
    return `${num1} + ${num2} =`;
  }
  

