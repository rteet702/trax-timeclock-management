"use client";

import PageOne from "@/components/RegisterForm/PageOne";
import PageTwo from "@/components/RegisterForm/PageTwo";
import { Open_Sans } from "@next/font/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const oSans = Open_Sans({ subsets: ["latin"] });

const RegisterPage = () => {
    const [active, setActive] = useState(0);
    const [accountType, setAccountType] = useState("");
    const router = useRouter();

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
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
            errors={errors}
        />,
    ];

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateFormData(userInfo)) {
            console.log("Error processing form data.", errors);
            return;
        }

        axios
            .post("/api/users", { ...userInfo })
            .then(() => {
                setUserInfo({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                router.push("/dashboard");
            })
            .catch((error) => console.error(error));
    };

    const validateFormData = (data: typeof userInfo): boolean => {
        let isValid = true;

        if (data.firstName.length < 3) {
            isValid = false;
            setErrors((prev) => {
                return {
                    ...prev,
                    firstName: "First Name must be at least 3 characters!",
                };
            });
        }
        if (data.lastName.length < 3) {
            isValid = false;
            setErrors((prev) => {
                return {
                    ...prev,
                    lastName: "Last Name must be at least 3 characters!",
                };
            });
        }
        if (!data.email) {
            isValid = false;
            setErrors((prev) => {
                return {
                    ...prev,
                    email: "Please enter a valid email!",
                };
            });
        }
        if (data.password.length < 6) {
            isValid = false;
            setErrors((prev) => {
                return {
                    ...prev,
                    password: "Password must be at least 6 characters long!",
                };
            });
        }
        if (data.confirmPassword !== data.password) {
            isValid = false;
            setErrors((prev) => {
                return {
                    ...prev,
                    confirmPassword: "Confirmation doesn't match Password!",
                };
            });
        }
        return isValid;
    };

    return (
        <main
            className={`h-screen backdrop-blur-sm flex items-center justify-center tracking-widest ${oSans.className}`}
        >
            <div className="bg-white rounded-xl shadow-2xl h-[550px] flex items-start w-6/12 overflow-hidden">
                <div className="flex-1 bg-white hidden lg:flex flex-col shadow-2xl overflow-hidden h-full">
                    {steps.map((step, index) => {
                        return (
                            <div
                                key={index}
                                className={`p-3 border-neutral-50 transition-colors hover:bg-blue-300 cursor-pointer ${
                                    index === active
                                        ? "bg-blue-200"
                                        : "bg-white"
                                }`}
                                onClick={() => setActive(index)}
                            >
                                <h3 className="text-sm">Step {index + 1}:</h3>
                                <p className="font-bold">{step}</p>
                            </div>
                        );
                    })}
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex-[2.5] bg-neutral-100 flex flex-col justify-between gap-5 p-5 h-full"
                >
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
