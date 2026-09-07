import{useNavigate}from"react-router-dom";


type TattoCardProps = {
  title: string
  style: string
  image: string
}

function TattoCard({ title, style, image }: TattoCardProps) {

  const navigate = useNavigate();

  return (
    <article className="tattoo-card">

     <div className="tattoo-image-container">
        <img
          src={image}
          alt={title}
          className="tattoo-image"
        />

        <div className=" tattoo-overlay">

          <div className="tattoo-content">
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

   



      
    </article>
  )
}

export default TattoCard