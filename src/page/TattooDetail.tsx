import { useParams } from 'react-router-dom'
import { tattoos } from '../data/tattoos'

function TattooDetail() {
  const { id } = useParams()

  const tattoo = tattoos.find((tattoo) => tattoo.id === id)

  if (!tattoo) {
    return (
      <main>
        <h1>Tatuaje no encontrado</h1>
      </main>
    )
  }

return (
  <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-2">

            <div className="overflow-hidden rounded-2xl">
                <img
                    src={tattoo.image}
                    alt={tattoo.title}
                    className="h-full max-h-[600px] w-full object-cover"
                />
            </div>

                <div className="flex flex-col justify-center">

                    <p className="mb-3 text-sm uppercase tracking-widest text-red-500">
                        Tattoo
                    </p>

                    <h1 className="text-5xl font-bold">
                        {tattoo.title}
                    </h1>

                    <p className="mt-4 text-lg text-zinc-400">
                        {tattoo.style}
                    </p>

                    <div className="my-8 h-px bg-zinc-800" />

                    <p className="leading-7 text-zinc-300">
                        Descubre este estilo de tatuaje y conoce más sobre el trabajo
                        artístico detrás de esta pieza.
                    </p>

                    <button
                        onClick={() => window.history.back()}
                        className="mt-8 w-fit rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500"
                    >
                        ← Volver a la galería
                    </button>

                </div>

            </div>

        </div>
    </main>
)
}

export default TattooDetail