import React from "react";
import Link from "next/link";

export default async function Recipes() {
    return (
        <div>
            <h1 className="text-xl">Recipes</h1>
            <Link href={"/"}>Back to Home</Link>
        </div>
    );
}
