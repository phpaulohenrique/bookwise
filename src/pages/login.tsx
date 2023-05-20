import Image from 'next/image'
import logoHero from '../../assets/hero.png'
import googleIcon from '../../assets/google-icon.svg'
import rocketIcon from '../../assets/rocket-icon.svg'
import githubIcon from '../../assets/github-icon.svg'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="max-h-screen overflow-hidden grid grid-cols-2 max-w-[1500px] mx-auto">
            <div className="m-5">
                <Image
                    src={logoHero}
                    alt=""
                    quality={100}
                    className="object-cover h-auto rounded-xl max-h-[95vh]"
                />
            </div>

            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-2xl">Boas vindas!</h1>
                    <span>Faça seu login ou acesse como visitante.</span>

                    <div className="flex flex-col gap-4 mt-10">
                        <button className="bg-gray-600 text-lg flex justify-start items-center gap-5 rounded-lg py-4 px-5 w-[372px] max-w-[372px] hover:bg-gray-500">
                            <Image src={googleIcon} alt="" />
                            Entrar com Google
                        </button>

                        <button className="bg-gray-600 text-lg flex justify-start items-center gap-5 rounded-lg py-4 px-5 w-[372px] max-w-[372px] hover:bg-gray-500">
                            <Image src={githubIcon} alt="" />
                            Entrar com GitHub
                        </button>

                        <Link
                            href="/"
                            className="bg-gray-600 text-lg flex justify-start items-center gap-5 rounded-lg py-4 px-5 w-[372px] max-w-[372px] hover:bg-gray-500"
                        >
                            <Image src={rocketIcon} alt="" />
                            Acessar como visitante
                        </Link>
                    </div>
                </div>
            </div>
            <div></div>
        </main>
    )
}
