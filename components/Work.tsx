"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components

// import swiper styles

import "swiper/css";
import "swiper/css/pagination";

//import required modules

import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/work/1.png",
    category: "Investigação",
    name: "Traição Pré Nupcial",
    description: "Descubra traições antes do casamento",
  },
  {
    image: "/work/2.png",
    category: "Investigação",
    name: "Teste de fidelidade",
    description: "Integridade em relacionamentos",
  },
  {
    image: "/work/3.png",
    category: "Pensão Alimentícia",
    name: "Fraudes Processuais",
    description: "Descubra fraudes na pensão",
  },
  {
    image: "/work/4.png",
    category: "Levantamentos",
    name: "Dados",
    description: "Nomes, endereços e telefones.",
  },
  {
    image: "/work/2.png",
    category: "Localização",
    name: "Descubra onde",
    description: "Pessoas, bens e imóveis em qualquer cidade",
  },
  {
    image: "/work/3.png",
    category: "Investigação",
    name: "Funcionários",
    description: "Fingindo enfermidades e incidentes",
  },
  {
    image: "/work/1.png",
    category: "Investigação",
    name: "Fraudes",
    description: "Processuais Trabalhistas",
  },
  
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      {/* text */}
      <div className="container mx-auto">
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col
         justify-center items-center xl:items-start "
        >
          <h2 className="section-title mb-4">Serviços Prestados</h2>
          <p className="subtitle mb-8">
            Todos os serviços com provas concretas: Relatórios, filmagens,
            gravações e/ou fotos.
          </p>
          <Link href={"/projects"}>
            <Button>Todos Serviços</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-[45px] top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides  */}
            {projectData.slice(0.4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
