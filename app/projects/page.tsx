'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Traição Pré Nupcial',
    description: 'Descubra traições antes do casamento',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Investigação',
    name: 'Teste de fidelidade',
    description: 'Integridade em relacionamentos',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Pensão Alimentícia',
    name: 'Fraudes Processuais',
    description: 'Descubra fraudes na pensão',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'Levantamentos',
    name: 'Dados',
    description: 'Nomes, endereços e telefones.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Localização',
    name: 'Descubra onde',
    description: 'Pessoas, bens e imóveis em qualquer cidade',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Investigação',
    name: 'Funcionários',
    description: 'Fingindo enfermidades e incidentes',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Fraudes',
    description: 'Processuais Trabalhistas',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Acompanhamento',
    name: 'Fique por perto',
    description: 'Adolescentes e idosos',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Auditoria',
    name: 'Fraudes',
    description: 'Digital em Smartphone ou Computador',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Furtos',
    description: 'Continuos em residências',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Vida pregressa',
    description: 'Na área profissional ou pessoal',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Varredura',
    description: 'Telefones, ambientes e veículos',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Vida pregressa',
    description: 'Na área profissional ou pessoal',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Localização',
    name: 'Acompanhe',
    description: 'Veículos via Satélite',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Vida pregressa',
    description: 'Na área profissional ou pessoal',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Particulares',
    description: ' Pedofilia, maus Tratos e agressão contra mulheres',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Particulares',
    description: 'Maus Tratos e agressão contra crianças e idosos',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Gravações',
    name: 'Filmagens',
    description: 'Trotes, calúnias e Difamações',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Gravações',
    name: 'Filmagens',
    description: 'Constrangimentos, abusos e intimidações',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Gravações',
    name: 'Filmagens',
    description: 'Ameaças recebidas de 3ºs',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Gravações',
    name: 'Filmagens',
    description: 'Trotes, calúnias e Difamações,',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Investigação',
    name: 'Particulares',
    description: 'Maus Tratos e agressão contra crianças e idosos',
    link: '/',
    github: '/',
  },

  {
    image: '/work/1.png',
    category: 'Auditoria',
    name: 'Digital',
    description: 'Em computadores de empresas e industrias',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Investigação',
    name: 'Fraude',
    description: 'Trabalhista - Empresarial ou Indústrial',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Investigação',
    name: 'Má conduta',
    description: 'Sócios, gerentes e funcionários',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'Levantamentos',
    name: 'Dados',
    description: 'Nomes, endereços e telefones de pessoas e empresas.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Investigação',
    name: 'Furtos',
    description: 'Continuos em estabelecimentos comerciais e industriais',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Assessoria',
    name: 'Consultoria',
    description: 'Contra-Espionagem: Empresarial e industrial',
    link: '/',
    github: '/',
  },
];

//remove category duplicates

const uniqueCategories = [
  'Todos serviços',
  ...new Set(projectData.map(item => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('Todos serviços');

  const filteredProjects = projectData.filter(project => {
    // if category is "all prjects" return all project, else filter by category
    return category === 'Todos serviços'
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Serviços Prestados
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

export default Projects;
