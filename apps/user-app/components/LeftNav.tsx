import { Logo } from "@repo/ui/logo"
import Image from "next/image";
import Link from "next/link";

export const LeftNav = () => {
    return (
        <div className="flex flex-col gap-10 bg-sky-950 min-h-full">
            <div className="flex flex-row items-center justify-start">
                <div className="flex justify-center pt-5 pl-6"><Logo /></div>
            </div>

            <div className="w-full flex flex-col justify-center items-start">

                <div className="w-full pl-10 py-6 hover:bg-sky-600">
                    <Link href="/dashboard">
                        <div className="w-full cursor-pointer flex justify-start items-center flex-row gap-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                            <div className="text-md font-semibold tracking-wide text-slate-100">
                                Home
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="w-full py-6 pl-10  hover:bg-sky-600">
                    <Link href="/send-money">
                        <div className="w-full cursor-pointer flex justify-start items-center flex-row gap-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                                    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-md font-semibold tracking-wide text-slate-100">
                                Transfer
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="w-full pl-10 py-6 hover:bg-sky-600">
                    <Link href="/transaction-history">
                        <div className="w-full cursor-pointer flex justify-start items-center flex-row gap-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div className="text-md font-semibold tracking-wide text-slate-100">
                                Transactions History
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="w-full pl-10 py-6 hover:bg-sky-600">
                    <Link href="/add-to-wallet">
                        <div className="w-full cursor-pointer flex justify-start items-center flex-row gap-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                </svg>
                            </div>
                            <div className="text-md font-semibold tracking-wide text-slate-100">
                                Wallet
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="w-full pl-10 py-6 hover:bg-sky-600">
                    <Link href="/flight-tickets">
                        <div className="w-full cursor-pointer flex justify-start items-center flex-row gap-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>

                            </div>
                            <div className="text-md font-semibold tracking-wide text-slate-100">
                                Flight tickets
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="w-full pl-10 py-6 hover:bg-sky-600">
                    <Link href="/mobile-recharge">
                        <div className="w-full cursor-pointer flex justify-start items-center flex-row gap-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>

                            </div>
                            <div className="text-md font-semibold tracking-wide text-slate-100">
                                Mobile recharge
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}