import Link from "next/link";
import React from "react";

type Props = {
  params: {
    recipe: string;
  };
};

export default function Recipe({ params }: Props) {
  return (
    <div>
      <p>Recipe: {params.recipe}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
