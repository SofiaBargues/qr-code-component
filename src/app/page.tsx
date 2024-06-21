import Image from "next/image";
import imagenqrcode from "@/images/image-qr-code.png";

export default function Home() {
  return (
    <div className=" bg-[#d5e1ef] text-center h-screen w-screen  flex justify-center">
      <div className=" bg-white h-[497px] w-[335px] p-4 rounded-3xl m-auto ">
        <div className="flex flex-col gap-4">
          <Image
            src={imagenqrcode}
            className="rounded-2xl"
            alt="imagen-qr-code"
          />

          <h1 className="font-extrabold text-[#1f314f] text-xl ">
            Improve your front-end skills by building projects
          </h1>
          <p className="text text-[#7d889e]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
