export default function MobileRecharge() {
    return (
        <div className="h-full w-full">
            <div className="px-5 py-8 font-bold text-2xl text-sky-900 font-serif">Mobile Recharge</div>

            <div className="flex flex-col gap-5 p-5 h-fit w-1/2 bg-slate-100 mx-5">
                <div className="flex flex-col">
                    <div className="text-sm pb-2 font-semibold text-slate-700 tracking-wide">Mobile number</div>
                    <input className="text-slate-700 rounded-md p-2 w-1/2 border border-slate-300 focus:outline-sky-200 focus:ring-0" placeholder="0123456789" />
                </div>

                <div className="flex flex-col">
                    <div className="text-sm pb-2 font-semibold text-slate-700 tracking-wide">Operator</div>
                    <input className="text-slate-700 rounded-md p-2 w-1/2 border border-slate-300 focus:outline-sky-200" placeholder="Airtel / Jio / Idea" />
                </div>

                <div className="flex flex-col">
                    <div className="text-sm pb-2 font-semibold text-slate-700 tracking-wide">Amount</div>
                    <input className="text-slate-700 rounded-md p-2 w-1/2 border border-slate-300 focus:outline-sky-200" placeholder="100" />
                </div>

                <div className="w-1/2 py-2 tracking-wide">
                    <button className="bg-sky-800 w-full p-2 hover:bg-sky-700 text-slate-50 text-lg font-bold">Recharge</button>
                </div>
            </div>
        </div>
    )
}