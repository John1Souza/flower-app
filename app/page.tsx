import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Header from './components/Header';

export default function Page() {
  return (
    <>
      <div className='w-[1280px] h-full flex gap-[15px] items-center justify-center absolute z-[-999] top-0'>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
        <div className='w-full h-full bg-red-100'></div>
      </div>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
      </main>
    </>
  );
}
