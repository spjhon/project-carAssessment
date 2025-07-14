"use client"

//Importacion de link de next
import Link from "next/link";

//Importacion de los states
import { useState } from "react";

//Importacion de los componentes de shadcn
import {
  NavigationMenu,
 
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

//Importacion de iconos de radix y lucide
import { buttonVariants } from "./ui/button";
import { Menu, CarFront } from "lucide-react";

//Importacion de custom component para el toggle
import { ModeToggle } from "./mode-toggle";
import WassapLogo from "../../public/WassapLogo";

//Props para la barra de navegacion
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#OurWork",
    label: "Nuestro Trabajo",
  },
  {
    href: "#pricing",
    label: "Servicios y Precios",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contact",
    label: "Contacto",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="container flex flex-row justify-between items-center mx-auto px-5">

        <Link
          rel="noreferrer noopener"
          href="/"
          className="ml-2 font-bold text-xl flex"
        >
          <CarFront />
          JAN AUTOS - Peritajes y Asesorias
        </Link>

        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="h-14">
            {/* desktop */}
            <nav className="hidden xl:flex gap-2">
              {routeList.map((route: RouteProps, i) => (
                <Link
                  rel="noreferrer noopener"
                  href={route.href}
                  key={i}
                  className={`text-[17px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </NavigationMenuList>
        </NavigationMenu>

        {/* mobile */}
        <span className="flex xl:hidden">
          <ModeToggle />

          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <SheetTrigger className="px-2">
              <Menu className="flex h-5 w-5"onClick={() => setIsOpen(true)}></Menu>
            </SheetTrigger>

            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle className="font-bold text-xl">
                  Jan Autos - Peritajes y Asesorias
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col justify-center items-center gap-2 mt-4">

                {routeList.map(({ href, label }: RouteProps) => (
                  <a
                    rel="noreferrer noopener"
                    key={label}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {label}
                  </a>
                ))}

                <a
                  rel="noreferrer noopener"
                  href="https://wa.me/573215224583"
                  target="_blank"
                  className={`w-50 border ${buttonVariants({ variant: "secondary" })} flex items-center justify-center h-5 gap-2`}
                  aria-label="Contactar por WhatsApp"
                >
                  <WassapLogo />
                  <span className="text-sm">+57 321 522 45 83</span>
                </a>

                <address className="h-7 flex items-center justify-center not-italic text-sm text-center">
                  Carrera 25 #17-66 Manizales, Colombia
                </address>

              </nav>
              
            </SheetContent>
            
          </Sheet>
        </span>
            
        <div className="hidden xl:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://wa.me/573215224583"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })} flex items-center justify-center h-5 gap-2`}
              aria-label="Contactar por WhatsApp"
            >
              <WassapLogo />
              <span className="text-sm">+57 321 522 45 83</span>
            </a>

            <ModeToggle />

        </div>


      </div>
    </header>
  );
};