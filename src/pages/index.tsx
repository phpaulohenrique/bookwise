import Link from 'next/link'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import Image from 'next/image'
import { StarRating } from '@/components/StarRating'
import hobbitLogo from '../../assets/books/o-hobbit.png'
import { Sidebar } from '@/components/Sidebar'
import { BookCard } from '@/components/BookCard'

export default function Home() {
    return (
        <div className="wrapperCustomClass grid grid-cols-[232px_minmax(200px,_800px)_324px] gap-16">
            <Sidebar />
            <main className="flex">
                <div>
                    <div className="flex items-center gap-3 mt-[72px]">
                        <ChartLineUp size={32} className="text-green-100" />
                        <h1 className="text-base">Home</h1>
                    </div>

                    <strong className="font-normal text-sm mt-10 inline-block">
                        Avaliações mais recentes
                    </strong>

                    <article className="bg-gray-700 rounded-lg p-6 mt-4">
                        <header className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="http://github.com/phpaulohenrique.png"
                                    alt=""
                                    width={120}
                                    height={120}
                                    quality={100}
                                    className="w-10 h-10 rounded-full border border-gradient-vertical "
                                />
                                <div>
                                    <span className="text-md">Paulo Henrique</span>
                                    <time className="block text-gray-400 text-sm">Hoje</time>
                                </div>
                            </div>

                            <div>
                                <StarRating rate={3} />
                            </div>
                        </header>

                        <article className="mt-8 flex gap-5 ">
                            <Image
                                src={hobbitLogo}
                                height={152}
                                width={108}
                                alt=""
                                className="w-[108px] h-[152px]"
                            />
                            <div className="flex flex-col">
                                <strong>O Hobbit</strong>
                                <span className="text-sm text-gray-400">J.R.R Tolkien</span>
                                <p className="mt-5 text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                                    dolore inventore sed nemo nesciunt possimus maiores. Saepe
                                    perferendis magnam eius odio, nihil tempore tenetur? In rerum
                                    nulla distinctio ipsa error.
                                </p>
                            </div>
                        </article>
                        <div></div>
                    </article>
                </div>
            </main>

            <div className="mt-[146px]">
                <div>
                    <div className="flex items-center justify-between">
                        <strong className="text-sm font-normal">Livros populares</strong>
                        <Link
                            href="/popularbooks"
                            className="text-purple-100 flex gap-2 items-center text-sm"
                        >
                            Ver todos
                            <CaretRight size={24} />
                        </Link>
                    </div>

                    <ul className="flex flex-col gap-3 mt-4">
                        {/* <li className="py-4 px-5 bg-gray-700 flex flex-row gap-5 rounded-lg">
                            <Image src={hobbitLogo} height={94} width={64} alt="" />
                            <div className="flex flex-col">
                                <div>
                                    <strong className="block">A revolução dos bichos</strong>
                                    <span className="text-sm text-gray-400">George Orwell</span>
                                </div>

                                <StarRating rate={4} className="mt-auto" />
                            </div>
                        </li> */}
                        <li>
                            <BookCard />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
