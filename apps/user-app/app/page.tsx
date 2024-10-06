// import Image from "next/image";
// "use client";
import { SessionProvider } from 'next-auth/react';
// import "./globals.css"
import Link from "next/link";

export default function Home() {
  return (
      <div>
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center px-10 py-3 border border-b-sky-100">
          <div className="text-3xl font-bold px-5 text-sky-600 tracking-wide">Paytm</div>
          <div className="flex flex-row gap-5 px-5 items-center">
            <div className="text-lg font-semibold cursor-pointer p-3 hover:text-sky-800"><Link href='/signup'>Sign up</Link></div>
            <div className="text-lg font-semibold cursor-pointer p-3 hover:text-sky-800"><Link href='/login'>Login</Link></div>
            <div className="text-lg font-semibold cursor-pointer p-3 rounded-md border-sky-300 border-2 hover:text-slate-50 hover:bg-sky-800">Merchant login</div>
          </div>
        </div>

        {/* Dashboard Page */}

        <div></div>

      </div>

 
  );
} 
