import { footer_logo } from "../assets/image";

export default function Footer() {
  return (
    <footer className="bg-[#4c321c] relative text-[#e1c176] text-center pt-10 pb-4 md:pt-24  px-4 md:px-10 w-full min-h-screen">
      <div className="text-6xl lg:text-8xl font-bold mb-8  leading-[1] max-w-[60%] lg:max-w-[80%] mx-auto">
        WHO ISN'T A NIUMA? WAIT...YOU'RE NOT ONE YET?
        <br />
        谁是牛马？谁还不是？
      </div>
      ,
      <img src={footer_logo} alt="" className="w-[90%] mx-auto mb-4 md:mb-12" />
      <div className="text-xl lg:text-3xl opacity-80 absolute bottom-0 right-[50%] translate-x-[50%]">
        © 2025 NIUMA. All rights reserved.
      </div>
    </footer>
  );
}
