export default function Table({ equation }) {
    const tableElements = [];
    for (let i = 0; i < 19; i++) {
        tableElements.push(
            <section className="flex mx-20">
                <div key={i} className="border border-black w-screen pl-5 py-2 text-xl">
                    {equation()}
                </div>
                <div key={i} className="border border-black w-screen pl-5 py-2 text-xl">
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