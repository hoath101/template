import React from "react"
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
    return (
        <main className="overflow-hidden">
            {/* For Desktop Screen */}
            <nav className="hidden lg:block">
                <div className="flex justify-between justify-items-center bg-white">
                    <h1 className="text-3xl font-semibold m-4 ">Furniro</h1>
                    <div className="flex justify-between gap-8 text-xl p-4">
                        <ul><Link href="/">Home</Link></ul>
                        <ul><Link href="/shop">Shop</Link></ul>
                        <ul><Link href="/about">About</Link></ul>
                        <ul><Link href="/contact">Contact</Link></ul>
                    </div>
                    <div className="flex gap-8 items-center pr-10 m-1 ">
                        <ul className="font-bold text-2xl"><MdPersonOutline /></ul>
                        <ul className="font-bold text-2xl"><CiSearch /></ul>
                        <ul className="font-bold text-2xl"><CiHeart /></ul>
                        <ul className="font-bold text-2xl"><IoCartOutline /></ul>
                    </div>
                </div>
            </nav>
            {/* For Mobile Screen */}
            <nav className="block lg:hidden">
                <div className="flex justify-between overflow-hidden max-w-sm">
                    <h1 className="text-3xl font-semibold ml-10">Furniro</h1>
                    <div>
                        <Sheet>
                            <SheetTrigger><RxHamburgerMenu className="size-5 mt-3"/></SheetTrigger>
                            <SheetContent className="w-[250px] space-y-4 mr-2 p-4">
                                <ul><Link href="/">Home</Link></ul>
                                <ul><Link href="/shop">Shop</Link></ul>
                                <ul><Link href="/about">About</Link></ul>
                                <ul><Link href="/contact">Contact</Link></ul>
                                <div className="flex gap-4 justify-between bg-gray-200 p-4 cursor-pointer">
                                    <ul className="font-bold text-2xl"><MdPersonOutline /></ul>
                                    <ul className="font-bold text-2xl"><CiSearch /></ul>
                                    <ul className="font-bold text-2xl"><CiHeart /></ul>
                                    <ul className="font-bold text-2xl"><IoCartOutline /></ul>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </main>
    )
}
export default Header