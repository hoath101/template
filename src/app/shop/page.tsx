import Footer from "../footer"
import Image from "next/image"
export default function Shop() {
  return (
    <main className="bg-pink-100">
      <section className="">
        <h1 className="flex justify-center text-4xl pt-6 mb-6 text-amber-600">Explore Our Shop</h1>
        <div className="flex justify-between gap-4 m-4 mt-6 mr-6 ml-6">
          <Image src="/product-1.webp" alt="product-1" width={400} height={200} />
          <Image src="/product-2.webp" alt="product-2" width={400} height={200} />
          <Image src="/product-3.webp" alt="product-3" width={400} height={200} />
          <Image src="/product-4.webp" alt="product-4" width={400} height={200} /></div>
        <div className="flex justify-between gap-4 m-4 mt-6 mr-14 ml-6 ">
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
          <Image src="/product-5.webp" alt="product-5" width={500} height={250} />
          <Image src="/product-6.webp" alt="product-6" width={500} height={250} />
          <Image src="/product-7.webp" alt="product-7" width={500} height={250} />
          <Image src="/product-8.webp" alt="product-8" width={500} height={250} /></div>
        <div className="flex justify-between gap-4 m-4 mt-6 mr-20 ml-6">
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
          <Image src="/product-9.webp" alt="product-9" width={500} height={250} />
          <Image src="/product-10.webp" alt="product-10" width={500} height={250} />
          <Image src="/product-11.webp" alt="product-11" width={500} height={250} />
          <Image src="/product-12.webp" alt="product-12" width={500} height={250} /></div>
        <div className="flex justify-between gap-4 m-4 mt-6 mr-16 ml-6">
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
          <Image src="/product-13.webp" alt="product-13" width={500} height={250} />
          <Image src="/product-14.webp" alt="product-14" width={500} height={250} />
          <Image src="/product-15.webp" alt="product-15" width={500} height={250} />
          <Image src="/product-16.webp" alt="product-16" width={500} height={250} />
        </div>
        <div className="flex justify-between gap-4 m-4 mt-6 mr-16 ml-6">
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
      <Footer />
    </main>
  )
}