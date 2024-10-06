import { RadioButton } from "./RadioButton"
import { Dispatch, SetStateAction, ChangeEventHandler } from 'react';

interface IRadioGroup {
    options: string[];
    value: string;
    // setValue: Dispatch<SetStateAction<string>>;
    setValue: (event: ChangeEventHandler<HTMLInputElement>) => void;
}

export const RadioGroup = ({ options, value, setValue }: IRadioGroup) => {
    return (
        <>
            {options.map((option) => (
                <RadioButton
                    key={option}
                    value={option}
                    label={option}
                    checked={option === value}
                    onChange={() => setValue(option)}
                />
            ))}
        </>
    )
}