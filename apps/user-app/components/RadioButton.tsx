import { Dispatch, SetStateAction, ChangeEventHandler } from 'react';

interface IRadioButton {
    value: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    label: string;
}

export const RadioButton = ({ value, checked, onChange, label }: IRadioButton) => {
    return (
        <label className="text-xl font-semibold cursor-pointer text-slate-900 flex flex-row gap-3 justify-start items-center px-5">
            <input
                type="radio"
                value={value}
                checked={checked}
                onChange={onChange}
                className="w-5 h-5 focus:ring-sky-600 focus:ring-1 cursor-pointer" />
            {label}
        </label>
    )
}