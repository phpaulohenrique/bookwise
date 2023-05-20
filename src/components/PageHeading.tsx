import { Binoculars, ChartLineUp, Icon, User } from '@phosphor-icons/react'
import { ReactElement } from 'react'

const pages = {
    home: ChartLineUp,
    explore: Binoculars,
    // profile: User,
    path: User,
}

interface IPageHeadingProps {
    text: 'Home' | 'Explore' | 'Profile'
    icon: ReactElement
}

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
        text: 'Perfil',
        icon: <User size={24} />,
    },
]

export function PageHeading({ text, icon }: IPageHeadingProps) {
    // const icon: Icon = pages[path]
    // console.log(icon)

    return (
        <div className="flex items-center gap-3 mt-[72px]">
            {/* <a size={32} className="text-green-100" /> */}
            {icon}
            {/* {links.filter(link => link.)} */}
            <h1 className="text-base capitalize">{text}</h1>
        </div>
    )
}
