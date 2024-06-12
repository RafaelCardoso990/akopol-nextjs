import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {  
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Building2
} from "lucide-react";
import { Key } from "react";

const infoData = [
  {
    icon: <Building2 size={20} />,
    text: "Agência Akopol Detetives Particulares",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55319999999999",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Rua Florêncio de Abreu, 681 - 4º Andar - Sala 407",
  },    
];

const qualificationData = [
  {
    title: "Formação",
    data: [
      {
        university: "Curso Superior",
        qualification: "Tecnologia em Investigação Profissional",
        years: "2024 - 2028",
      },
      {
        university: "M.T.E - Ministério do Trabalho e Emprego",
        qualification: "Registro Profissional de Jornalista",
        years: "2022 - 2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "areas",
    data: [
      {
        name: "Conjugal",
      },
      {
        name: "Familiar",
      },
      {
        name: "Empresarial",
      },
      {
        name: "Industrial",
      },
      {
        name: "Trabalhista",
      },      
    ],
  },  
];

const About = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Sobre nós
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Informações
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualificações 
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Áreas de atuação
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8 ">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-4">
                    Consultoria e Assessoria de Informações Privadas: Serviço Secreto Profissional
                    </h3>
                    <p className="subtitle max-auto xl:mx-0">
                    Todos os nossos Agentes foram treinados e capacitados para o uso de suas atribuições, pelo nosso Serviço de Inteligência para obter na Legalidade da Lei e da Profissão: Fotos, Filmagens, Depoimentos, Entrevistas e Declarações.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">RIBEIRÃO PRETO E REGIÃO.</div>
                      <div className="border-b border-border"></div>
                      <div>SP E REGIÃO.</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Nossa Jornada
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="flex flex-col gap-y-6">
                      {/* experience */}
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap size={32} />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "Formação").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "Formação").data.map(
                          (item: { university: any; qualification: any; years: any; }, index: Key | null | undefined) => {
                            const { university, qualification, years }= item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2"></div>
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -letf-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                <div>
                                  <div className="font-semibold text:cl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Atendemos casos:</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Áreas</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "areas").data.map((item: { name: any; }, index: Key | null | undefined) =>{
                          const {name} = item
                          return (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="font-medium h4">{name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>                    
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
