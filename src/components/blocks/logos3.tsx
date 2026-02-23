// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading,
  logos = [
    // ... existing logos ...
    {
      id: "logo-1",
      description: "Logo 1",
      image: "/images/Clientlogos/24 7.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/images/Clientlogos/AlRabeh Hr Logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "/images/Clientlogos/Alrabeh-INT.svg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "/images/Clientlogos/Badash .jpg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "/images/Clientlogos/Bila-Logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "/images/Clientlogos/Dar ward.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "/images/Clientlogos/Najd hall.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "/images/Clientlogos/SANS LOGO NEW.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-9",
      description: "Logo 9",
      image: "/images/Clientlogos/Tarqeem.jpg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-10",
      description: "Logo 10",
      image: "/images/Clientlogos/absher.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-11",
      description: "Logo 11",
      image: "/images/Clientlogos/al amor.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-12",
      description: "Logo 12",
      image: "/images/Clientlogos/alma water.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-13",
      description: "Logo 13",
      image: "/images/Clientlogos/black parking.jpg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-14",
      description: "Logo 14",
      image: "/images/Clientlogos/chill lounge.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-15",
      description: "Logo 15",
      image: "/images/Clientlogos/cornet.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-16",
      description: "Logo 16",
      image: "/images/Clientlogos/deva logo 1.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-17",
      description: "Logo 17",
      image: "/images/Clientlogos/exafai.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-18",
      description: "Logo 18",
      image: "/images/Clientlogos/frvr lab.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-19",
      description: "Logo 19",
      image: "/images/Clientlogos/ifbs .png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-20",
      description: "Logo 20",
      image: "/images/Clientlogos/maple.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-21",
      description: "Logo 21",
      image: "/images/Clientlogos/mawj logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-22",
      description: "Logo 22",
      image: "/images/Clientlogos/nongshim.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-23",
      description: "Logo 23",
      image: "/images/Clientlogos/nozol in.svg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-24",
      description: "Logo 24",
      image: "/images/Clientlogos/pharo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-25",
      description: "Logo 25",
      image: "/images/Clientlogos/qasr el seyooh.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-26",
      description: "Logo 26",
      image: "/images/Clientlogos/saeq.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-27",
      description: "Logo 27",
      image: "/images/Clientlogos/sand brew.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-28",
      description: "Logo 28",
      image: "/images/Clientlogos/seet-logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-29",
      description: "Logo 29",
      image: "/images/Clientlogos/super studio.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-30",
      description: "Logo 30",
      image: "/images/Clientlogos/swissotel.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-31",
      description: "Logo 31",
      image: "/images/Clientlogos/tayseer.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-32",
      description: "Logo 32",
      image: "/images/Clientlogos/veagle logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-33",
      description: "Logo 33",
      image: "/images/Clientlogos/ze logo.png",
      className: "h-20 w-auto",
    },
  ],
}: Logos3Props) => {
  const { language, dir } = useLanguage();
  const t = translations[language];
  const displayHeading = heading || t.logos.heading;

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
          {displayHeading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true, direction: dir }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
