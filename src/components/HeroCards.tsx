import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Linkedin} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import HorizontalScanner from "../../public/horizontalScanner.webp";
import VerticalImage from "../../public/verticalCar.webp";

export const HeroCards = () => {
  return (
    <div className="hidden xl:flex flex-row flex-wrap gap-30 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[30px] drop-shadow-2xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="JP"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Ricardo Montaner</CardTitle>
            <CardDescription>@Mazda_Manizales</CardDescription>
          </div>
        </CardHeader>

        <CardContent>El mejor lugar de peritajes de la ciudad de Manizales!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-10 w-80 flex flex-col justify-center items-center drop-shadow-2xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2 w-60">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Jan Poll</CardTitle>
          <CardDescription className="font-normal text-primary">
            Perito en Jefe
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Nunca compraria un auto sin un correcto peritaje.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/*Vertica Image */}
      <Image
        src={VerticalImage.src}
      alt="Front Car"
      width={265}
      height={150}
      className="absolute top-[165px] left-[75px] rounded-xl border shadow-2xl  drop-shadow-xl shadow-black/10 dark:shadow-white/10"
      
      >
        </Image>

      {/* Horizontal Image */}
      
        <Image
        src={HorizontalScanner.src}
      alt="Scanner"
      width={350}
      height={150}
      className="absolute -right-[10px] -bottom-[35px] rounded-xl border shadow-2xl  drop-shadow-xl shadow-black/10 dark:shadow-white/10"
      
      >
        </Image>
      


    </div>
  );
};