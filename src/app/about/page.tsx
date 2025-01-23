export default function About() {
  return (
    <main className="bg-pink-200 items-center m-2 p-2">
      <div className="">
        <h1 className="flex justify-center text-4xl text-amber-600 pt-4">About us</h1>
        <h2 className="flex justify-center text-4xl font-bold mt-4">Crafting Unique Furniture with Heart and Soul</h2>
        <div className="hidden lg:block">
          <p className="flex justify-center mt-3 text-gray-600 text-xl">At Furnio, we believe that furniture is more than just pieces that fill a room. <br /> It’s about creating spaces where memories are made, stories are told, and </p>
          <p className="flex justify-center text-gray-600 text-xl"> comfort is felt.</p>
        </div>
        <div className="block lg:hidden">
          <p className="flex justify-center mt-3 text-gray-600 text-xl">
          At Furnio, we believe that furniture is more than just pieces that fill
         a room. <br /> It’s about creating spaces where memories are made, stories are told, and comfort is felt.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10 mt-8">
        <div><h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-4 text-gray-700">Our mission is to design and craft unique, high-quality furniture that enhances the <br />
            beauty of your home. We’re committed to sustainability, craftsmanship, and <br />
            providing exceptional customer experiences.</p></div>
        <div>
          <h3 className="text-2xl font-semibold">Sustainibility</h3>
          <p className="mt-4 text-gray-700">We care deeply about our planet. Thats why we use sustainable materials and <br />
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

    </main>
  )
}