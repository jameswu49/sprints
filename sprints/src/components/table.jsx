export default function Table({ equation }) {
    const tableElements = [];
    for (let i = 0; i < 19; i++) {
        tableElements.push(
            <section className="flex w-[150%] print:px-10 print:w-full md:px-60 lg:w-full lg:px-80">
                <div className="border border-black w-[50%] pl-5 py-2 text-xl">
                    {equation()}
                </div>
                <div className="border border-black w-[50%] pl-5 py-2 text-xl">
                    {equation()}
                </div>
            </section>
        )
    }
    return (
        <section>
            {tableElements}
        </section>
    )
}