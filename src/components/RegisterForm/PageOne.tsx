import { Dispatch, FormEvent, FunctionComponent, SetStateAction } from "react";

interface IProps {
    setAccountType: Dispatch<SetStateAction<string>>;
    accountType: string;
}

const PageOne: FunctionComponent<IProps> = ({
    setAccountType,
    accountType,
}) => {
    const handleSelect = (e: FormEvent<HTMLButtonElement>, value: string) => {
        e.preventDefault();

        setAccountType(value);
    };

    return (
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl w-full text-center">
                What type of account do you need?
            </h2>
            <div className="flex w-full gap-5">
                <button
                    onClick={(e) => handleSelect(e, "Employer")}
                    className={`flex-1 h-[300px] shadow-xl ${
                        accountType === "Employer" ? "bg-cyan-200" : "bg-white"
                    } hover:bg-cyan-100 transition-colors flex items-center justify-center text-4xl`}
                >
                    Employer
                </button>
                <button
                    onClick={(e) => handleSelect(e, "Employee")}
                    className={`flex-1 h-[300px] shadow-xl  ${
                        accountType === "Employee" ? "bg-cyan-200" : "bg-white"
                    } hover:bg-cyan-100 transition-colors flex items-center justify-center text-4xl`}
                >
                    Employee
                </button>
            </div>
        </div>
    );
};

export default PageOne;
