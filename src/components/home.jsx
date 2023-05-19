import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="md:flex md:flex-col md:justify-center md:items-center md:h-screen">
            <Title />
            <section className="my-10 mx-auto w-fit md:grid md:grid-cols-3 md:gap-4 md:justify-center">
                <Link to="/addition"><Addition /></Link>
                <Link to="/subtraction"><Subtraction /></Link>
                <Link to="/mixed"><Mixed /></Link>
                <Link to="/multiplication"><Multiplication /></Link>
                <Link to="/division"><Division /></Link>
                <Link to="/multi"><Multi /></Link>
            </section>
        </div>
    )
}

function Title() {
    return (
        <h1 className="text-center text-4xl underline">Math Sprints</h1>
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

function Multiplication() {
    return (
        <section className="flex flex-col items-center w-fit">
            <p className="flex flex-col items-center text-lg font-bold underline">Multiplication</p>
            <div className="py-4 mx-2 mt-2 border border-black rounded-md flex justify-center items-end w-64 h-80 relative">
                <img className="h-full absolute top-0" src="images/times.png"
                    onMouseOver={e => (e.currentTarget.src = "images/times.gif")}
                    onMouseLeave={e => (e.currentTarget.src = "images/times.png")}
                    alt="" />
            </div>
        </section>
    )
}

function Division() {
    return (
        <section className="flex flex-col items-center w-fit">
            <p className="flex flex-col items-center text-lg font-bold underline">Division</p>
            <div className="py-4 mx-2 mt-2 border border-black rounded-md flex justify-center items-end w-64 h-80 relative">
                <img className="h-full absolute top-0" src="images/divide.png"
                    onMouseOver={e => (e.currentTarget.src = "images/divide.gif")}
                    onMouseLeave={e => (e.currentTarget.src = "images/divide.png")}
                    alt="" />
            </div>
        </section>
    )
}

function Multi() {
    return (
        <section className="flex flex-col items-center w-fit">
            <p className="flex flex-col items-center text-lg font-bold underline">Mixed Multiplication/Division</p>
            <div className="py-4 mx-2 mt-2 border border-black rounded-md flex justify-center items-end w-64 h-80 relative">
                <img className="h-full absolute top-0" src="images/mixed.png"
                    onMouseOver={e => (e.currentTarget.src = "images/mixed.gif")}
                    onMouseLeave={e => (e.currentTarget.src = "images/mixed.png")}
                    alt="" />
            </div>
        </section>
    )
}