import React from "react";
import Link from "next/link";
import { SITE_TITLE } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Categories | ${SITE_TITLE}`,
};

export default async function Categories() {
  return (
    <div>
      <h1 className="text-xl">Categories</h1>
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
}
