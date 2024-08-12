import React from "react";
import Link from "next/link";
import { SITE_TITLE } from "@/constants";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(
    parent: ResolvingMetadata
): Promise<Metadata> {
    const parentTitle = (await parent).title?.absolute || SITE_TITLE;

    return {
        title: `Categories | ${parentTitle}`,
    };
}

export default async function Categories() {
    return (
        <div>
            <h1 className="text-xl">Categories</h1>
            <Link href={"/"}>Back to Home</Link>
        </div>
    );
}
