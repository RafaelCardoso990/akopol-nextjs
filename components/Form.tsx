'use client';

import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  MessageCircle,
} from 'lucide-react';

const Form: React.FC = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" placeholder="Nome" id="name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" id="email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Escreva sua mensagem aqui." />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Enviar
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
