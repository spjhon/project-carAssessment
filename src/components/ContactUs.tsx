import { ContactSection } from "@/components/ui/contact"
import { MapPin, Phone, Mail } from "lucide-react"
import WassapLogo from "../../public/WassapLogo"

export default function ContactPage() {
  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Dirección",
      value: "Cra. 15 # 100-25, Bogotá, Colombia",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Teléfono",
      value: "+57 310 000 0000",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Correo Electrónico",
      value: "contacto@ejemplo.com",
    },
  ]

  return (
    <ContactSection
      title="Visítanos"
      
      contactItems={contactItems}
      mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.992983479836!2d-74.04450272417203!3d4.710737641603824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99d9c5d79a65%3A0x7a9e4c8e16d8a5d4!2sParque%20de%20la%2093!5e0!3m2!1ses!2sco!4v1689620554912!5m2!1ses!2sco"
      whatsappIcon={
        <a
                href="https://wa.me/3147045347"
                target="_blank"
                rel="noopener"
                title="Escribenos a whatsapp"
                className=""
              >
        <WassapLogo />
        </a>
      }
    />
  )
}


