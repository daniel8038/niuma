import { memo, useState } from "react";
import { logo } from "../assets/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBuyDropdownOpen, setIsBuyDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const buyLinks = [
    {
      title: "GMGN",
      link: "https://gmgn.ai/sol/token/2pKIdoja_9wcq7UamAwvUdBQTHJADhseVqSZTuMDk95MBB9nybonk",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_468_9437)">
            <path
              d="M8 30V32H30V30H28V26H26V24H28V22H30V20H32V12H30V4H28V2H22V4H20V8H18V4H16V2H10V4H8V12H4V10H0V20H2V22H8V24H12V26H10V30H8Z"
              fill="#9ED455"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 2H14V4H16V6V8V10H18H20H22V8V6V4L20 4V6V8H18V6V4H16V2ZM6 20H8V22H6H4H2L2 20H4H6ZM4 12H2L2 14L2 16V18L2 20H0V18V16V14V12V10H2H4V12ZM4 12V14H6H8V12H10V10V8V6V4L8 4V6V8V10V12H6H4ZM12 26V24H10H8V22H10H12H14V24V26H12ZM10 30V28V26H12V28V30H10ZM10 30V32H8V30H10ZM30 30H28V28V26H26V24H28V22H30V20H32V18V16V14V12H30V10V8V6V4H28V2H26V4H28V6V8V10V12H30V14V16V18V20H28V22H26H24V24V26H26V28V30H28V32H30V30Z"
              fill="#457F2C"
            />
            <rect x="10" y="6" width="4" height="6" fill="white" />
            <rect x="10" y="8" width="2" height="4" fill="black" />
            <rect
              x="12"
              y="18"
              width="2"
              height="6"
              transform="rotate(90 12 18)"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 4V6L10 6V4H14ZM4 14L4 12H2V14H4ZM4 14H10V16H4V14ZM26 6V4H22V6L26 6Z"
              fill="#D5F86B"
            />
            <rect
              x="22"
              y="30"
              width="2"
              height="10"
              transform="rotate(90 22 30)"
              fill="#D09C4F"
            />
            <rect
              x="22"
              y="28"
              width="2"
              height="8"
              transform="rotate(90 22 28)"
              fill="#D09C4F"
            />
            <rect
              x="20"
              y="26"
              width="2"
              height="6"
              transform="rotate(90 20 26)"
              fill="#D09C4F"
            />
            <rect
              x="20"
              y="24"
              width="2"
              height="4"
              transform="rotate(90 20 24)"
              fill="#D09C4F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28 12V6H26V12H28ZM10 14V12H8V14H10ZM6 18V20H2V18H6ZM30 20V18V14H28V18H26V20H22V22V24H20V26H22H24V30H26V32H28V30H26V26H24V22H28V20H30ZM14 20V22H8V20H14ZM14 26V22H16V26H14ZM12 30V26H14V30H12ZM12 30H10V32H12V30ZM22 10V12H20V10H22Z"
              fill="#57A756"
            />
            <rect x="22" y="6" width="4" height="6" fill="white" />
            <rect x="22" y="8" width="2" height="4" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_468_9437">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Axiom",
      link: "https://axiom.trade/meme/sVVuFrrFMLwYUfzXCQKw6dRkUAsidvivJS1bCP6rKRc",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[36px] h-[36px] sm:w-[36px] sm:h-[36px] text-textPrimary"
        >
          <g clip-path="url(#clip0_88_28967)">
            <path
              d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z"
              fill="currentColor"
            ></path>
            <path
              d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_88_28967">
              <rect
                width="26"
                height="22"
                fill="white"
                transform="translate(5 7)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "DexScreener",
      link: "https://dexscreener.com/solana/svvufrrfmlwyufzxcqkw6drkuasidvivjs1bcp6rkrc",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill-rule="evenodd"
          viewBox="0 0 252 300"
          focusable="false"
          className="chakra-icon custom-474c14"
        >
          <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"></path>
          <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"></path>
        </svg>
      ),
    },
  ];

  return (
    <header className="w-full min-h-[175px] flex items-center text-5xl font-black header-bg">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full justify-around items-center px-8">
        {/* BUY NIUMA with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsBuyDropdownOpen(true)}
          onMouseLeave={() => setIsBuyDropdownOpen(false)}
        >
          <span className="text-[#9e5f1b] no-underline font-black transition-all duration-300 hover:text-[#7a4915] cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-1 after:bg-[#7a4915] after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full">
            BUY NIUMA
          </span>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gradient-to-b from-[#f4e4c1] to-[#e8d5b7] rounded-xl shadow-2xl border-2 border-[#9e5f1b] min-w-[220px] overflow-hidden transition-all duration-500 z-[1003] ${
              isBuyDropdownOpen
                ? "opacity-100 visible translate-y-0 scale-100"
                : "opacity-0 invisible -translate-y-4 scale-95"
            }`}
          >
            {/* Arrow pointer */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#f4e4c1] border-l-2 border-t-2 border-[#9e5f1b] rotate-45"></div>

            {buyLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 px-6 py-4 text-[#9e5f1b] hover:text-white hover:bg-[#9e5f1b] text-xl font-black no-underline transition-all duration-300 transform hover:scale-105 `}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        <a
          href="https://x.com/maj_c1/highlights"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9e5f1b] no-underline font-black transition-all duration-300 hover:text-[#7a4915] relative after:content-[''] after:absolute after:w-0 after:h-1 after:bg-[#7a4915] after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full"
        >
          NIUMA DAILY
        </a>
        <img src={logo} alt="niuma logo" className="w-[20%] h-auto mb-4" />
        <a
          href="https://t.me/+iM32lmiR_NhiMTc1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9e5f1b] no-underline font-black transition-all duration-300 hover:text-[#7a4915] relative after:content-[''] after:absolute after:w-0 after:h-1 after:bg-[#7a4915] after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full"
        >
          STICKER PACK
        </a>
        {/* ABOUT with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsAboutDropdownOpen(true)}
          onMouseLeave={() => setIsAboutDropdownOpen(false)}
        >
          <a
            href="https://x.com/i/communities/1945055098528522639"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9e5f1b] no-underline font-black transition-all duration-300 hover:text-[#7a4915] cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-1 after:bg-[#7a4915] after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full"
          >
            ABOUT
          </a>

          {/* About Dropdown */}
          <div
            className={`absolute top-full right-0 mt-4 bg-gradient-to-b from-[#f4e4c1] to-[#e8d5b7] rounded-xl shadow-2xl border-2 border-[#9e5f1b] w-[500px] overflow-hidden transition-all duration-500 z-[1003] ${
              isAboutDropdownOpen
                ? "opacity-100 visible translate-y-0 scale-100"
                : "opacity-0 invisible -translate-y-4 scale-95"
            }`}
          >
            {/* Arrow pointer */}
            <div className="absolute -top-2 right-8 w-4 h-4 bg-[#f4e4c1] border-l-2 border-t-2 border-[#9e5f1b] rotate-45"></div>

            {/* About Content */}
            <div className="p-6">
              {/* Title */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-black text-[#9e5f1b] mb-2">
                  关于 Niúmǎ (牛马)
                </h3>
                <div className="w-16 h-1 bg-[#9e5f1b] mx-auto rounded"></div>
              </div>

              {/* English Description */}
              <div className="mb-4">
                <p className="text-[#7a4915] text-sm leading-relaxed ">
                  {/* <strong>"Niúmǎ"</strong> (literally "cow and horse") <br />{" "} */}
                  "Niúmǎ" was originally a self-mockery among wage workers, but
                  now it has evolved into a metaphor for builders in Web3. We
                  wear the hide of an ox, yet conceal the heart of a horse—being
                  both "tools" and dreamers. With a light touch, we convey
                  genuine emotions and employ humorous narratives to satirize
                  power. We believe that on this absurd blockchain stage, only
                  by persisting in building and achieving self-awakening can we
                  forge a collective narrative that belongs to the group.
                  "Niúmǎ" is no longer just "Niúmǎ"; it is a mask of clarity and
                  a wild will.
                </p>
              </div>

              {/* Chinese Description */}
              <div className="mb-4">
                <p className="text-[#7a4915] text-sm leading-relaxed">
                  <strong>"牛马"</strong> “牛马”原是打工人的自嘲，如今在 Web3
                  变身 builder
                  的隐喻。我们披着牛皮，藏着马心，既是工具人，也是造梦者。用轻盈的笔触讲述真实的情绪、幽默的叙事讽刺权力。我们相信，在链上这个荒诞舞台上，只有坚持建设与自我觉醒，才能走出属于群体的集体叙事。牛马不再只是牛马，它是清醒的面具，也是野性的意志。
                </p>
              </div>

              {/* Statistics */}
              <div className="bg-white/50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-black text-[#9e5f1b]">
                      700M+ 'niuma'
                    </div>
                    <div className="text-xs text-[#7a4915]">
                      在中国 (In China)
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-[#9e5f1b]">
                      3B+ 'niuma'
                    </div>
                    <div className="text-xs text-[#7a4915]">
                      全世界 (In the World)
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Link */}
              <div className="text-center">
                <a
                  href="https://x.com/i/communities/1945055098528522639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9e5f1b] font-medium text-sm"
                >
                  🐴 Join the Niúmǎ Community →
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://x.com/i/communities/1945055098528522639"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9e5f1b] no-underline font-black transition-all duration-300 hover:text-[#7a4915] relative after:content-[''] after:absolute after:w-0 after:h-1 after:bg-[#7a4915] after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full italic"
        >
          Twitter
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-between items-center w-full px-4 py-4">
        <img src={logo} alt="niuma logo" className="h-12 w-auto" />
        <button
          className="group flex flex-col justify-around hover:rotate-360 transition-all duration-500 w-8 h-6 bg-transparent border-none cursor-pointer p-0 z-[10]"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="w-8 h-1 bg-[#7a4915] group-hover:bg-[#9e5f1b] rounded transition-all duration-700 rotate-45 translate-y-[8px] group-hover:rotate-0 group-hover:translate-y-0"></span>
          <span className="w-8 h-1 bg-[#7a4915] group-hover:bg-[#9e5f1b] rounded transition-all duration-700 "></span>
          <span className="w-8 h-1 bg-[#7a4915] group-hover:bg-[#9e5f1b] rounded transition-all duration-700 -rotate-45 -translate-y-[8px] group-hover:rotate-0 group-hover:translate-y-0"></span>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 w-full h-screen z-[1000] transition-all duration-300 ${
          isMobileMenuOpen ? "right-0" : "-right-full"
        }`}
      >
        <div
          className="absolute top-0 left-0  w-full h-screen bg-black/50  backdrop-blur-sm z-[1002] "
          onClick={toggleMobileMenu}
        ></div>
        <div className="absolute top-0 right-0 w-72 sm:w-full h-screen p-8 overflow-y-auto z-[1002] sidebar-bg">
          <button
            className="absolute top-4 right-4 bg-none border-none text-2xl text-[#9e5f1b] cursor-pointer w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[rgba(158,95,27,0.1)] hover:rotate-90"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className="mt-16 flex flex-col gap-8">
            {/* Buy Links Section */}
            <div className="border-b border-[rgba(158,95,27,0.2)] pb-4">
              <h3 className="text-[#9e5f1b] text-2xl font-black mb-4">
                BUY NIUMA
              </h3>
              {buyLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
                  className="flex items-center gap-3 text-[#9e5f1b] no-underline text-xl font-black py-3 pl-4 transition-all duration-300 hover:text-[#7a4915] hover:pl-6"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
            <a
              href="https://x.com/maj_c1/highlights"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
              className="text-[#9e5f1b] no-underline text-3xl font-black py-4 border-b border-[rgba(158,95,27,0.2)] transition-all duration-300 hover:text-[#7a4915] hover:pl-4 hover:border-[#7a4915]"
            >
              NIUMA DAILY
            </a>
            <a
              href="https://t.me/+iM32lmiR_NhiMTc1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
              className="text-[#9e5f1b] no-underline text-3xl font-black py-4 border-b border-[rgba(158,95,27,0.2)] transition-all duration-300 hover:text-[#7a4915] hover:pl-4 hover:border-[#7a4915]"
            >
              STICKER PACK
            </a>
            <a
              href="https://x.com/i/communities/1945055098528522639"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
              className="text-[#9e5f1b] no-underline text-3xl font-black py-4 border-b border-[rgba(158,95,27,0.2)] transition-all duration-300 hover:text-[#7a4915] hover:pl-4 hover:border-[#7a4915]"
            >
              ABOUT
            </a>
            <a
              href="#social"
              onClick={toggleMobileMenu}
              className="text-[#9e5f1b] no-underline text-3xl font-black py-4 border-b border-[rgba(158,95,27,0.2)] transition-all duration-300 hover:text-[#7a4915] hover:pl-4 hover:border-[#7a4915] italic"
            >
              X
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
