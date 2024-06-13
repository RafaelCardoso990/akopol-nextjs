"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "MicroCam",
    name: "Filme discretamente",
    description: " Veículos, Roupas, Objetos, Residências, Empresas e Indústrias.",
  },
  {
    image: "/work/1.png",
    category: "MicroVox",
    name: "Digitais com sensores",
    description: "Objetos, Residências, Empresas e Veículos.",
  },
  {
    image: "/work/1.png",
    category: "MicroCam",
    name: "Camêras ocultas",
    description: "Óculos, Pen Drive, Rádio Relógio, Ursinho de Pelúcia, Luminárias e etc...",
  },
  {
    image: "/work/1.png",
    category: "MicroVox",
    name: "Áudio e Vídeo",
    description: "30 à 2.000 mts com Mini Vídeo Recorder.",
  },
  {
    image: "/work/1.png",
    category: "MicroVox",
    name: "Anti-trotes e ameaças",
    description: "Veículos, Telefones e Ambientes Residenciais, Empresariais e Industriais.",
  },
  {
    image: "/work/1.png",
    category: "Localizador",
    name: "Saiba onde",
    description: "Veículos e Caminhões com Plataforma Via Satélite.",
  },
  {
    image: "/work/1.png",
    category: "MicroVox",
    name: "Grave discretamente",
    description: "Escritórios, Residências, Veículos, Empresas, Caminhões, Canetas, Botões de camisa",
  },
];

//remove category duplicates

const uniqueCategories = [
  "Todos serviços",
  ...new Set(projectData.map((item) => item.category)),
];

const Equipment = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("Todos serviços");

  const filteredProjects = projectData.filter((project) => {
    // if category is "all prjects" return all project, else filter by category
    return category === "Todos serviços"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
         Equipamentos
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}></ProjectCard>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Equipment;
