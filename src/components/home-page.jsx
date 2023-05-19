import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="md:flex md:flex-col md:justify-center md:items-center md:h-screen">
            < Title />
            <section className="my-10 mx-auto w-fit md:flex md:justify-center">
                <Link to="/tk"><TkHome /></Link>
                <Link to="/upper"><Upper /></Link>
            </section>
        </div >
    )
}

function Title() {
    return (
        <h1 className="text-center text-4xl underline">Choose Your Grade Level</h1>
    )
}

function TkHome() {
    return (
        <section className="flex flex-col items-center w-fit">
            <p className="flex flex-col items-center text-lg font-bold underline">Tk</p>
            <div className="py-4 mx-2 mt-2 border border-black rounded-md flex justify-center items-end w-64 h-80 lg:mr-10 relative">
                <img className="h-full absolute top-0" src="images/tk.jpg"
                    alt="" />
            </div>
        </section>
    )
}

function Upper() {
    return (
        <section className="flex flex-col items-center w-fit">
            <p className="flex flex-col items-center text-lg font-bold underline">2nd Grade</p>
            <div className="py-4 mx-2 mt-2 border border-black rounded-md flex justify-center items-end w-64 h-80 lg:mr-10 relative">
                <img className="h-full absolute top-0" src="images/upper.png"
                    alt="" />
            </div>
        </section>
    )
}