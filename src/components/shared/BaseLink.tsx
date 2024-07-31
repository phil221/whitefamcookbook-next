import Link from 'next/link';
import React from 'react'

type Props = {
    href: string;
    text: string;
    children?: React.ReactNode;
}

const NavLink = ({ href, text, children }: Props) => {

    return (
        <Link className="text-md font-medium border-b border-transparent hover:border-gray-950 ease-in-out duration-300 hover:font-semibold w-fit" href={href}>{children ?? text}</Link>
    );
}

export default NavLink;