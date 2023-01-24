import { FunctionComponent } from "react";

interface IProps {
    [rest: string]: any;
}

const TextInput: FunctionComponent<IProps> = ({ ...rest }) => {
    return (
        <input
            {...rest}
            className="bg-neutral-100 p-3 rounded shadow focus:shadow-lg focus:outline-none transition-shadow"
        />
    );
};

export default TextInput;
