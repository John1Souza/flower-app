import "@/app/ui/global.css";
import { poppins } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full flex flex-col items-center justify-center`}>{children}</body>
    </html>
  );
}
