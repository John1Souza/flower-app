import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Rights from "./components/Rights";

export default function Page() {
  return (
    <div className="w-full flex flex-col bg-neutral items-center justify-center">
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
      <Rights />
    </div>
  );
}
