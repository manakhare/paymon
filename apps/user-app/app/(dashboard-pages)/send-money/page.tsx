'use client';
import { useState } from "react";

export default function SendMoney() {
    const [transferMedium, setTransferMedium] = useState('phone');


    return (
        <div className="h-full w-full">
            <div className="text-2xl text-sky-800 font-bold tracking-wide px-5 py-10 font-serif">Send money</div>

            <div className="flex flex-col w-full justify-center items-center gap-5">
                <div className="flex justify-start flex-col bg-slate-100 rounded-md shadow-lg">

                    <div className="flex flex-row w-full">  
                        <div
                            onClick={() => { setTransferMedium('phone') }}
                            className="px-5 py-3 border border-r-sky-300 text-base font-semibold cursor-pointer bg-sky-200 hover:bg-sky-300">
                            Phone number
                        </div>
                        <div
                            onClick={() => { setTransferMedium('account') }}
                            className="px-5 py-3 border border-r-sky-300 text-base font-semibold cursor-pointer bg-sky-200 hover:bg-sky-300">
                            Account number
                        </div>
                        <div
                            onClick={() => { setTransferMedium('upi') }}
                            className="px-5 py-3 text-base font-semibold cursor-pointer bg-sky-200 hover:bg-sky-300">
                            UPI ID
                        </div>
                    </div>

                    {transferMedium === 'phone' && (
                        <div className="w-full h-fit">
                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Sender's Mobile number</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="0123456789" />
                            </div>

                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Receiver's Mobile number</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="0123456789" />
                            </div>


                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Amount</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="Write amount in INR" />
                            </div>

                            <div className="flex flex-col justify-start items-start px-4 py-4 my-2 w-full">
                                <button
                                    className="bg-sky-800 hover:bg-sky-700 w-full p-2 text-slate-50 text-lg font-semibold rounded-md">
                                    Send money
                                </button>
                            </div>
                        </div>
                    )}

                    {transferMedium === 'account' && (
                        <div className="w-full h-fit">
                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Sender's Account number</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="XXXX XXXX XXXX XXXX" />
                            </div>

                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Receiver's Account number</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="XXXX XXXX XXXX XXXX" />
                            </div>

                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Amount</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="Write amount in INR" />
                            </div>

                            <div className="flex flex-col justify-start items-start px-4 py-4 my-2 w-full">
                                <button
                                    className="bg-sky-800 hover:bg-sky-700 w-full p-2 text-slate-50 text-lg font-semibold rounded-md">
                                    Send money
                                </button>
                            </div>
                        </div>
                    )}

                    {transferMedium === 'upi' && (
                        <div className="w-full h-fit">
                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Sender's UPI ID</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="xyz@bankname" />
                            </div>

                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Receiver's UPI ID</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="xyz@bankname" />
                            </div>

                            <div className="flex flex-col justify-start items-start px-4 py-4 w-full">
                                <label className="text-slate-700 text-base tracking-wide pb-1">Amount</label>
                                <input
                                    className="bg-slate-200 p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-300"
                                    placeholder="Write amount in INR" />
                            </div>

                            <div className="flex flex-col justify-start items-start px-4 py-4 my-2 w-full">
                                <button
                                    className="bg-sky-800 hover:bg-sky-700 w-full p-2 text-slate-50 text-lg font-semibold rounded-md">
                                    Send money
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}