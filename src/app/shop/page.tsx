import Link from "next/link"
import Image from "next/image"
export default function Shop(){
    return(
        <main className="bg-pink-100 ">
          <section className="">
            <h1 className="flex justify-center text-4xl mt-6 mb-6 text-amber-600">Explore Our Shop</h1>
            <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
            <Image src="/product-1.webp" alt="product-1" width={400} height={200}/>
            <Image src="/product-2.webp" alt="product-2" width={400} height={200}/>
            <Image src="/product-3.webp" alt="product-3" width={400} height={200}/>
            <Image src="/product-4.webp" alt="product-4" width={400} height={200}/></div>
            <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
              <div>
              <h2>Syltherine</h2>
              <p>Stylish cafe chair</p>
              <h3>Rp 2.500.000</h3>
              </div>
              <div>
              <h2>Leviso</h2>
              <p>Stylish cafe chair</p>
              <h3>Rp 2.500.000</h3>
              </div>
              <div>
              <h2>Lolita</h2>
              <p>Luxury bid sofa</p>
              <h3>Rp 7.000.000</h3>
              </div>
              <div>
              <h2>Respira</h2>
              <p>Outdoor bar table and stool</p>
              <h3>Rp 5.000.000</h3>
              </div>
            </div>
            <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
            <Image src="/product-5.webp" alt="product-5" width={500} height={250}/>
            <Image src="/product-6.webp" alt="product-6" width={500} height={250}/>
            <Image src="/product-7.webp" alt="product-7" width={500} height={250}/>
            <Image src="/product-8.webp" alt="product-8" width={500} height={250}/></div>
            <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
              <div>
              <h2>Grifo</h2>
              <p>Night lamp</p>
              <h3>Rp 1.500.000</h3>
              </div>
              <div>
              <h2>Muggo</h2>
              <p>Small mug</p>
              <h3>Rp 1.500.000</h3>
              </div>
              <div>
              <h2>Pinky</h2>
              <p>Cute bed set</p>
              <h3>Rp 7.000.000</h3>
              </div>
              <div>
              <h2>Bed</h2>
              <p>Milimalist flower pot</p>
              <h3>Rp 5.000.000</h3>
              </div>
            </div>
            <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
            <Image src="/product-9.webp" alt="product-9" width={500} height={250}/>
            <Image src="/product-10.webp" alt="product-10" width={500} height={250}/>
            <Image src="/product-11.webp" alt="product-11" width={500} height={250}/>
            <Image src="/product-12.webp" alt="product-12" width={500} height={250}/></div>
            <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
              <div>
              <h2>Bedroom</h2>
              <p>Room</p>
              <h3>Rp 6.000.000</h3>
              </div>
              <div>
              <h2>Leviso</h2>
              <p>Stylish cafe chair</p>
              <h3>Rp 2.500.000</h3>
              </div>
              <div>
              <h2>Lolita</h2>
              <p>Luxury bid sofa</p>
              <h3>Rp 7.000.000</h3>
              </div>
              <div>
              <h2>Respira</h2>
              <p>Outdoor bar table and stool</p>
              <h3>Rp 5.000.000</h3>
              </div>
            </div>

            <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
            <Image src="/product-13.webp" alt="product-13" width={500} height={250}/>
            <Image src="/product-14.webp" alt="product-14" width={500} height={250}/>
            <Image src="/product-15.webp" alt="product-15" width={500} height={250}/>
            <Image src="/product-16.webp" alt="product-16" width={500} height={250}/>
            </div>
            <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
              <div>
              <h2>Syltherine</h2>
              <p>Stylish cafe chair</p>
              <h3>Rp 2.500.000</h3>
              </div>
              <div>
              <h2>Leviso</h2>
              <p>Stylish cafe chair</p>
              <h3>Rp 2.500.000</h3>
              </div>
              <div>
              <h2>Lolita</h2>
              <p>Luxury bid sofa</p>
              <h3>Rp 7.000.000</h3>
              </div>
              <div>
              <h2>Respira</h2>
              <p>Outdoor bar table and stool</p>
              <h3>Rp 5.000.000</h3>
              </div>
            </div>
            </section>
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