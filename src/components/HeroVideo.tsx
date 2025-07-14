import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
 
export function HeroVideo() {
  return (
    <section className="container mx-auto relative max-w-200 mb-30 mt-50 text-center">

      <h2 className="pb-6 mb-6 text-3xl md:text-4xl font-bold ">
        Conoce{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Jan Autos{" "}
        </span>
        por medio de nuestro video promocional
      </h2>

      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://images.unsplash.com/photo-1658351354155-e854d19233e0?q=80&w=1155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
}