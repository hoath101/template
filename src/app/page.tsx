import Footer from "./footer";
import Image from "next/image";
function HomePage() {
  return (
    <main className="items-center ">
      <div className="">
        <Image src="/picture-1.png" width={1600} height={900} alt="abc" />
      </div>
      <div className="">
        <h2 className="text-2xl text-center mt-7 font-semibold">Browse The Range</h2>
        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptates?</p>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-center gap-4 mt-16 border-r-8">
          <Image src="/picture-2.png" width={250} height={500} alt="a" />
          <Image src="/bedroom.png" width={250} height={500} alt="b" />
          <Image src="/picture-3.png" alt="c" width={250} height={500} />
        </div>
        <div className="flex justify-center gap-56 mt-6 font-medium text-xl border-gray-600">
          <h2>Dining</h2>
          <h2>Living</h2>
          <h2>Bedroom</h2>
        </div>
      </div>
      {/* For Mobile Screen */}
      <div className="block lg:hidden">
      <div className="flex justify-center gap-4 mt-16 border-r-8">
          <Image src="/picture-2.png" width={250} height={500} alt="a" />
          <Image src="/bedroom.png" width={250} height={500} alt="b" />
          <Image src="/picture-3.png" alt="c" width={250} height={500} />
        </div>
        <div className="flex justify-center gap-20 mt-6 font-medium text-xl border-gray-600">
          <h2>Dining</h2>
          <h2>Living</h2>
          <h2>Bedroom</h2>
        </div>
      </div>
    </main>
  )
}
export default HomePage