import { BookCard } from '@/components/BookCard'
import { Input } from '@/components/Input'
import { PageHeading } from '@/components/PageHeading'
import { Sidebar } from '@/components/Sidebar'
import { BookOpen, BookmarkSimple, Books, User, UserList } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Profile() {
    return (
        <div className="wrapperCustomClass grid grid-cols-[232px_minmax(200px,_800px)_308px] gap-16">
            <Sidebar />

            <main className="overflow-auto">
                <div className="flex items-center gap-3 mt-[72px]">
                    <User size={32} className="text-green-100" />
                    <h1 className="text-base">Profile</h1>
                </div>
                {/* <PageHeading text={'Profile'} icon={<User />} /> */}

                <form className="mt-6">
                    <Input name="search" placeholder="Search rated book" className="max-w-none" />
                </form>

                <div className="mt-8 flex flex-col gap-4 last:mb-40">
                    <div>
                        <span className="text-gray-300 text-sm">2 days ago</span>
                        <div className="bg-gray-700 rounded-lg p-6 mt-1">
                            <BookCard size="sm" className="bg-transparent px-0 py-0" />
                            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Reprehenderit recusandae repellat adipisci voluptatibus? Harum
                                asperiores mollitia nostrum expedita deleniti iure explicabo tempore
                                labore exercitationem. Sequi hic commodi harum eaque corporis?
                            </p>
                        </div>
                    </div>

                    <div>
                        <span className="text-gray-300 text-sm">2 days ago</span>
                        <div className="bg-gray-700 rounded-lg p-6 mt-1">
                            <BookCard size="sm" className="bg-transparent px-0 py-0" />
                            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Reprehenderit recusandae repellat adipisci voluptatibus? Harum
                                asperiores mollitia nostrum expedita deleniti iure explicabo tempore
                                labore exercitationem. Sequi hic commodi harum eaque corporis?
                            </p>
                        </div>
                    </div>

                    <div>
                        <span className="text-gray-300 text-sm">2 days ago</span>
                        <div className="bg-gray-700 rounded-lg p-6 mt-1">
                            <BookCard size="sm" className="bg-transparent px-0 py-0" />
                            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Reprehenderit recusandae repellat adipisci voluptatibus? Harum
                                asperiores mollitia nostrum expedita deleniti iure explicabo tempore
                                labore exercitationem. Sequi hic commodi harum eaque corporis?
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <div className="pl-6  border-gray-600 border-l-[1px]  max-h-[555px] h-full flex flex-col items-center self-center">
                <Image
                    src="http://github.com/phpaulohenrique.png"
                    alt=""
                    width={216}
                    height={216}
                    quality={100}
                    className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-blue-500"
                />
                <strong className="text-xl mt-4">Paulo Henrique</strong>
                <span className="text-gray-400 text-sm">Member since 2013</span>
                <div className="after:content-[''] after:bg-blue-400 after:rounded after:w-8  after:h-1 after:inline-block my-8" />
                <div className="flex flex-col gap-4 mt-2">
                    <div className="flex gap-5 items-center">
                        <BookOpen size={32} className="text-green-100" />
                        <div>
                            <strong className="block">3853</strong>
                            <span className="text-gray-400 text-sm">Pages read</span>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <Books size={32} className="text-green-100" />
                        <div>
                            <strong className="block">10</strong>
                            <span className="text-gray-400 text-sm">Rated books</span>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <UserList size={32} className="text-green-100" />
                        <div>
                            <strong className="block">8</strong>
                            <span className="text-gray-400 text-sm">Authors read</span>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <BookmarkSimple size={32} className="text-green-100" />
                        <div>
                            <strong className="block">Computing</strong>
                            <span className="text-gray-400 text-sm">Most read category</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
