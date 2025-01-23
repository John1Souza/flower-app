import Image from "next/image";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Rights() {
  return (
    <footer className="w-full h-[500px] flex flex-col items-center justify-between bg-secondary text-neutral">
      <div className="w-full h-[5px] bg-gradient-to-r from-secondary from-0% via-blue-400 via-50% to-secondary to-100%"></div>
      <div className="w-full max-w-[1280px] h-1/4 flex">
        <div>
          <Image
            src="/logo.png"
            width={255}
            height={65}
            className="hidden md:block"
            alt="logo image"
          />
          <p className="ml-4">CNPJ: 00.000.000/0000-00</p>
        </div>
        <div className="w-full h-full flex flex-col items-left justif-between">
          <p className="text-base font-bold text-blue-400 mb-8">Links</p>
          <ul>
            <li>Ínicio</li>
            <li>Quem somos</li>
            <li>Nossos tratamentos</li>
            <li>Depoimentos</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col items-left justif-between">
          <p className="text-base font-bold text-blue-400 mb-8">Contatos</p>
          <ul>
            <li className="flex gap-2 items-center">
              <PhoneIcon className="size-5 text-blue-400" /> 15 9.8888-8888
            </li>
            <li className="flex gap-2 items-center">
              <PhoneIcon className="size-5 text-blue-400" /> 15 9.8888-8888
            </li>
            <li className="flex gap-2 items-center">
              <MapPinIcon className="size-5 text-blue-400" />
              Av. João da Costa, 123 Vila Rica - Sorocaba/SP
            </li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col items-left justif-between">
          <p className="text-base font-bold text-blue-400 mb-8">Contatos</p>
          <ul>
            <li className="flex gap-2">facebook.com/empresa</li>
            <li className="flex gap-2">instagram.com/empresa</li>
            <li className="flex gap-2">x.com/empresa</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[90px] flex items-center justify-center bg-primary">
        <h1>In the future, here will have a good and beatiful footer!😊</h1>;
      </div>
    </footer>
  );
}
