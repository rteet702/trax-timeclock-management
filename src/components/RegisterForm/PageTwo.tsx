import { FunctionComponent } from "react";
import TextInput from "../TextInput";

interface IProps {
    accountType: string;
}

const PageTwo: FunctionComponent<IProps> = ({ accountType }) => {
    if (accountType === "Employer") {
        return (
            <>
                <h2 className="text-4xl">
                    First, let us get some info from you and your company!
                </h2>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-3 flex-1">
                        <TextInput placeholder="first name..." />
                        <TextInput placeholder="last name..." />
                        <TextInput placeholder="email..." type="email" />
                        <TextInput placeholder="password..." type="password" />
                        <TextInput
                            placeholder="confirm password..."
                            type="password"
                        />
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                        <TextInput placeholder="company name..." />
                        <TextInput placeholder="industry..." />
                        <TextInput placeholder="estimated number of employees..." />
                    </div>
                </div>
            </>
        );
    } else if (accountType === "Employee") {
        return (
            <div className="flex flex-col gap-5">
                <h2 className="text-4xl">
                    First, let us get some info from you!
                </h2>
                <TextInput placeholder="first name..." />
                <TextInput placeholder="last name..." />
                <TextInput placeholder="email..." type="email" />
                <TextInput placeholder="password..." type="password" />
                <TextInput placeholder="confirm password..." type="password" />
            </div>
        );
    }

    return <div>Please go back and select an account type!</div>;
};

export default PageTwo;
