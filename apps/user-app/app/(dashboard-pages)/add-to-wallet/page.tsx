
import { Input } from "@repo/ui/input";
import Link from "next/link";

export default function AddToWallet() {
    return (
        <div className="h-full w-full bg-slate-50">

            <div className="bg-slate-50 h-full-100">
                <div className="p-5 text-3xl font-bold text-sky-900 font-serif pt-10">Add money to wallet</div>

                <div className="md:grid md:grid-cols-10 md:gap-10 p-5">
                    <div className="md:col-span-5 p-5 bg-slate-100">
                        <div className="text-2xl font-bold pb-5 uppercase">
                            Add money
                        </div>
                        <div className="w-full pb-5">
                            <label className="text-lg font-semibold tracking-wide">Amount</label>
                            <Input appName="user-app" label="Amount" className="p-2 mt-2 text-lg focus:outline-offset-0 bg-gray-50 text-gray-800 focus:outline-sky-600 outline-none border border-gray-300 rounded-md" />
                        </div>
                        <div className="w-full flex flex-col justify-start items-start pb-5">
                            <label className="text-lg font-semibold tracking-wide pb-2">Bank</label>
                            <select className="w-full cursor-pointer outline-none focus:outline-offset-0 focus:outline-sky-600 focus:ring-sky-600 p-2 text-lg text-gray-800 border border-gray-300 bg-gray-50 rounded-md">
                                <option selected>Choose a bank</option>
                                <option>HDFC Bank</option>
                                <option>ICICI Bank</option>
                                <option>Axis Bank</option>
                                <option>Central Bank of India</option>
                            </select>
                        </div>

                        <div className="w-full flex justify-center items-center mt-5">
                            <button className="py-2 px-5 bg-sky-950 text-slate-100 text-lg font-semibold rounded-md">Add money</button>
                        </div>
                    </div>

                    <div className="md:col-span-5 p-5 pb-10 bg-slate-100 h-fit w-full flex flex-col justify-start items-start gap-5">
                        <div className="text-2xl font-bold pb-5 uppercase">Balance</div>

                        <div className="border border-spacing-8 border-x-slate-100 border-t-slate-100 border-b-gray-300 flex flex-row justify-between w-full">
                            <div className="pb-2 text-lg font-semibold tracking-wide">Unlocked balance</div>
                            <div className="pb-2 text-lg font-semibold">200 INR</div>
                        </div>

                        <div className="border border-spacing-4 border-x-slate-100 border-t-slate-100 border-b-gray-300 flex flex-row justify-between w-full">
                            <div className="pb-2 text-lg font-semibold tracking-wide">Total locked balance</div>
                            <div className="pb-2 text-lg font-semibold">0 INR</div>
                        </div>

                        <div className="border border-spacing-4 border-x-slate-100 border-t-slate-100 border-b-gray-300 flex flex-row justify-between w-full">
                            <div className="pb-2 text-lg font-semibold tracking-wide">Total balance</div>
                            <div className="pb-2 text-lg font-semibold">200 INR</div>
                        </div>

                        <div className="flex items-center justify-center w-full pt-2">
                            <div className="py-2 outline-none flex text-lg font-normal underline underline-offset-4 text-sky-600 hover:text-sky-800">
                                <Link href='/transaction-history'>Click here to view transaction history</Link>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div>

    )
}