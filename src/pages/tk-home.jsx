import { Link } from "react-router-dom"

export default function TkHome() {
    return (
        <div className="md:flex md:flex-col md:justify-center md:items-center md:h-screen">
            <Title />
            <section className="my-10 mx-auto w-fit md:flex md:justify-center md:items-center">
                <Link to="/tkaddition"><Addition /></Link>
                <Link to="/tksubtraction"><Subtraction /></Link>
                <Link to="/tkmixed"><Mixed /></Link>
            </section>
        </div>
    )
}

function Title() {
    return (
        <h1 className="text-center text-4xl underline">TK Sprints</h1>
    )
}

function Addition() {
    return (
        <section className="flex flex-col items-center w-fit">
            <p className="flex flex-col items-center text-lg font-bold underline">Addition</p>
            <div className="py-4 mx-2 mt-2 border border-black rounded-md flex justify-center items-end w-64 h-80 lg:mr-10 relative">
                <img className="h-full absolute top-0" src="images/add.png"
                    onMouseOver={e => (e.currentTarget.src = "images/add.gif")}
                    onMouseLeave={e => (e.currentTarget.src = "images/add.png")}
                    alt="" />
            </div>
        </section>
    )
}

function Subtraction() {
    return (
        <section className="flex flex-col items-center w-fit">
            <p className="flex flex-col items-center text-lg font-bold underline">Subtraction</p>
            <div className="py-4 mx-2 mt-2 border border-black rounded-md flex justify-center items-end w-64 h-80 relative">
                <img className="h-full absolute top-0" src="images/minus.png"
                    onMouseOver={e => (e.currentTarget.src = "images/minus.gif")}
                    onMouseLeave={e => (e.currentTarget.src = "images/minus.png")}
                    alt="" />
            </div>
        </section>
    )
}

function Mixed() {
    return (
        <section className="flex flex-col items-center w-fit">
            <p className="flex flex-col items-center text-lg font-bold underline">Mixed - Addition/Subtraction</p>
            <div className="py-4 mx-2 mt-2 border border-black rounded-md flex justify-center items-end w-64 h-80 relative">
                <img className="h-full absolute top-0" src="images/mixed.png"
                    onMouseOver={e => (e.currentTarget.src = "images/mixed.gif")}
                    onMouseLeave={e => (e.currentTarget.src = "images/mixed.png")}
                    alt="" />
            </div>
        </section>
    )
}
