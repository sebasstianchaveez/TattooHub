import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import TattooCard from "../components/TattooCard";
import blackwork from "../assets/Tattoos/blackwork.jpg";
import realismo from "../assets/Tattoos/Realismo.jpg";
import minimalista from "../assets/Tattoos/minimalista.jpg";
import Caro from "../assets/Tattoos/Caro.jpg";
import { useEffect, useState } from "react";

function Home() {
  const [showReel, setShowReel] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowReel(true);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen  w-full bg-black flex">
      <Navbar />

      <section className="w-full">

       
    <div className="hero-banner relative isolate w-full overflow-hidden bg-black">

          {/* CAPA 1: VIDEO DE FONDO */}

        {showReel && (
            <video
                className="hero-video absolute inset-0 z-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source
                    src="/videos/tattoohub-hero.mp4"
                    type="video/mp4"
                />
            </video>
        )}

          {/* CAPA 2: OSCURECER EL VIDEO */}

          <div className="absolute inset-0 z-10 bg-black/60" />

          {/* CAPA 3: CONTENIDO */}

          <div className="relative z-20 flex min-h-130 items-center p-8 md:p-14">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-300">
                INSPIRACIÓN · ESTILO · ARTE
              </span>

              <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
                Descubre tu próximo tatuaje
              </h1>

              <p className="mt-4 text-lime-lg text-zinc-300">
                Encuentra inspiración y descubre tatuadores increíbles.
              </p>

              <Link
                to="/Gallery"
                className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-red-600 hover:text-white"
              >
                Explorar tatuajes →
              </Link>
            </div>
          </div>
        </div>

        <div className="home-grid">
          <TattooCard title="Blackwork" style="Tinta negra" image={blackwork} />

          <TattooCard title="Caro" style="Línea fina" image={Caro} />

          <TattooCard title="Realismo" style="Alto detalle" image={realismo} />

          <TattooCard
            title="Minimalista"
            style="Línea fina"
            image={minimalista}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
