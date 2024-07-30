import Image from "next/image";
import Link from "next/link";

type Props = {

}

const SiteHeader = ({ }: Props) => {

    return (
        <header className="bg-beige">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/">
                        <div className="flex gap-x-3 align-center lg:flex-1">
                            <Image
                                src="/images/site-logo.png"
                                width={25}
                                height={25}
                                alt="White family clan logo"
                            />
                            <h1 className="text-xl font-medium text-gray-800">The White Family Cookbook</h1>
                        </div>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-4 align-center">
                    <Link className="text-md font-medium" href={"/"}>Recipes</Link>
                    <div className="w-px my-auto h-5 bg-gray-900" />
                    <Link className="text-md font-medium" href={"/authors"}>Authors</Link>
                    <div className="w-px my-auto h-5 bg-gray-900" />
                    <Link className="text-md font-medium" href={"/categories"}>Categories</Link>
                </div>
            </nav>
        </header>
    );
}

export default SiteHeader;