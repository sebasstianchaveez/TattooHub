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
                    className="tattoo-image-enter h-full max-h-150 w-full object-cover"
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

                    <p className="leading-7 text-1xl text-zinc-300">
                       {tattoo.description}
                    </p>


                    <div className="mt-8 grid grid-cols-2 gap-4">

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                        <p className="text-sm text-zinc-500">Detalle</p>
                        <p className="mt-1 font-semibold text-white">
                        {tattoo.detail}
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                        <p className="text-sm text-zinc-500">Ubicación</p>
                        <p className="mt-1 font-semibold text-white">
                        {tattoo.placement}
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                        <p className="text-sm text-zinc-500">Duración</p>
                        <p className="mt-1 font-semibold text-white">
                        {tattoo.duration}
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                        <p className="text-sm text-zinc-500">Dificultad</p>
                        <p className="mt-1 font-semibold text-white">
                        {tattoo.difficulty}
                        </p>
                    </div>

                    </div>

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