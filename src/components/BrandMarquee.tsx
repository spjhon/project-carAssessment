
import { Marquee } from "@/components/magicui/marquee";
import Toyota from "./brands/toyota";
import Honda from "./brands/honda";
import Jeep from "./brands/jeep";
import Bmw from "./brands/bmw";
import Ford from "./brands/ford";
import Kia from "./brands/kia";
import Chevrolet from "./brands/chevrolet";
import Mazda from "./brands/mazda";
import Nissan from "./brands/nissan";

const reviews = [
  {
    
    id: "01",
    brand: <Mazda/>
  },
  {
    
    id: "02",
    brand: <Honda/>
  },
  {
    
    id: "03",
    brand: <Jeep/>
  },
  {
   
    id: "04",
    brand: <Bmw/>
  },
  {
    id: "05",
    
    brand: <Ford/>
  },
  {
    
    id: "06",
    brand: <Kia/>
  },
  {
    
    id: "07",
    brand: <Chevrolet/>
  },
  {
    
    id: "08",
    brand: <Toyota/>
  },
  {
    
    id: "09",
    brand: <Nissan/>
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({brand}: {brand: React.ReactNode}) => {
  return (
    <div className="">
    {brand}
    </div>
  );
};

export function BrandMarquee() {
  return (
    <section className="my-60">
      <h2 className="text-center text-3xl md:text-4xl font-bold py-10 ">
        Atendemos todas las{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          MARCAS{" "}
        </span>
        
      </h2>
    <div className="container mx-auto relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((brand) => (
          <ReviewCard key={brand.id} {...brand} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((brand) => (
          <ReviewCard key={brand.id} {...brand} />
        ))}
      </Marquee>
      
    </div>
    </section>
  );
}
