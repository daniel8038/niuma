import { memo } from "react";
import { niuma1, niuma2, niuma3 } from "../assets/image";

interface Link {
  title: string;
  link: string;
  img: string;
}

const links: Link[] = [
  {
    title: "STICKER PACK",
    link: "https://t.me/+iM32lmiR_NhiMTc1",
    img: niuma1,
  },
  {
    title: "BUY NIUMA",
    link: "https://dexscreener.com/solana/svvufrrfmlwyufzxcqkw6drkuasidvivjs1bcp6rkrc",
    img: niuma2,
  },
  {
    title: "NIUMA DAILY",
    link: "https://x.com/maj_c1/highlights",
    img: niuma3,
  },
];

const Content = () => {
  return (
    <section className="w-full py-32 px-4 ">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8 ">
          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.link}
              className="block text-center hover:pointer-events-auto group"
            >
              <div className={`w-full `}>
                <img
                  src={link.img}
                  alt={link.title}
                  className={`w-full  group-hover:animate-bounce  h-auto object-cover ${
                    index === 1 ? "-translate-y-14" : ""
                  }`}
                />
                <h2 className="text-[#9e5f1b] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mt-4 text-center">
                  {link.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Content);
