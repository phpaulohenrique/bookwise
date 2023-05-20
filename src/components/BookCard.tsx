import Image from 'next/image'
import hobbitLogo from '../../assets/books/o-hobbit.png'
import { StarRating } from './StarRating'

interface IBookCardProps {
    size?: 'sm' | 'md'
    className?: string
}

export function BookCard({ size = 'sm', className }: IBookCardProps) {
    return (
        <button
            className={`py-4 px-5 bg-gray-700 flex flex-row gap-5 rounded-lg items-stretch ${className}`}
        >
            <Image
                src={hobbitLogo}
                height={size === 'sm' ? 94 : 142}
                width={size === 'sm' ? 64 : 94}
                alt=""
            />
            <div className="flex flex-col content-between h-full flex-wrap">
                <div className="flex flex-col justify-start items-start">
                    <strong>A revolução dos bichos</strong>
                    <span className="text-sm text-gray-400">George Orwell</span>
                </div>

                <StarRating rate={4} className="" />
            </div>
        </button>
    )
}
