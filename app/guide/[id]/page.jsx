"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MarkdownRenderer from "@/components/guide/MarkdownRenderer";
import Link from "next/link";

function page({ params }) {
  const [guideData, setGuideData] = useState(null);
  const [guides, setGuides] = useState(null);

  useEffect(() => {
    async function fetchGuideData() {
      try {
        const response = await fetch(`/api/guide`);
        const data = await response.json();
        const matchedGuide = data[0].data.find(
          (guide) => guide.params === params.id
        );
        setGuideData(matchedGuide);
        setGuides(data[0].data);
      } catch (error) {
        console.error("Error fetching guide data:", error);
      }
    }

    fetchGuideData();
  }, [params.id]);

  return (
    <div>
      {guideData ? (
        <div className="w-auto px-2 md:px-20 min-h-screen flex md:space-x-6 flex-col-reverse md:flex-row-reverse justify-between items-start">
          <div className="pt-4 justify-start items-start flex md:w-2/12 w-11/12 space-x-5 md:space-x-0 flex-row overflow-x-scroll  md:flex-col md:space-y-5 md:justify-center mx-auto  max-h-[98vh] md:overflow-y-scroll no-scrollbar pb-2">
            {guides.map((item) => (
              <div
                key={item.id}
                className="rounded-lg shrink-0 max-h-[238px] mt-0 max-w-[238px] hover:-translate-y-2 transition-all duration-200"
              >
                <Link href={`/guide/${item.params}`}>
                  <div className="flex flex-col items-start">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={238}
                      height={142}
                      className="rounded-[5px] w-[238px] h-[142px]"
                      unoptimized
                    />
                    <div className="flex flex-col space-y-3 mt-3">
                      <h1 className="text-xs lg:text-sm font-medium text-white">
                        {item.title}
                      </h1>
                      <span
                        className={`py-[2px] px-2 text-xs w-fit rounded-full font-bold ${
                          item.type === "Source Code"
                            ? "text-[#0F0F15] bg-[#94F5AF]"
                            : "bg-[#262630] text-white"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="relative flex w-11/12 md:w-10/12 flex-col pt-[85px] md:pt-[230px] mx-auto max-h-[98vh] overflow-y-scroll no-scrollbar justify-center">
            <div className="relative">
              <Image
                src={guideData.thumbnail}
                alt={guideData.title}
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold my-4 text-left">
                  {guideData.title}
                </h1>
                <div
                  className={`py-1 px-3 text-xs rounded-full font-bold mt-2 inline-block ${
                    guideData.type === "Source Code"
                      ? "text-[#0F0F15] bg-[#94F5AF]"
                      : "bg-[#262630] text-white"
                  }`}
                >
                  {guideData.type}
                </div>
              </div>
              <div className="mt-5 prose">
                <MarkdownRenderer content={guideData.content} />{" "}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default page;
