import { BookCard } from '@/components/BookCard'
import { Input } from '@/components/Input'
import { PageHeading } from '@/components/PageHeading'
import { Sidebar } from '@/components/Sidebar'
import { Binoculars, ChartLineUp, MagnifyingGlass } from '@phosphor-icons/react'
import { useRouter } from 'next/router'

export default function Explore() {
    const router = useRouter()
    return (
        <div className="grid grid-cols-[232px_minmax(200px,1fr)] gap-16 wrapperCustomClass ">
            <Sidebar />

            <main>
                <div className="flex items-center gap-3 mt-[72px]">
                    <Binoculars size={32} className="text-green-100" />
                    <h1 className="text-base">Explore</h1>
                </div>
                {/* <PageHeading path={'/home'} /> */}

                <form className="flex justify-end mt-[-20px]">
                    <Input type="text" name="search" placeholder="Search book or author" />
                </form>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-purple-200 rounded-full text-center px-4 py-1 font-normal"
                    >
                        All
                    </button>
                    <button
                        type="submit"
                        className="bg-transparent rounded-full text-center px-4 py-1 font-normal text-purple-100 border border-purple-100"
                    >
                        Computing
                    </button>
                    {/* {/* <button type="submit">Education</button> */}
                    {/* <button type="submit">Fantasy</button> */}
                </div>

                <ul className="flex gap-5 flex-wrap mt-12">
                    <li>
                        <BookCard
                            size="md"
                            className="hover:cursor-pointer hover:bg-gray-600 transition-colors"
                        />
                    </li>

                    <li>
                        <BookCard size="md" />
                    </li>

                    <li>
                        <BookCard size="md" />
                    </li>

                    <li>
                        <BookCard size="md" />
                    </li>
                </ul>
            </main>
        </div>
    )
}
