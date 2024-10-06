import { Input } from "@repo/ui/input";

interface LabelledInputType {
    label: string;
    type: string;
    fieldName: string;
}

export default function LabelledInput({label, type, fieldName} : LabelledInputType) {
    return (
        <div className="mb-5">
            <label className="font-semibold text-lg tracking-wide">{fieldName}</label>
            <Input className="w-full p-2 border border-gray-300 text-lg rounded-lg focus:outline-sky-400" type={type} appName="user-app" label={label} />
        </div>
    )
}