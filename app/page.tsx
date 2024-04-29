'use client'

import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-center border-2 border-black items-center h-screen">
      <div className="max-w-xl px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Welcome to Glok</h1>
        </div>
        <div className="mt-4 w-full text-sm text-center text-gray-600">
          Glok revolutionizes research access and monetization by leveraging Web3 technology and AI.
          Say goodbye to traditional paywalls and subscriptions – Glok lets you unlock precise information
          when you need it, one token at a time.
        </div>
      </div>
      <div className="mt-8">
        <button
          className="btn btn-primary mr-4"
          onClick={() => {
            if (pathname !== '/chat') {
              window.location.href = '/chat';
            }
          }}
        >
          Chat with AI
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (pathname !== '/upload') {
              window.location.href = '/upload';
            }
          }}
        >
          Upload Data
        </button>
      </div>
    </div>
  );
}
