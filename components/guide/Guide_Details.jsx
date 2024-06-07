import React from "react";
import Image from "next/image";
import MarkdownRenderer from "./MarkdownRenderer";

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-y-auto max-w-lg h-5/6 w-full relative p-5">
        <button
          onClick={onClose}
          className="text-black text-xl absolute top-2 right-4"
        >
          &times;
        </button>
        {item && (
          <div>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={238}
              height={142}
              className="rounded-lg w-full"
              unoptimized
            />
            <h2 className="mt-4 text-lg font-bold">{item.title}</h2>
            <span
              className={`py-1 px-3 text-sm rounded-full font-bold mt-2 inline-block ${
                item.type === "Source Code"
                  ? "text-[#0F0F15] bg-[#94F5AF]"
                  : "bg-[#262630] text-white"
              }`}
            >
              {item.type}
            </span>
            <div className="mt-5 prose">
              <MarkdownRenderer content={item.content} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
