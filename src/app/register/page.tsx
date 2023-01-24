"use client";

import PageOne from "@/components/RegisterForm/PageOne";
import PageTwo from "@/components/RegisterForm/PageTwo";
import { Open_Sans } from "@next/font/google";
import { NextPage } from "next";
import { useState } from "react";

const oSans = Open_Sans({ subsets: ["latin"], axes: ["wdth"] });

const RegisterPage: NextPage = () => {
    const [active, setActive] = useState(0);
    const [accountType, setAccountType] = useState("");

    const steps = ["Specify type of account", "Enter basic info"];
    const pages = [
        <PageOne setAccountType={setAccountType} accountType={accountType} />,
        <PageTwo />,
    ];

    return (
        <main
            className={`h-screen backdrop-blur-sm flex items-center justify-center tracking-widest ${oSans.className}`}
        >
            <div className="bg-white rounded shadow-2xl p-5 flex gap-5 items-start w-11/12 ">
                <div className="flex-1 hidden lg:flex flex-col shadow-lg rounded-lg overflow-hidden">
                    {steps.map((step, index) => {
                        return (
                            <div
                                key={index}
                                className={`p-3 border-neutral-50 transition-colors ${
                                    index === active
                                        ? "bg-blue-200"
                                        : "bg-white"
                                } ${
                                    index === 0
                                        ? "border-2"
                                        : "border-2 border-t-0"
                                }`}
                            >
                                <h3 className="text-sm">Step {index + 1}:</h3>
                                <p className="font-bold">{step}</p>
                            </div>
                        );
                    })}
                </div>

                <form className="flex-[4] bg-white flex flex-col gap-5">
                    {pages[active]}
                    <div className="flex gap-3">
                        {active !== 0 && (
                            <button
                                className="flex-1 bg-red-500 hover:bg-red-400 transition-colors shadow-lg p-3"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive((prev) => prev - 1);
                                }}
                            >
                                Previous
                            </button>
                        )}
                        {active !== pages.length - 1 && (
                            <button
                                className="flex-1 bg-cyan-500 hover:bg-cyan-400 transition-colors shadow-lg p-3"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive((prev) => prev + 1);
                                }}
                            >
                                Next
                            </button>
                        )}
                        {active === pages.length - 1 && (
                            <button className="flex-1 bg-green-500 hover:bg-green-400 transition-colors shadow-lg p-3">
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
};

export default RegisterPage;
