"use client"
import { LeftNav } from "../../../components/LeftNav"
import { Navbar } from "@repo/ui/navbar"
import { useState } from "react";
import { RadioGroup } from "../../../components/RadioGroup";
import { cities } from "./cities";
import DatePicker from "../../../components/Datepicker";

// interface IButtonState {
//     oneWay: boolean;
//     roundTrip: boolean;
// }

export default function FlightTickets() {
    // const [selectedButton, setSelectedButton] = useState('one-way')
    // const options = ['one-way', 'two-way']

    const [oneWay, setOneWay] = useState(true);
    const [twoWay, setTwoWay] = useState(false);
    // const []

    const onInputClick = () => {

    }

    const handleRadioButtonClick = () => {
        if (oneWay === true) {
            setOneWay(false);
            setTwoWay(true);
        }
        else {
            setOneWay(true);
            setTwoWay(false);
        }
    }

    return (
        

            <div className="md:grid md:col-span-10 h-full w-full flex flex-col jusitfy-start items-start bg-slate-50">
                <div className="h-full">
                    {/* <div className="">
                        <Navbar appName="user-app" balance="1099.87" />
                    </div> */}

                    <div className="p-10 h-fit w-full">
                        <div className="font-serif text-3xl font-bold text-sky-950 pb-10">Flight Tickets</div>

                        <div className="bg-slate-100 w-full h-fit p-10 border rounded-md">

                            <div className="flex flex-row gap-5 justify-start items-center">
                                <label className="text-xl font-semibold cursor-pointer text-slate-900 flex flex-row gap-3 justify-start items-center px-5">
                                    <input
                                        type="radio"
                                        value="One-way"
                                        checked={oneWay}
                                        onClick={handleRadioButtonClick}
                                        className="w-5 h-5 focus:ring-sky-600 cursor-pointer" />
                                    One way
                                </label>
                                <label className="text-xl font-semibold text-slate-900 cursor-pointer flex flex-row gap-3 justify-start items-center px-5">
                                    <input
                                        type="radio"
                                        value="Round-trip"
                                        checked={twoWay}
                                        onClick={handleRadioButtonClick}
                                        className="w-5 h-5 focus:ring-sky-600 cursor-pointer" />
                                    Round trip
                                </label>
                            </div>


                            <div className="h-fit grid grid-rows-4 gap-5">

                                <div className="row-span-1 grid grid-cols-2 gap-20 w-3/4 px-4 pt-10">
                                    <div className="col-span-1 flex flex-col gap-3 px-2">
                                        <div className='text-sm text-slate-500'>From</div>

                                        <select className="cursor-pointer shadow-md rounded-md focus:ring-0 w-full ring-0 outline-none focus:outline-none divide-y-2">
                                            {cities.map((city) => {
                                                return <option className="ring-0 outline-none focus:outline-none">
                                                    {city.city}
                                                </option>
                                            })}
                                        </select>
                                    </div>

                                    {/* <div className="col-span-1 px-2 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                        </svg>
                                    </div> */}

                                    <div className="col-span-1 flex flex-col gap-3 px-2">
                                        <div className="text-sm text-slate-500">To</div>
                                        <select className="cursor-pointer shadow-md rounded-md focus:ring-0 w-full ring-0 outline-none focus:outline-none divide-y-2">
                                            {cities.map((city) => {
                                                return <option className="ring-0 outline-none focus:outline-none">

                                                    {city.city}
                                                </option>
                                            })}
                                        </select>
                                    </div>

                                </div>

                                <div className="row-span-1">
                                    <div className="grid grid-cols-2 gap-20 w-3/4 px-5">
                                        <div className="flex flex-col col-span-1">
                                            <div className="text-sm text-slate-500 mb-3">Departure date</div>
                                            <DatePicker />
                                        </div>

                                        {twoWay === true ? (
                                            <div className="flex flex-col col-span-1">
                                                <div className="text-sm text-slate-500 mb-3">Return date</div>
                                                <DatePicker />
                                            </div>
                                        ) : (
                                            <div
                                                onClick={() => {
                                                    if (twoWay === false) {
                                                        setTwoWay(true);
                                                        setOneWay(false);
                                                    }
                                                }}
                                                className="flex mt-5 w-fit cursor-pointer hover:text-blue-500 text-blue-600 font-bold underline underline-offset-2 text-lg items-center justify-center">
                                                + Add return
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="row-span-1 py-0 my-0">
                                    <div className="grid grid-cols-2 gap-20 w-3/4 pl-6">

                                        <div className="col-span-1 flex flex-col gap-3">
                                            <div className="text-sm text-slate-500">Travellers</div>
                                            <select className="w-full cursor-pointer shadow-md rounded-md">
                                                <option>
                                                    Adult
                                                </option>
                                                <option>
                                                    Children
                                                </option>
                                                <option>Infant</option>
                                            </select>
                                        </div>

                                        <div className="col-span-1 flex flex-col gap-3">
                                            <div className="text-sm text-slate-500">Cabin class</div>
                                            <select className="w-full cursor-pointer shadow-md rounded-md">
                                                <option>
                                                    {/* <div>Adult</div> */}
                                                    Economy
                                                </option>
                                                <option>
                                                    Premium Economy
                                                </option>
                                                <option>Business</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                                <div className="row-span-1 mt-0 pt-0">
                                    <div className="col-span-1 flex items-center justify-start pl-6">
                                        <button className="bg-sky-800 rounded-md cursor-pointer hover:bg-sky-700 text-lg font-semibold text-white p-3 w-3/4 h-1/2 flex justify-center items-center">
                                            Search Flights
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

    )
}