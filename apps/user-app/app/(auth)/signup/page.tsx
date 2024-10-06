// "use client"
import Link from "next/link";

export default function Signup() {
    return (
        <div className="flex justify-center h-screen w-screen items-center bg-slate-50">
            {/* Give option of whether to sign up as a merchant or a user */}
            <div className="bg-slate-50 h-3/5 w-2/5 flex flex-col justify-center items-center border border-sky-200">
                <div className="font-extrabold text-5xl mb-10 text-sky-600">paytm</div>
                <div className="p-4 flex justify-center items-center m-5 font-semibold text-xl hover:bg-sky-500 cursor-pointer bg-sky-600 rounded-lg w-3/5 border-sky-300 text-slate-50">
                    <Link href='/signup/merchant'>Sign up as a Merchant</Link>
                </div>
                <div className="font-bold">or</div>
                <div className="p-4 flex justify-center items-center m-5 font-semibold text-xl hover:bg-sky-500 cursor-pointer bg-sky-600 rounded-lg w-3/5 border-sky-300 text-slate-50">
                    <Link href='/signup/user'>Sign up as a User</Link>
                </div>
            </div>
        </div>
    )
}