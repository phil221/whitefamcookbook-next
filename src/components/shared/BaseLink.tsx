"use client"

import cn from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import React, { useEffect } from 'react'

type Props = {
    href: string;
    text: string;
    children?: React.ReactNode;
    className?: string;
} & LinkProps;

const NavLink = ({ href, text, children, className, ...props }: Props) => {
    const [active, setActive] = React.useState(false)

    useEffect(() => {
        console.log({ href })
        setActive(window ? window.location.pathname === href : false)
    }, [])

    return (
        <Link
            className={cn("text-md font-medium border-b border-transparent hover:border-gray-950 ease-in-out duration-300 hover:font-semibold w-fit", className, {
                "border-gray-950": active,
                "font-semibold": active
            })}
            href={href}
            {...props}
        >
            {children ?? text}
        </Link>
    );
}

export default NavLink;