"use client"

import { Logo } from "./logo";
import Link from "next/link";

interface NavbarProps {
    // className: string;
    appName: string;
    balance: string;
}

export const Navbar = ({ appName, balance }: NavbarProps) => {
    return (
        <div className="flex justify-between py-5 border border-b-2 items-center pr-10 bg-slate-100">
            <div className="flex flex-row justify-center items-center gap-2 pl-5">
                <div className="font-semibold text-xl text-slate-800 tracking-wide">Wallet:</div>
                <div className="font-bold text-2xl text-green-500">Rs. {balance}</div>
            </div>
            <div className="text-xl px-8 py-3 bg-sky-950 border rounded-full text-gray-100 font-semibold cursor-pointer mr-10 hover:bg-sky-100 hover:bg-sky-600">
                <Link className="outline-none focus:outline-none tracking-wide" href="/">Logout</Link>
            </div>
        </div>
        )
        // <div className=" border border-b-21 border-gray-100 w-full h-20 flex justify-between items-center">
            {/* <div className="flex justify-center items-center pl-10 pb-2">
                <Logo />
            </div> */}
        // </div>
}