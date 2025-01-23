import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="hidden md:block w-full max-w-[1280px] h-[270px] bg-[#fff] mt-24 shadow-[0px_0px_25px_0px_#00000025] absolute top-0 rounded-2xl">
      <div className="w-full h-3/4 flex items-center justify-around">
        <Image
          src="/logo.png"
          width={365}
          height={140}
          className="hidden md:block"
          alt="logo image"
        />
        <div className="w-[525px] max-w-2/4 h-[80px] flex items-center justify-between shadow-[0px_0px_25px_0px_#00000025] rounded-2xl">
          <p className="w-2/5 h-full flex items-center justify-center text-base gap-[15px]">
            <PhoneIcon className="size-8 text-black-500" />
            15 99999-999
          </p>
          <Button>Entre em Contato</Button>
        </div>
      </div>
      <nav className="w-full h-1/4 flex items-center justify-center bg-[#00AFEF] rounded-b-2xl">
        <ul className=" w-2/3 flex items-center justify-between px-4 space-x-4 font-bold text-white">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Ínicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              Quem somos
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-500">
              Nossos serviços
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-blue-500">
              Depoimentos
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
