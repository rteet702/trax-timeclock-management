import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="h-screen backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded shadow-2xl p-5 flex flex-col items-center w-11/12 lg:w-4/12">
                <h1 className="text-4xl">TRAX</h1>

                <div className="flex flex-col flex-1">
                    <button className="py-5 text-2xl w-full shadow-lg rounded-lg border-2 border-white px-6">
                        Employer Login
                    </button>
                    <button className="py-5 text-2xl w-full shadow-lg rounded-lg border-2 border-white px-6">
                        Employee Login
                    </button>
                    <button className="py-5 text-2xl w-full shadow-lg rounded-lg border-2 border-white px-6">
                        Register
                    </button>
                </div>
            </div>
        </main>
    );
}
