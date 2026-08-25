import{useNavigate}from"react-router-dom";


type TattoCardProps = {
  title: string
  style: string
  image: string
}

function TattoCard({ title, style, image }: TattoCardProps) {

  const navigate = useNavigate();

  return (
    <article className="group overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

     <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover"
        />

        <div className="absolute inset-0 flex items-end bg-black/0 p-6 opacity-0 transition-all duration-500 group-hover:bg-black/50 group-hover:opacity-100">

          <div className="translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
              <h2 className="text-2xl font-bold text-white">
                {title}
              </h2>

              <p className="mt-1 text-sm text-zinc-300">
                {style}
              </p>

             <button
                onClick={() => navigate(`/tattoo/${title.toLowerCase()}`)}
                className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Ver tatuaje →
            </button>
              
          </div>

        </div>

      </div>

      <div className="p-5">
        <p className="text-white">{style}</p>
      </div>



      
    </article>
  )
}

export default TattoCard