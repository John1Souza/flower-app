import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Page() {
  return (
    <>
      <div className="w-[1280px] h-[4400px] flex gap-[15px] items-center justify-center absolute z-[999] top-0 opacity-50">
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
        <div className="w-full h-full bg-red-200"></div>
      </div>
      <main className="w-full max-h-[1280px] flex min-h-screen justify-center">
        <Header />
        <Image
          src="/bg-init.webp"
          width={1920}
          height={1280}
          className="hidden md:block absolute z-[-1]"
          alt="Background image of a beauty woman"
        />
        <div className="w-2/4 flex flex-col">
          <h1 className="text-6xl font-bold">Lorem Ipsum</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <Button>Entre me Contato</Button>
        </div>
      </main>
    </>
  );
}
