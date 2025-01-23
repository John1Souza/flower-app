import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import Main from "./components/Main";
import About from "./components/About";

export default function Page() {
  return (
    <>
      <div className="w-[1280px] h-[4400px] flex gap-[15px] items-center justify-center absolute z-[999] top-0 opacity-25">
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
      <Header />
      <Main />
      <About />
    </>
  );
}
