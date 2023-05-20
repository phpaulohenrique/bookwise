import { Star } from '@phosphor-icons/react'

interface IStarsRating {
    rate: 1 | 2 | 3 | 4 | 5
    className?: string | null
}

export function StarRating({ rate, className }: IStarsRating) {
    const totalStars = 5
    const starsPosition = Array.from({ length: totalStars }).map((_, i) => i + 1)

    return (
        <div className={`flex ${className}`}>
            {starsPosition.map((star) => {
                return (
                    <Star
                        key={star}
                        weight={rate >= star ? 'fill' : 'light'}
                        color="#8381D9"
                        size={16}
                    />
                )
            })}
        </div>
    )
}
