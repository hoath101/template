import Link from "next/link"
export default function Footer() {
    return (
        <main className="">
            <div className="hidden lg:block">       
            <footer className="flex  justify-between bg-gray-200">
                <div className="sm:flex justify-center gap-4 m-2 p-2 ">
                    <div><h2 className="text-2xl font-bold mt-4">Furniro.</h2>
                        <p className="mt-4 text-gray-500">400 University Drive Suite 200 Coral Gables.</p>
                        <p className="text-gray-500">FL 33134 USA</p></div>
                    <div className="text-xl font-semibold mt-4 mb-2"><p className="text-gray-500">Links</p>
                        <ul className="mt-3"><Link href="/">Home</Link></ul>
                        <ul className="mt-3"><Link href="/shop">Shop</Link></ul>
                        <ul className="mt-3"><Link href="/about">About</Link></ul>
                        <ul className="mt-3"><Link href="/contact">Contact</Link></ul></div>
                </div>
                <div className="sm:flex justify-center gap-4 m-2 p-2">
                    <div className="text-xl font-semibold mt-4">
                        <ul className="text-gray-500">Help</ul>
                        <ul className="mt-3">Payment Option</ul>
                        <ul className="mt-3">Returns</ul>
                        <ul className="mt-3">Privacy Policies</ul>
                    </div>
                    <div className="text-xl font-semibold mt-4 ">
                        <ul className="text-gray-500">Newsletter</ul>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Your Email Adress"
                            className="mt-3 mb-2 p-2 border border-gray-300 rounded mr-1"
                        />
                        <u className="mt-3">Subscribe</u>
                    </div>
                </div>
            </footer>
            <footer>
                <p className="flex justify-center mt-10 text-gray-900 font-semibold text-xl">2024 Furniro.All rights reserved</p>
            </footer>
            </div>
            {/* For Mobile Screen */}
            <div className="block lg:hidden">
            <footer className="flex flex-col justify-between bg-gray-200 text-center overflow-hidden">
            <div className="sm:flex justify-center gap-4 m-2 p-2 ">
                    <div><h2 className="text-2xl font-bold mt-4">Furniro.</h2>
                        <p className="mt-4 text-gray-500">400 University Drive Suite 200 Coral Gables.</p>
                        <p className="text-gray-500">FL 33134 USA</p></div>
                    <div className="text-xl font-semibold mt-4 mb-2"><p className="text-gray-500">Links</p>
                        <ul className="mt-3"><Link href="/">Home</Link></ul>
                        <ul className="mt-3"><Link href="/shop">Shop</Link></ul>
                        <ul className="mt-3"><Link href="/about">About</Link></ul>
                        <ul className="mt-3"><Link href="/contact">Contact</Link></ul></div>
                </div>
                <div className="sm:flex justify-center gap-4 m-2 p-2">
                    <div className="text-xl font-semibold mt-4">
                        <ul className="text-gray-500">Help</ul>
                        <ul className="mt-3">Payment Option</ul>
                        <ul className="mt-3">Returns</ul>
                        <ul className="mt-3">Privacy Policies</ul>
                    </div>
                    <div className="text-xl font-semibold mt-4 ">
                        <ul className="text-gray-500">Newsletter</ul>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Your Email Adress"
                            className="mt-3 mb-2 p-2 border border-gray-300 rounded mr-1"
                        />
                        <u className="mt-3">Subscribe</u>
                    </div>
                </div>
            </footer>
            <footer>
                <p className="flex justify-center mt-10 text-gray-900 font-semibold text-xl">2024 Furniro.All rights reserved</p>
            </footer>
            </div>
        </main>
    )
}