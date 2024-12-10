import Image from "next/image";
import Link from "next/link";
import BaseLink from "./shared/BaseLink";

const SiteHeader = () => {
  return (
    <header className="bg-beige-200 border-b-[0.25px] border-gray-950 border-double sticky top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <div className="flex gap-x-3 align-center lg:flex-1">
              <Image
                src="/images/site-logo.png"
                width={25}
                height={25}
                alt="White family clan logo"
              />
              <h1 className="text-xl font-medium text-gray-800">
                The White Family Cookbook
              </h1>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-4 align-center">
          <BaseLink href={"/recipes"} text="Recipes" />
          <div className="w-px my-auto h-5 bg-gray-900" />
          <BaseLink href={"/authors"} text="Authors" />
          <div className="w-px my-auto h-5 bg-gray-900" />
          <BaseLink href={"/categories"} text="Categories" />
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
