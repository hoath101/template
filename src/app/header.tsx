import React from "react"
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

function Header(){
    return(
        <section className="flex justify-between justify-items-center bg-white">
            <h1 className="text-3xl font-semibold m-4 ">Furniro</h1>
            <div className="flex justify-between gap-8 text-xl p-4">
                    <ul><Link href="/">Home</Link></ul>
                    <ul><Link href="/shop">Shop</Link></ul>
                    <ul><Link href="/about">About</Link></ul>
                    <ul><Link href="/contact">Contact</Link></ul>
            </div>
            <div className="flex gap-8 items-center pr-10 m-1">
                    <ul className="font-bold text-2xl"><MdPersonOutline/></ul>
                    <ul className="font-bold text-2xl"><CiSearch/></ul>
                    <ul className="font-bold text-2xl"><CiHeart/></ul>
                    <ul className="font-bold text-2xl"><IoCartOutline/></ul>
            </div>

        </section>
    )
}
export default Header