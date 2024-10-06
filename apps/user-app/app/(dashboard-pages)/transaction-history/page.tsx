import { Navbar } from "@repo/ui/navbar";
import { LeftNav } from "../../../components/LeftNav";

export default function History() {
    return (

        <div className="md:grid md:col-span-10 h-full w-full flex flex-col jusitfy-start items-start bg-slate-50">
            <div className="h-full">
                {/* <div className="">
                        <Navbar appName="user-app" balance="1099.87" />
                    </div> */}

                <div className="p-10 h-fit w-full">
                    <div className="font-serif text-3xl font-bold text-sky-950 pb-10">Transaction History</div>

                    <div className="bg-slate-100 p-5 w-full border border-b-gray-400 mb-5 rounded-lg">
                        <div className="flex justify-between px-10">
                            <div className="text-xl text-gray-800 font-semibold">Total spent:</div>
                            <div className="text-xl text-green-800 font-semibold">Rs. 200</div>
                        </div>
                    </div>

                    <div className="bg-slate-100 w-full border border-b-gray-400 rounded-lg px-5">

                        <div className="flex justify-between items-center py-5 px-10 border border-b-gray-300 border-transparent pb-4">
                            <div>
                                <div className="text-xl text-gray-800 font-semibold">Gisha Khare</div>
                                <div className="text-md text-gray-600">21 July 2024 ar 2:25pm</div>
                            </div>
                            <div className="text-xl text-green-800 font-semibold">Rs. 200</div>
                        </div>

                        <div className="flex justify-between items-center py-5 px-10 border border-b-gray-300 border-transparent pb-4">
                            <div>
                                <div className="text-xl text-gray-800 font-semibold">Gisha Khare</div>
                                <div className="text-md text-gray-600">21 July 2024 ar 2:25pm</div>
                            </div>
                            <div className="text-xl text-green-800 font-semibold">Rs. 200</div>
                        </div>

                        <div className="flex justify-between items-center py-5 px-10 border border-b-gray-300 border-transparent pb-4">
                            <div>
                                <div className="text-xl text-gray-800 font-semibold">Gisha Khare</div>
                                <div className="text-md text-gray-600">21 July 2024 ar 2:25pm</div>
                            </div>
                            <div className="text-xl text-green-800 font-semibold">Rs. 200</div>
                        </div>

                        <div className="flex justify-between items-center py-5 px-10 border border-b-gray-300 border-transparent pb-4">
                            <div>
                                <div className="text-xl text-gray-800 font-semibold">Mana Khare's Wallet</div>
                                <div className="text-md text-gray-600">21 July 2024 ar 2:25pm</div>
                            </div>
                            <div className="text-xl font-semibold text-green-500">+ Rs. 2000</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}


{/* <div className="h-screen w-screen md:grid md:grid-cols-12">
    <div className="md:grid md:col-span-2">
        <LeftNav />
    </div>
</div> */}