"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const MarkdownRenderer = ({ content }) => (
  <div className="prose">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          return !inline ? (
            <SyntaxHighlighter
              language={className?.replace("language-", "")}
              style={darcula}
            >
              {children}
            </SyntaxHighlighter>
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

const EditorPage = () => {
  const [value, setValue] = useState(
    "## hello\n\nApa kabar Semua aku baik aja sih wkwk\n\n![image](https://pbs.twimg.com/media/GOtHA49a4AAQ37M?format=png&name=medium)"
  );
  const [jsonOutput, setJsonOutput] = useState("");
  const jsonOutputRef = useRef(null);

  const convertToJson = () => {
    const jsonString = JSON.stringify(value.replace(/\n/g, "\\n"));
    setJsonOutput(jsonString);
  };

  const copyToClipboard = () => {
    if (jsonOutputRef.current) {
      navigator.clipboard.writeText(jsonOutputRef.current.textContent);
      alert("Copied to clipboard!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Markdown Editor with JSON Output
      </h1>
      <div className="flex space-x-4">
        {/* Column 1: Markdown Input */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Markdown Input</h2>
          <MDEditor value={value} onChange={(val) => setValue(val || "")} />
        </div>

        {/* Column 3: JSON Output */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">JSON Output</h2>
          <button
            onClick={convertToJson}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          >
            Convert to JSON
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white py-2 px-4 rounded mb-4 ml-2"
          >
            Copy to Clipboard
          </button>
          <pre
            ref={jsonOutputRef}
            className=" p-2 rounded h-full whitespace-pre-wrap"
          >
            {jsonOutput}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
