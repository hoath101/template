import Link from "next/link"
import Image from "next/image";
function HomePage(){
  return(
    <main>
      <div className="">
        <Image src="/picture-1.png" width={1600} height={900} alt="abc"/>
      </div>
      <div className="">
    <h2 className="text-2xl text-center mt-7 font-semibold">Browse The Range</h2>
    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptates?</p>
      </div>
      <div className="flex justify-center gap-4 mt-16 border-r-8">
        <Image src="/picture-2.png" width={250} height={500} alt="a"/>
        <Image src="/bedroom.png" width={250} height={500} alt="b"/>
        <Image src="/picture-3.png" alt="c" width={250} height={500}/>
        </div>
        <div className="flex justify-center gap-56 mt-6 font-medium text-xl border-gray-600">
        <h2>Dining</h2>
        <h2>Living</h2>
        <h2>Bedroom</h2>
      </div>
      <footer className="flex mt-10 justify-between bg-gray-200">
        <div><h2 className="text-2xl font-bold ">Furniro.</h2>
        <p className="mt-4 text-gray-500">400 University Drive Suite 200 Coral Gables.</p>
        <p className="text-gray-500">FL 33134 USA</p></div>
        <div className="text-xl font-semibold"><p className="text-gray-500">Links</p>
        <ul className="mt-3"><Link href="/">Home</Link></ul>
        <ul className="mt-3"><Link href="/shop">Shop</Link></ul>
        <ul className="mt-3"><Link href="/about">About</Link></ul>
        <ul className="mt-3"><Link href="/contact">Contact</Link></ul></div>
        <div className="text-xl font-semibold">
          <ul className="text-gray-500">Help</ul>
            <ul className="mt-3">Payment Option</ul>
            <ul className="mt-3">Returns</ul>
            <ul className="mt-3">Privacy Policies</ul>
        </div>
        <div className="text-xl font-semibold">
        <ul className="text-gray-500">Newsletter</ul>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter Your Email Adress"
        className="block mt-3 mb-2 p-2 border border-gray-300 rounded"
      />
      <u className="mt-3">Subscribe</u>
    </div>
      </footer>
      <footer>
      <p className="flex justify-center mt-10 text-gray-900 font-semibold">2024 furniro.All rights reserved</p>
      </footer>
    </main>
  )
}
export default HomePage