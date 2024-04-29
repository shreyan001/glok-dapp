"use client";

import { usePathname } from 'next/navigation';
import ConnectButton from './WalletButton';
import Image from 'next/image'; // Import Connect Wallet button component

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center border-black border-2  mb-4">
      <div className="flex ml-3 items-center">
        <Image className="w-10 h-10 mr-2" width={500} height={500} src="/images/abstract.png" alt="Logo" /> {/* Replace with your logo */}
        <h1  className="text-xl font-bold text-blue-400">Glok</h1> {/* Replace with your website name */}
      </div>
      <div className="flex items-center">
        <a className={`mr-4 border-black m-3 border p-3  ${pathname === "/upload" ? " bg-blue-300  m-3 border-b p-3" : ""}`} href="/upload">Upload</a>
        <a className={`mr-4 border-black m-3 border p-3   ${pathname === "/chat" ? "text-white bg-blue-300  m-3 border-b p-3"  : ""}`} href="/chat">Chat</a>
        <div className=' bg-blue-300 border-2 border-black p-2 m-4'><ConnectButton /></div>
 
      </div>
    </nav>
  );
}