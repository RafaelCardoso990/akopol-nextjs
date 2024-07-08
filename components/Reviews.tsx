'use client';

import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

// import swiper styles

import 'swiper/css';
import 'swiper/css/pagination';

//import required modules

import { Pagination } from 'swiper/modules';

// components

import { Swiper, SwiperSlide } from 'swiper/react';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Lucas Bernardo',
    job: 'Cliente',
    review:
      'Contratei a Akopol para uma empresa e fiquei impressionado com sua eficiência e profissionalismo.',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Laura Briorufino',
    job: 'Cliente',
    review:
      'Estavas com problemas em casa e a Akopol superou minhas expectativas. Recomendo!',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Lucas Andrada',
    job: 'Cliente',
    review:
      'A Akopol foi extremamente discreta e eficaz em minha industria. Excelente serviço!',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Ana Carolina',
    job: 'Cliente',
    review:
      'Contratamos a Akopol para auditoria em nossa empresa. O resultado foi além do esperado. Recomendo!',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Pedro Cardoso',
    job: 'Cliente',
    review:
      'A equipe da Akopol foi muito prestativa no nosso caso. Profissionais altamente competentes!',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Igor Alvares',
    job: 'Cliente',
    review:
      'Os detetives da Akopol foram essenciais na solução do caso da minha empresa. Profissionalismo exemplar!',
  },
];

const Reviews = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Avaliações</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
