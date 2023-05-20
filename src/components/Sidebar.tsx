import { Binoculars, ChartLineUp, SignIn, User } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const links = [
    {
        href: '/',
        text: 'Home',
        icon: <ChartLineUp size={24} />,
    },

    {
        href: '/explore',
        text: 'Explore',
        icon: <Binoculars size={24} />,
    },

    {
        href: '/profile',
        text: 'Profile',
        icon: <User size={24} />,
    },
]

export function Sidebar() {
    const router = useRouter()
    console.log(router)
    return (
        <aside className="my-3 bg-[url('/background.png')] rounded-md p-6 flex flex-col gap-16 items-center ">
            <Image src={logo} alt="" />
            <nav>
                <ul className="flex flex-col gap-5 items-start">
                    {links.map((link) => {
                        return (
                            <li
                                key={link.text}
                                className="flex gap-3 items-center justify-center text-gray-400"
                            >
                                {link.icon}
                                <Link
                                    href={link.href}
                                    className={
                                        router.pathname === link.href
                                            ? 'font-bold text-gray-100 '
                                            : 'font-normal text-gray-400'
                                    }
                                >
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <Link href="/login" className="flex gap-2 mt-auto items-center">
                Fazer Login <SignIn size={20} className="text-green-100" />
            </Link>
        </aside>
    )
}
