import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Investigação',
    description: 'Traição Pré Nupcial',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Teste de Fidelidade',
    description: '',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Pensão Alimentícia',
    description: 'Fraudes Processuais',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Localização ',
    description: 'Pessoas, bens e imóveis',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Investigação',
    description: 'Empregados fingindo enfermidades e incidentes',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'App Development',
    description: 'Fraudes Processuais Trabalhistas',
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mg-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Serviços Prestados
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center ">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
