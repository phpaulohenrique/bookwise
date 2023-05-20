import { MagnifyingGlass } from '@phosphor-icons/react'
import { InputHTMLAttributes } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    placeholder: string
    className?: string
}

export function Input({ name, placeholder, className, ...props }: IInputProps) {
    return (
        <label
            className={`flex gap-2 border rounded-md border-gray-500 py-[8px] px-5 w-full max-w-[400px] items-center justify-center focus-within:ring-1 focus-within:ring-blue-500 ${className} `}
        >
            <input
                className="bg-transparent flex-1 focus:outline-none "
                name={name}
                id={name}
                placeholder={placeholder}
                {...props}
            />
            <button className="p-2" title="Search" type="submit">
                <MagnifyingGlass size={20} />
            </button>
        </label>
    )
}
