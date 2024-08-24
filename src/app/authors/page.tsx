import React from "react";
import Link from "next/link";
import { SITE_TITLE } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Authors | ${SITE_TITLE}`,
};

export default async function Authors() {
  return (
    <div>
      <h1 className="text-xl">Authors</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
