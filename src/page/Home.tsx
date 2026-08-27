import Navbar from '../components/Navbar'
import{Link} from 'react-router-dom'
import TattooCard from '../components/TattooCard'
import blackwork from '../assets/Tattoos/blackwork.jpg'
import realismo from '../assets/Tattoos/Realismo.jpg'
import minimalista from '../assets/Tattoos/minimalista.jpg'



function Home (){
    return (
  <main className="min-h-screen bg-black flex">
    <Navbar />



    <section className="flex-1 p-10">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
            INSPIRACIÓN · ESTILO · ARTE
        </span>
        <h1 className="mt-4 text-4xl font-bold text-white">
             Descubre tu próximo tatuaje
        </h1>
        <p className="mt-4 text-white">
            Encuentra inspiración y descubre tatuadores increíbles.
        </p>

        <Link
            to="/Gallery"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-red-600 hover:text-white" >
                                                                                                                                                                               
            Explorar tatuajes
        </Link>

        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <TattooCard
                title="Blackwork"
                style="Tinta negra"
                image={blackwork}
            />

            <TattooCard
                title="Realismo"
                style="Alto detalle"
                image={realismo}
            />

            <TattooCard
                title="Minimalista"
                style="Línea fina"
                image={minimalista}
            />
        </div>
    </section>
  </main>
)



}

export default Home