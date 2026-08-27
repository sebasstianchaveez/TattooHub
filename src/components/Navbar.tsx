import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-black px-6 py-6 text-white">

      <div className="flex justify-center">
        <h1 className="text-4xl font-bold tracking-widest">
          TATTOOHUB
        </h1>
      </div>

      <div className="mt-6 flex justify-center gap-8">
        <Link to="/" className="nav-link">
          Inicio
        </Link>

        <Link to="/Gallery" className="nav-link">
          Gallery
        </Link>

        <Link to="/tatuadores" className="nav-link">
          Tatuadores
        </Link>

        <Link to="/contacto" className="nav-link">
          Contacto
        </Link>
      </div>

      <div className="mt-6 h-px bg-zinc-800" />

    </nav>
  )
}

export default Navbar