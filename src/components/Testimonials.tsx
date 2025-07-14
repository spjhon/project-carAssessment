import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

import { Star } from "lucide-react";

const testimonials: TestimonialProps[] = [
  {
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUNVplicssvr1X9_dptk09nSrvcyUH2ojNSbn9xLAQWdyiwaVU=w108-h108-p-rp-mo-br100",
    name: "Kaiho company",
    userName: "google reviews",
    comment: "Excelente servicios, el me hizo el Peritaje a mi carro y fue un peritaje muy completo",
  },
  {
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVdsYT8Lsx7ZWqG2NaBBEXUmWAs7lsOsDrw9o49wkMTOYeOLOMY=w108-h108-p-rp-mo-br100",
    name: "Santiago Velasquez",
    userName: "google reviews",
    comment:
      "Muy buenos los servicios! Felicidades.",
  },

  {
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVM0_VcaWBz7RPZdgvlVhHCYX48ceQrKqcfNeuAN0qX0dKx-1Q=w108-h108-p-rp-mo-br100",
    name: "AUTOBIG CDA",
    userName: "google reviews",
    comment:
      "Son muy honestos! Si vas a comprar vehículo llévalo a dónde ellos!",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocJq4fSUq8UEGa1hy3nZTuw3DNje4i5nhiWAnH3pjSpCa-uPyw=w108-h108-p-rp-mo-br100",
    name: "Nara Escala",
    userName: "google reviews",
    comment:
      "Precios competitivos y un excelente trabajo, los recomiendo al 100%",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocLgW_OoK8p3NacmRqmYDirBrbVLqk6jq0v96ZyDY2lMQx_69Tk=w108-h108-p-rp-mo-br100",
    name: "Juan Manuel Avendaño Cortes",
    userName: "google reviews",
    comment:
      "Excelente servicio. Rapidos, efecticos y amables.",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocJJNMhLlGMIPT_e9U55gO6UTkl3h5T0urt2FSS176sZccH_ZQ=w108-h108-p-rp-mo-br100",
    name: "Katherine Lopez Rincon",
    userName: "google reviews",
    comment:
      "Ayudan a la resolución de problemas a la hora de compra un vehículo. Son muy claros con la información.",
  },
];

function FullStars() {
  return (
    <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );
}

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container my-30"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Lo que dicen los
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          CLIENTES{" "}
        </span>
        de
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          nosotros{" "}
        </span>
      </h2>

      <p className="text-xl text-center text-muted-foreground pt-4 pb-8">
        No tomes nuestra palabra por hecha, nuestros clientes tienen algo que decir.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={name}
              className="max-w-md md:break-inside-avoid overflow-hidden shadow-2xl"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <FullStars></FullStars>
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};




