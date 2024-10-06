import Link from "next/link"

export const LeftMenu = () => {

    return (
        <div className="flex flex-col justify-start items-start w-full">

            <div className="w-full flex flex-col justify-start items-start">

                <div className="w-full pl-20 py-6 cursor-pointer flex justify-start items-center flex-row gap-3 hover:bg-white">
                    {/* <div className="flex justify-start items-start"> */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </div>
                    <div className="text-lg font-semibold tracking-wide">
                        <Link href="/home">Home</Link>
                    </div>
                    {/* </div> */}
                </div>

                <div className="w-full py-6 pl-20 cursor-pointer flex justify-start items-center flex-row gap-3 hover:bg-white">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                            <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-lg font-semibold tracking-wide">
                        <Link href="/transfer">Transfer</Link>
                    </div>
                </div>

                <div className="w-full pl-20 py-6 cursor-pointer flex justify-start items-center flex-row gap-3 hover:bg-white">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className="text-lg font-semibold tracking-wide">
                        <Link href="/transactions">Transactions</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}