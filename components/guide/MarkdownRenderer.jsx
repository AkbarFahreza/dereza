import React, { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlockWithCopy = ({ className, children }) => {
  const language = className?.replace("language-", "");
  const codeRef = useRef(null);
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeRef.current.textContent);
    setCopyButtonText("Copied!");
    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 3000);
  };

  useEffect(() => {
    if (codeRef.current) {
      const pre = codeRef.current.querySelector("pre");
      if (pre) {
        codeRef.current = pre;
      }
    }
  }, []);

  return (
    <div className="relative ">
      <div className="w-full items-center flex flex-row justify-between">
        <svg
          width="40"
          height="8"
          viewBox="0 0 40 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
            fill="#EC6565"
          />
          <path
            d="M16 4C16 1.79086 17.7909 0 20 0C22.2091 0 24 1.79086 24 4C24 6.20914 22.2091 8 20 8C17.7909 8 16 6.20914 16 4Z"
            fill="#ECDE65"
          />
          <path
            d="M32 4C32 1.79086 33.7909 0 36 0C38.2091 0 40 1.79086 40 4C40 6.20914 38.2091 8 36 8C33.7909 8 32 6.20914 32 4Z"
            fill="#78EC65"
          />
        </svg>

        <button
          onClick={() => {
            if (navigator.clipboard) {
              copyToClipboard();
            } else {
              alert("Clipboard tidak tersedia pada browser ini.");
            }
          }}
          className=" bg-mainColor text-white py-[2px] px-2 rounded text-sm hidden md:block"
        >
          {copyButtonText}
        </button>
      </div>

      <div ref={codeRef}>
        <SyntaxHighlighter
          language={language}
          style={a11yDark}
          className="rounded-md"
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const CustomParagraph = ({ children }) => {
  return <p className="text-white text-xs md:text-sm ">{children}</p>;
};

const CustomH1 = ({ children }) => {
  return <h1 className="text-4xl font-bold text-red-500">{children}</h1>;
};
const CustomStrong = ({ children }) => {
  return <strong className="font-bold text-white">{children}</strong>;
};

const CustomLink = ({ href, children }) => {
  return (
    <a href={href} className="text-red-500 hover:underline">
      {children}
    </a>
  );
};

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: CustomParagraph,
          h1: CustomH1,
          a: CustomLink,
          strong: CustomStrong,
          code({ node, inline, className, children, ...props }) {
            return !inline ? (
              <CodeBlockWithCopy className={className}>
                {children}
              </CodeBlockWithCopy>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
