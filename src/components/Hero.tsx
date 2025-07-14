import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import WassapLogo from "../../public/WassapLogo";

export const Hero = () => {
  return (
    <section className="my-15 grid xl:grid-cols-2 place-items-center md:gap-10">

      <div className="text-center lg:text-start space-y-6">

        <main className="text-5xl md:text-6xl font-bold">

          <h1 className="inline">
             Tu {" "}
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              SEGURIDAD
            </span>{" "}
            empieza antes de arrancar.
          </h1>

          {" "}Pide tu{" "}

          <h2 className="inline">
            <span className="
              inline 
              bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] 
              text-transparent 
              bg-clip-text">
              PERITAJE
            </span>
            {" "}
            hoy.
          </h2>

        </main>

        <p className="
          text-xl text-muted-foreground 
          md:w-10/12 
          mx-auto lg:mx-0">
          Con Jan Autos tu próximo carro, sin sorpresas. Nosotros lo revisamos por ti.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">

          <Button className="w-full md:w-1/3">

            <a
              rel="noreferrer noopener"
              href="https://wa.me/573215224583"
              target="_blank"
              className={`w-full flex items-center justify-center h-5 gap-2`}
              aria-label="Contactar por WhatsApp"
            >
              <WassapLogo />
              <span className="text-sm">Reserva tu cita ahora</span>
            </a>
          </Button>
          

        </div>

      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>
      
    </section>
  );
};