"use client";
import { useState } from 'react';
import type { Message } from "ai/react";

interface ChatMessageBubbleProps {
  message: Message;
  aiEmoji?: string;
  openTransactionModal: any; // Callback function to handle unlocking the message
  modalState: boolean; 
}

type ParsedResponse = {
  output: string;
  sources: {
    authorAddress: string;
    nftAddress: string;
    costPerWord: number;
  };
};

// Function to parse response and extract output and sources
function separateOutputAndSources(data: string): ParsedResponse | undefined {
  try {
    const jsonData: { output: string; sources: any } = JSON.parse(data);
    if (!jsonData.output || !jsonData.sources) {
      return undefined; // Handle invalid data
    }

    const sources = {
      authorAddress: jsonData.sources.authorAddress,
      nftAddress: jsonData.sources.nftAddress,
      costPerWord: jsonData.sources.costPerWord,
    };

    return { output: jsonData.output, sources };
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return undefined; // Handle parsing errors
  }
}

export function ChatMessageBubble({ message, aiEmoji, openTransactionModal,modalState }: ChatMessageBubbleProps) {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const colorClassName =
    message.role === "user" ? "bg-blue-300" : "bg-blue-50 text-black";
  const alignmentClassName =
    message.role === "user" ? "ml-auto" : "mr-auto";
  const prefix = message.role === "user" ? "🧑" : aiEmoji;

  const messageContent = message.role === "user" ? message.content : separateOutputAndSources(message.content)?.output;
  const sources = message.role === "user" ? [] : separateOutputAndSources(message.content)?.sources;

  //
  const words = messageContent?.split(' ');
  const truncatedMessage = words?.slice(0, 60).join(' ');
  const documentHash = sources?.nftAddress; // Adjusted to get the first source's nftAddress
  const pricePerWord = sources?.costPerWord; // Adjusted to get the first source's costPerWord
 const handleUnlockMessage = () => {
  openTransactionModal(documentHash, pricePerWord, words?.length); // Adjusted parameter passing

  // Use setTimeout for delayed execution
 

};

 
  return (
    <div className={`${alignmentClassName} ${colorClassName} rounded px-4 py-2 max-w-[80%] mb-8 flex`}>
      <div className="mr-2">
        {prefix}
      </div>
      <div className="whitespace-pre-wrap flex flex-col">
        <span>
          {showFullMessage ? messageContent : truncatedMessage}
          {!showFullMessage && words?.length > 160 && (
            <button className="text-blue-300 underline" onClick={handleUnlockMessage}>
              Click to reveal
            </button>
          )}
        </span>
        {sources && sources?.nftAddress && words?.length > 200 ? ( // Adjusted to check if sources exist and get the first source's nftAddress
          <>
            <code className="mt-4 mr-auto bg-sky-200 px-2 py-1 rounded text-sm">
              <h2>Sources:</h2>
            </code>
            <code className="mt-1 mr-2 bg-sky-100 px-2 py-1 rounded text-xs">
              <div className="mt-2">
                {sources?.nftAddress} 
              </div>
            </code>
          </>
        ) : null}
      </div>
    </div>
  );
}
