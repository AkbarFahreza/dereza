import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <div className="bg-gradient-to-tr  h-[20vh] lg:h-[30vh] w-auto overflow-hidden relative from-mainColor to-secondaryColor">
        <div className="w-[100%] h-[100%] bg-gradient-to-tr absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-70 from-mainColor to-secondaryColor z-10"></div>
        <Image
          src="/header-banner.png"
          height={665}
          width={1171}
          alt="banner header"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  -scale-150 lg:-scale-125"
        />
        <div className="absolute top-[50%]  -ml-3  left-[50%] translate-x-[-50%] justify-center  translate-y-[-50%] z-20 flex flex-row items-center">
          <Image src="/avatar.png" width={129} height={157} alt="avatar" />
          <div>
            <h1 className="font-bebas text-2xl  text-nowrap lg:text-4xl flex flex-row items-center">
              DEK REZA
              <Image
                src="/verify-icon.svg"
                width={24}
                height={24}
                alt="verify icon"
                className="ml-1 mb-1 scale-75 lg:scale-100"
              />
            </h1>
            <p className="text-xs text-nowrap lg:text-base font-medium">
              Designer &#8226; coder{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
