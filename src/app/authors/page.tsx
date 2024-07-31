import React from "react";
import Link from "next/link";

export default async function Authors() {
    return (
        <div>
            <h1 className="text-xl">Authors</h1>
            <Link href={"/"}>Back to Home</Link>
        </div>
    );
}
