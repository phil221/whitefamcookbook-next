import React from "react";
import Link from "next/link";

export default async function Categories() {
    return (
        <div>
            <h1 className="text-xl">Categories</h1>
            <Link href={"/"}>Back to Home</Link>
        </div>
    );
}
