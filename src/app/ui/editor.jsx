"use client";
import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Editor({ children, icon, title }) {
    const [onCopy, setOnCopy] = useState(false)
    async function handleClick() {
        setOnCopy(true)
        setTimeout(() => setOnCopy(false), 1000)
        await navigator.clipboard.writeText(children);
      }
  return (
    <div className="flex flex-col m-0 border divide-y rounded-md divide-neutral-700 border-neutral-700">
      <div className="flex flex-row items-center justify-between px-4 py-2 text-sm rounded-t-md text-neutral-400">
        <div className="flex flex-row items-center gap-2">
            {icon}
            <p>{title}</p>
        </div>
        <button className="p-1 transition-transform rounded-lg hover:bg-neutral-700" onClick={handleClick} aria-label="copy to clipboard">{onCopy ? <IconCheck className="w-5 h-5"/> : <IconClipboard className="w-5 h-5"/>}</button>
      </div>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLongLines={true} showLineNumbers={true} wrapLines={true} 
        customStyle={{
          fontSize: "0.9rem",
          lineHeight: "1.5rem",
          padding: "0.5rem",
          margin: 0,
          overflow: "auto",}}
          className="rounded-b-md"
          >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
