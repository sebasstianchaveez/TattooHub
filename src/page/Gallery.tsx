import Navbar from "../components/Navbar"
import TattooCard from '../components/TattooCard'
import blackwork from '../assets/Tattoos/blackwork.jpg'
import realismo from '../assets/Tattoos/Realismo.jpg'
import minimalista from '../assets/Tattoos/minimalista.jpg'
import { useState } from 'react'


const tattoos =[
    {
        title: 'Blackwork',
        style: 'Tinta negra',
        image:  blackwork,

    },
    {
        title: 'Realismo',
        style: 'Alto detalle',
        image:  realismo,
    },
    {
        title: 'Minimalista',
        style: 'LInea fina',
        image:  minimalista,

    }
]


function Gallery() {

    const [filter, setFilter] = useState('Todos')

    const filteredTattoos = tattoos.filter((tattoo) => {
        return filter === 'Todos' || tattoo.title === filter
    })


    return(
        <main className="min-h-screen bg-black p-10 text-zinc-600">
            <Navbar />
            <section className="flex-1 p-10">
                <h1 className="text-4xl font-bold">
                    Galeria de tatuajes
                </h1>


                <p className="mt-4 text-zinc-400">
                    Explora diferentes estilos de tatuajes.
                </p>

                <div className="mt-8 flex gap-3">

                    <button   
                        className={`rounded-lg px-4 py-2 transition ${
                            filter === 'Todos'
                            ? 'bg-red-600 text-white'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-600'
                        }`}
                        onClick={() => setFilter('Todos')}
                        >
                        Todos
                    </button>

                    <button
                        className={`rounded-lg px-4 py-2 transition ${
                            filter === 'Blackwork'
                            ? 'bg-red-600 text-white'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-600'
                        }`}
                        onClick={() => setFilter('Blackwork')}
                        >
                        Blackwork
                    </button>

                    <button className={`rounded-lg px-4 py-2 transition ${
                        filter === 'Realismo'
                        ? 'bg-red-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-600'
                    }`}
                        onClick={() => setFilter('Realismo')}>
                        Realismo
                    </button>

                    <button className={`rounded-lg px-4 py-2 transition ${
                        filter === 'Minimalista'
                        ? 'bg-red-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-600'
                    }`}
                        onClick={() => setFilter('Minimalista')}>
                        Minimalista
                    </button>

                </div>

                <p className="mt-4 text-white">
                    Filtro actual: {filter}
                </p>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredTattoos.map((tattoo) => (
                        <TattooCard
                            key={`${filter}-${tattoo.title}`}
                            title={tattoo.title}
                            style={tattoo.style}
                            image={tattoo.image}
                        />
                    ))}
                    
                   
                </div>
             
            </section> 
        </main>
    )
}

export default Gallery