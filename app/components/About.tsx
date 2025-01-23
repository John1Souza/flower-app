export default function About() {
  return (
    <div className="w-full h-screen max-h-[1110px] flex flex-col items-center justify-center bg-blue-400">
      <div className="w-full max-w-[1280px] h-2/5 flex gap-x-8">
        <div className="w-full h-full bg-blue-500 flex flex-col items-center justify-between rounded-8xl"></div>
        <div className="w-full h-full bg-neutral flex flex-col items-center justify-between rounded-8xl"></div>
        <div className="w-full h-full bg-blue-500 flex flex-col items-center justify-between rounded-8xl"></div>
        <div className="w-full h-full bg-neutral flex flex-col items-center justify-between rounded-8xl"></div>
      </div>
      And here we go!
    </div>
  );
}
