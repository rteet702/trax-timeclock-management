import { Open_Sans } from "@next/font/google";
import Link from "next/link";
import TextInput from "../components/TextInput";

const oSans = Open_Sans({ subsets: ["latin"], axes: ["wdth"] });

export default function Home() {
    return (
        <main
            className={`h-screen backdrop-blur-sm flex items-center justify-center tracking-widest ${oSans.className}`}
        >
            <div className="bg-neutral-100 rounded shadow-2xl p-5 flex flex-col gap-5 items-center w-11/12 lg:w-fit">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl">TRAX</h1>
                    <p>Timeclock Management</p>
                </div>

                <form className="flex flex-col gap-3 flex-1">
                    <TextInput type="text" placeholder="email..." />
                    <TextInput type="password" placeholder="password..." />
                    <button className="bg-cyan-100 p-3 rounded shadow hover:shadow-lg hover:bg-cyan-50 transition-all">
                        Login
                    </button>
                </form>
                <p>
                    Not a user?{" "}
                    <Link href="/register" className="text-blue-500">
                        Register Now!
                    </Link>
                </p>
            </div>
        </main>
    );
}
