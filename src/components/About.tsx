import { Statistics } from "./Statistics";
import pilot from "../../public/about.webp";

export const About = () => {
  return (
    <section
      id="about"
      className="container my-60 shadow-2xl"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot.src}
            alt=""
            className="max-w-[300px] object-contain rounded-lg mx-auto"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Acerca de{" "}
                </span>
                Nuestra Empresa
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Hace cuatro años, cuatro profesionales provenientes de distintas disciplinas decidimos unir experiencia y propósito para dar vida a una empresa de peritajes caracterizada por su rigor técnico y compromiso humano. Nacimos con la convicción de ofrecer soluciones confiables en un sector que demanda objetividad, transparencia y sensibilidad ante cada caso.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                El camino no ha sido sencillo. Afrontamos desafíos propios de todo emprendimiento: construir credibilidad, ganarnos la confianza del mercado y demostrar, con trabajo serio, la solidez de nuestro criterio. Cada obstáculo nos fortaleció y reafirmó nuestro compromiso de ejercer esta labor con responsabilidad y excelencia.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Hoy, nuestra trayectoria nos permite contar con un equipo técnico calificado, recursos de última generación y una reputación basada en resultados, ética profesional y cercanía con nuestros clientes. Hemos intervenido en múltiples procesos judiciales, administrativos y privados, aportando claridad y respaldo en momentos decisivos.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Seguimos trabajando con la misma convicción del primer día: brindar peritajes responsables, oportunos y confiables, entendiendo que detrás de cada informe hay personas, intereses y decisiones que merecen respeto y total transparencia.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};