import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { PhoneIcon } from '@heroicons/react/24/outline';

export default function Header(){
    return (
        <div className="w-full max-w-[1280px] h-[270px] bg-[#fff] mt-28 shadow-[0px_0px_25px_0px_#00000025] rounded-2xl">
            <div className='w-full h-2/3 flex items-center justify-around'>
                <Image 
                    src="/logo.png"
                    width={365}
                    height={140}
                    className='hidden md:block'
                    alt="logo image"
                />
                <div className='w-[525px] max-w-2/4 h-[80px] flex items-center justify-center shadow-[0px_0px_25px_0px_#00000025] rounded-2xl'>
                    <p className='w-full h-full flex items-center justify-center text-base gap-[15px]'><PhoneIcon className="size-6 text-black-500" />15 99999-999</p>
                    <Button>Entre em Contato</Button>
                </div>
            </div>
            <nav className='w-full h-1/3 flex items-center justify-center bg-[#00AFEF] rounded-b-2xl'>
                <ul className=" w-2/3 flex items-center justify-between px-4 space-x-4 font-bold text-white">
                    <li>
                        <Link href="/" className="hover:text-gray-300">
                            Ínicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">
                            Quem somos
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="hover:text-gray-300">
                            Nossos serviços
                        </Link>
                    </li>
                    <li>
                        <Link href="/testimonials" className="hover:text-gray-300">
                            Depoimentos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>  
    )  
};