"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContactItem {
  icon: ReactNode
  label: string
  value: string
}

interface ContactSectionProps {
  title?: string
  contactItems: ContactItem[]
  mapSrc: string
  whatsappIcon: ReactNode
  className?: string
}

export function ContactSection({
  title = "Contáctanos",
  contactItems,
  mapSrc,
  whatsappIcon,
  className,
}: ContactSectionProps) {
  return (
    <section
    id="contact"
      className={cn(
        "w-full max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6",
        className
      )}
    >
      {/* Mapa */}
      <div className="rounded-2xl overflow-hidden shadow-lg border bg-muted">
        <iframe
          src={mapSrc}
          loading="lazy"
          allowFullScreen
          className="w-full h-[300px] md:h-full"
        ></iframe>
      </div>

      {/* Información */}
      <div className="flex flex-col md:flex-row gap-6 p-4 bg-background rounded-2xl shadow-lg border">
        {/* Info de contacto */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <ul className="space-y-4">
            {contactItems.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="text-primary">{item.icon}</span>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center justify-center">
          {whatsappIcon}
        </div>
      </div>
    </section>
  )
}
