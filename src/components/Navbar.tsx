import { Link } from "react-router-dom"


function Navbar() {
    return(
        <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
            <h1 className="text-2xl font-bold">TattooHub</h1>

            <div className="flex gap-6">
                <Link to="/">Inicio</Link>
                <Link to="/Gallery">Gallery</Link>
                <Link to="/tatuadores">Tatuadores</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
        </nav>
    )
}
export default Navbar