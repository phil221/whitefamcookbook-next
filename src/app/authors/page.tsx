import React from "react";
import Link from "next/link";
import { SITE_TITLE } from "@/constants";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(
    parent: ResolvingMetadata
): Promise<Metadata> {
    const parentTitle = (await parent).title?.absolute || SITE_TITLE;

    return {
        title: `Authors | ${parentTitle}`,
    };
}

export default async function Authors() {
    return (
        <div>
            <h1 className="text-xl">Authors</h1>
            <Link href={"/"}>Back to Home</Link>
        </div>
    );
}
