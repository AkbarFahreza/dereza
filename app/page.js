import HomeGuide from "@/components/guide/HomeGuide";
import Analytics from "@/components/home/Analytics";
import Home_Profile from "@/components/home/Home_Profile";
import Nav_Bar from "@/components/home/Nav_Bar";
import Home_Portfolio from "@/components/portfolios/Home_Portfolio";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden md:-mt-16">
      <Image
        src="/decor-1.svg"
        width={263}
        height={263}
        alt=""
        className="absolute top-[2vh] md:top-[8vh] scale-[.4] md:scale-100 -right-[130px] z-40"
      />

      <div className="w-32 h-32 blur-3xl fixed -bottom-7 -left-7 bg-gradient-to-tr from-mainColor to-secondaryColor rounded-full -z-40"></div>
      <Home_Profile />
      <div className="m-5 md:m-10 flex flex-row">
        <nav className="hidden md:block mr-20">
          <Nav_Bar />
        </nav>
        <div id="content-wrapper">
          <div id="intro-text" className="flex flex-col justify-start">
            <h2 className="font-kaushan text-2xl">Hello!! I am Reza</h2>
            <p className="text-sm my-1 font-medium text-mainColor">
              Custom Youtube Livechat Coder
            </p>
            <p className="text-xs my-1 font-medium ">
              This is supposed to be introduction words but I don’t know what to
              type here, so let’s get to see what I’ve done!!
            </p>
            <Analytics />
          </div>
          <div
            id="might-help-you"
            className="mt-5 max-w-[90vw] overflow-x-scroll"
          >
            <div className="my-1 flex flex-row justify-between">
              <h3 className="font-kaushan text-xl">Might Help You</h3>
              <Link
                href="#"
                className="py-1 px-3 hover:bg-mainColor transition-all duration-100 rounded-full border-white border-2 text-xs"
              >
                More
              </Link>
            </div>
            <HomeGuide />
          </div>
          <Home_Portfolio />
        </div>
      </div>
    </main>
  );
}
