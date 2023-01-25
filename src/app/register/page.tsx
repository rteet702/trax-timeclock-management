"use client";

import PageOne from "@/components/RegisterForm/PageOne";
import PageTwo from "@/components/RegisterForm/PageTwo";
import { Open_Sans } from "@next/font/google";
import { NextPage } from "next";
import { useState } from "react";

const oSans = Open_Sans({ subsets: ["latin"] });

const RegisterPage: NextPage = () => {
    const [active, setActive] = useState(0);
    const [accountType, setAccountType] = useState("");

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const steps = ["Specify type of account", "Enter basic info"];
    const pages = [
        <PageOne setAccountType={setAccountType} accountType={accountType} />,
        <PageTwo
            accountType={accountType}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
        />,
    ];

    return (
        <main
            className={`h-screen backdrop-blur-sm flex items-center justify-center tracking-widest ${oSans.className}`}
        >
            <div className="bg-white rounded shadow-2xl flex items-start w-6/12 overflow-hidden">
                <div className="flex-1 h-[500px] bg-white hidden lg:flex flex-col shadow-2xl overflow-hidden">
                    {steps.map((step, index) => {
                        return (
                            <div
                                key={index}
                                className={`p-3 border-neutral-50 transition-colors ${
                                    index === active
                                        ? "bg-blue-200"
                                        : "bg-white"
                                } ${
                                    index === 0 ? "border-none" : "border-t-2"
                                }`}
                            >
                                <h3 className="text-sm">Step {index + 1}:</h3>
                                <p className="font-bold">{step}</p>
                            </div>
                        );
                    })}
                </div>

                <form className="flex-[3] h-[500px] bg-neutral-100 flex flex-col justify-between gap-5 p-5">
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
