import Link from "next/link";
import React from "react";

export default function RecipesList() {
  return (
    <ul className="pl-2">
      <li>
        <Link href="/recipes/cheese">Cheese</Link>
      </li>
      <li>
        <Link href="/recipes/food">Food</Link>
      </li>
      <li>
        <Link href="/recipes/bread">Bread</Link>
      </li>
      <li>
        <Link href="/recipes/onions">Onions</Link>
      </li>
    </ul>
  );
}
