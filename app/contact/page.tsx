'use client';
import Form from '@/components/Form';
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Diga olá</div>
            </div>
            <h1 className="h1 max-w-md mb-8">Vamos trabalhar juntos.</h1>
            <p className="subtitle max-w-[400px]">
              Proteja a sua Família, Empresa, Comércio ou Indústria! <br />{' '}
              Contrate os Serviços da Agência Akopol - Detetives Profissionais
              Particulares <br />
              Considerada uma das melhores Agências de Investigações do País!
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>akopol@gmail.com</div>
            </div>
            {/* addres */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Rua Florêncio de Abreu, 681 - 4º Andar - Sala 407</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+55319999999999</div>
            </div>
          </div>          
        </div>
        {/* info text */}
      </div>
    </section>
  );
};

export default Contact;
