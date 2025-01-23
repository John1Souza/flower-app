import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-screen max-h-[1110px] flex flex-col items-center justify-center bg-blue-400 relative">
      <div className="w-full max-w-[1280px] h-[350px] flex md:flex-row gap-x-[15px] absolute top-[-70]">
        <div className="w-full max-w-[309px] h-full bg-blue-500 flex flex-col items-left justify-between rounded-[20px] shadow-[0px_0px_25px_0px_#00000025] py-10 px-8 text-neutral">
          <Image
            src="/slack-white.png"
            width={70}
            height={70}
            className="hidden md:block"
            alt="Benefit logo"
          />
          <h4 className="text-[28px] font-bold">Subtítulo</h4>
          <p className="text-base">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
        <div className="w-full max-w-[309px] h-full bg-neutral flex flex-col items-left justify-between rounded-[20px] shadow-[0px_0px_25px_0px_#00000025] py-10 px-8">
          <Image
            src="/slack-blue.png"
            width={70}
            height={70}
            className="hidden md:block"
            alt="Benefit logo"
          />
          <h4 className="text-[28px] font-bold">Subtítulo</h4>
          <p className="text-base">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
        <div className="w-full max-w-[309px] h-full bg-blue-500 flex flex-col items-left justify-between rounded-[20px] shadow-[0px_0px_25px_0px_#00000025] py-10 px-8 text-neutral">
          <Image
            src="/slack-white.png"
            width={70}
            height={70}
            className="hidden md:block"
            alt="Benefit logo"
          />
          <h4 className="text-[28px] font-bold">Subtítulo</h4>
          <p className="text-base">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
        <div className="w-full max-w-[309px] h-full bg-neutral flex flex-col items-left justify-between rounded-[20px] shadow-[0px_0px_25px_0px_#00000025] py-10 px-8">
          <Image
            src="/slack-blue.png"
            width={70}
            height={70}
            className="hidden md:block"
            alt="Benefit logo"
          />
          <h4 className="text-[28px] font-bold">Subtítulo</h4>
          <p className="text-base">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
      </div>
      <div className="w-2/6 text-neutral absolute left-[320px]">
        <h1 className="text-5xl font-bold">Quem Somos?</h1>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
