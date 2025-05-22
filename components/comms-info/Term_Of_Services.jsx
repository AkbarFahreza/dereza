import React from "react";
import Image from "next/image";
const Terms = [
  {
    title: "Before you start",
    items: [
      "I am a friendly and fun person hehe",
      "By commissioning me, you accept the terms and conditions below.",
      "All information sent will be kept confidential.",
      "Get the project example through this link : https://drive.google.com/drive/folders/1gABlu_fmFgjiwhYvzY2hoqHsTyCVPusg.",
      "There are no refunds when the project is completed.",
    ],
  },
  {
    title: "General",
    items: [
      "This Livechat can currently only be used on OBS due to YouTube provisions which make other broadcasting software fail to include Custom CSS into YouTube Livechat (Until further information)",
      "I do not provide additional assets for livechat (assets from clients), i only make simple assets, because i am not artist hehe.",
      "Work estimates can be known after discussion because it depends on the progress currently underway",
      "Keep in mind that there are several shapes of Livechat design that are quite impossible to code, but i will try my best.",
      "After the project is complete, you will get installation guide and a .CSS format file which will be sent via Google Drive.",
    ],
  },
  {
    title: "Progressions",
    items: [
      "The project will be carried out if both parties agree to start.",
      "I'll let you know the progress update every at least 2 days.",
      "You have the right to ask for progress updates",
    ],
  },
  {
    title: "Payment",
    items: [
      "Payment can be made in full at the end of the project completion.",
      "Payment can be made via Dana (Virtual Account) / Trakteer for Infonesian, KO-FI / Paypal for international payment.",
      "The package price listed above is the initial price and the price can increase depending on the difficulty of styling Livechat.",
      "If there is a price increase, I will let you know when the design is complete.",
    ],
  },
  {
    title: "Usage",
    items: [
      "One item can only be used for one person.",
      "You are allowed to edit the colors by yourself.",
      "You are NOT allowed to resell the product.",
      "If there are errors, updates from youtube, and other faults during use within 6 Months after the project is completed, no repair costs will be charged.",
    ],
  },
];

function Term_Of_Services() {
  const LastUpdate = "22 May 2025";

  return (
    <div className="mt-6">
      <div>
        <div className="flex flex-row justify-between">
          <h3 className="font-kaushan text-secondaryColor text-2xl">
            Terms Of Service
          </h3>
        </div>
        <p className="  text-[#969494] pb-2 text-[10px] font-bold mt-1">
          Last updated : {LastUpdate}
        </p>
      </div>
      <div className=" max-h-[60vh] pr-5 overflow-y-scroll ">
        {Terms.map((term, index) => (
          <div key={index} className="mt-[10px]   ml-6 relative w-auto ">
            <div className="relative pt-4">
              <span className="w-1 absolute -top-1 -left-4 h-[20px] border-l-2 border-l-white border-dotted"></span>
              <div className="relative">
                <Image
                  src="/sparkle.svg"
                  alt="sparkle"
                  width={18}
                  height={20}
                  className="absolute top-1/2 -translate-y-1/2 -left-6"
                />
                <p className="font-bold text-xl text-mainColor">{term.title}</p>
              </div>
            </div>
            <ul className="ml-4 flex flex-col space-y-[10px] mt-1">
              {term.items.map((item, idx) => (
                <li className="text-sm font-medium  relative" key={idx}>
                  <Image
                    src="/sparkle.svg"
                    alt="sparkle"
                    width={10}
                    height={12}
                    className="absolute  top-[5px] -left-4"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Term_Of_Services;
