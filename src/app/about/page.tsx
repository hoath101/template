import Link from "next/link"
export default function About(){
    return(
        <main className="bg-pink-200">
            <div className="">
              <h1 className="flex justify-center text-4xl text-amber-600">About us</h1>
            <h2 className="flex justify-center text-4xl font-bold mt-4">Crafting Unique Furniture with Heart and Soul</h2>
            <p className="flex justify-center mt-3 text-gray-600 text-xl">At Furnio, we believe that furniture is more than just pieces that fill a room. <br /> It’s about creating spaces where memories are made, stories are told, and </p>
             <p className="flex justify-center text-gray-600 text-xl"> comfort is felt.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10 mt-8">
              <div><h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4 text-gray-700">Our mission is to design and craft unique, high-quality furniture that enhances the <br />
               beauty of your home. We’re committed to sustainability, craftsmanship, and <br />
                providing exceptional customer experiences.</p></div>
                <div>
                  <h3 className="text-2xl font-semibold">Sustainibility</h3>
                <p className="mt-4 text-gray-700">We care deeply about our planet. That's why we use sustainable materials and <br />
               responsible sourcing to ensure every piece we create contributes to a healthier, <br />
                greener world.</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10 mt-8">
              <div>
                <h3 className="text-2xl font-semibold">Cratsmanship</h3>
                <p className="mt-4 text-gray-700">Every piece of furniture we create is designed with <br />
                 attention to detail and made by skilled artisans. <br />
                  We blend tradition with innovation to offer <br />
                   furniture that lasts a lifetime.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Our Team</h3>
                <p className="mt-4 text-gray-700">Our passionate team is made up of designers, <br />
                 craftsmen, and customer care professionals who <br />
                  work together to deliver beautiful, comfortable, <br />
                   and lasting furniture for your home.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a className="inline-block button text-white py-3 px-6 rounded-md text-lg font-medium bg-amber-600" href="/shop">
              Explore Our Shop
              </a>
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