'use client'
import { Input } from "@repo/ui/input";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import LabelledInput from "./LabelledInput";


export default function SignUpComponent() {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [userDetails, setUserDetails] = useState({
        email: '',
        username: '',
        number: '',
        password: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const submitUserDetails = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/auth/user/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            })

            const res = await response.json();

            if (res.success) {
                setSuccess('User signed up successfully!');
            } else {
                setError('Failed to create user')
            }
        } catch (err) {
            setError('An error occured during sign up');
        }
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-slate-50">
            <div className="h-4/5 w-2/5 flex flex-col justify-center items-center border border-sky-200 shadow-lg rounded-lg">
                <div className="font-extrabold text-4xl mb-10 text-sky-600">paytm</div>
                <div className="flex justify-center items-center w-2/3">
                    <div className="w-full">
                        {/* {inputFields.map((field) => (
                            <LabelledInput 
                                onchange = {(e : ChangeEventHandler) => {
                                    setUserDetails({...userDetails, } )
                                }}
                                label={field.label} 
                                fieldName={field.fieldName} 
                                type={field.type} 
                            />
                        ))} */}
                        <div className="mb-5">
                            <label className="font-semibold text-md tracking-wide">Email</label>
                            <input
                                // onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                //     setUserDetails({ ...userDetails, email: e.target.value })
                                // }}
                                className="w-full p-2 border border-gray-300 text-md rounded-lg focus:outline-sky-400"
                                onChange={handleInputChange}
                                placeholder="Enter email"
                                name='email'
                                type="email" />
                        </div>
                        <div className="mb-5">
                            <label className="font-semibold text-md tracking-wide">Username</label>
                            <input
                                autoComplete="off"
                                // onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                //     setUserDetails({ ...userDetails, username: e.target.value })
                                // }}
                                className="w-full p-2 border border-gray-300 text-md rounded-lg focus:outline-sky-400"
                                onChange={handleInputChange}
                                placeholder="Enter username"
                                name="username" />
                        </div>
                        <div className="mb-5">
                            <label className="font-semibold text-md tracking-wide">Phone Number</label>
                            <input
                                // onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                //     setUserDetails({ ...userDetails, number: e.target.value })
                                // }}
                                className="w-full p-2 border border-gray-300 text-md rounded-lg focus:outline-sky-400"
                                onChange={handleInputChange}
                                placeholder="Enter phone number"
                                name="number" />
                        </div>
                        <div className="mb-5">
                            <label className="font-semibold text-md tracking-wide">Password</label>
                            <input
                                // onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                //     setUserDetails({ ...userDetails, password: e.target.value })
                                // }}
                                className="w-full p-2 border border-gray-300 text-md rounded-lg focus:outline-sky-400"
                                type='password'
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                name="password" />
                        </div>
                        <div>
                            <button
                                onClick={submitUserDetails}
                                className="w-full mt-6 bg-sky-600 p-3 border rounded-md  text-slate-100 font-bold text-md cursor-pointer">
                                <Link href='/dashboard'>Sign up</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



// const inputFields = [{
//         field: 'email',
//         fieldName: 'Email',
//         label: 'Enter email',
//         type: 'email'
//     },
//     {
//         field: 'username',
//         fieldName: 'Username',
//         label: 'Enter username',
//         type: 'text'
//     },
//     {
//         field: 'number',
//         fieldName: 'Phone number',
//         label: 'Enter phone number',
//         type: 'text',
//     },
//     {
//         field: 'password',
//         fieldName: 'Password',
//         label: 'Enter password',
//         type: 'password'
//     }]