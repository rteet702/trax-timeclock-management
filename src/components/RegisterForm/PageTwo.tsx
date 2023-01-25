import { Dispatch, FormEvent, FunctionComponent, SetStateAction } from "react";
import TextInput from "../TextInput";

type UserInfo = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

interface IProps {
    accountType: string;
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

const PageTwo: FunctionComponent<IProps> = ({
    accountType,
    userInfo,
    setUserInfo,
}) => {
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
                <h2 className="text-4xl text-center">
                    First, let us get some info from you!
                </h2>
                <TextInput
                    placeholder="first name..."
                    value={userInfo.firstName}
                    onChange={(e: any) =>
                        setUserInfo((prev) => {
                            return {
                                ...prev,
                                firstName: e.target.value,
                            };
                        })
                    }
                />
                <TextInput
                    placeholder="last name..."
                    value={userInfo.lastName}
                    onChange={(e: any) =>
                        setUserInfo((prev) => {
                            return {
                                ...prev,
                                lastName: e.target.value,
                            };
                        })
                    }
                />
                <TextInput
                    placeholder="email..."
                    type="email"
                    value={userInfo.email}
                    onChange={(e: any) =>
                        setUserInfo((prev) => {
                            return {
                                ...prev,
                                email: e.target.value,
                            };
                        })
                    }
                />
                <TextInput
                    placeholder="password..."
                    type="password"
                    value={userInfo.password}
                    onChange={(e: any) =>
                        setUserInfo((prev) => {
                            return {
                                ...prev,
                                password: e.target.value,
                            };
                        })
                    }
                />
                <TextInput
                    placeholder="confirm password..."
                    type="password"
                    value={userInfo.confirmPassword}
                    onChange={(e: any) =>
                        setUserInfo((prev) => {
                            return {
                                ...prev,
                                confirmPassword: e.target.value,
                            };
                        })
                    }
                />
            </div>
        );
    }

    return <div>Please go back and select an account type!</div>;
};

export default PageTwo;
