import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { User, CarFront} from "lucide-react";
import { ReactNode } from "react";

import Image from "next/image";
interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  url: string;
}

const features: FeatureProps[] = [
  {
    icon: <CarFront />,
    title: "Zona de Revicion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    url: "https://images.unsplash.com/photo-1658351354155-e854d19233e0?q=80&w=1155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <User />,
    title: "Amplia Sala de Espera",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    url: "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  
];

export const InfraestructureBanner = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center my-60"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Amplias{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Instalaciones{" "}
        </span>
        Para ti y tu vehiculo
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
        {features.map(({ icon, title, description, url }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 w-[50%]"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>

            <Image
              src={url}
              alt="Front Car"
              width={265}
              height={150}
              className="mx-auto rounded-xl border shadow-sm  drop-shadow-xl shadow-black/10 dark:shadow-white/10"
            >
            </Image>

          </Card>
        ))}
      </div>
    </section>
  );
};