import Footer from "../footer";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <main className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 sm:p-12 space-y-6 md:space-y-0 bg-gray-900 w-full max-w-4xl
        p-8 rounded-xl shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">
                Contact Us
              </h1>
              <p className="pt-5 text-white text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit cupiditate eos quibusdam in. Fugit!</p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2">
                <ul>
                  <p className="flex gap-2 pt-3"><FaPhoneAlt className="fill-amber-500 size-6 pt-2" /> +(123) 456 7890</p>
                  <p className="flex gap-2 pt-3"><IoIosMail className="fill-amber-500 size-6 pt-2" /> furniro@website.com</p>
                  <p className="flex gap-2 pt-3"><MdLocationOn className="fill-amber-500 size-6 pt-2" /> 13, Street 356,Bcd ab</p>
                </ul>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <ul className="flex gap-3 ">
                <FaFacebook className="fill-amber-500" />
                <FaTwitter className="fill-amber-500" />
                <FaLinkedin className="fill-amber-500" />
                <FaInstagram className="fill-amber-500" />
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-700 md:w-80 ml-40">
            <form className="flex flex-col space-y-8">
              <div>
                <label htmlFor="" className="text-sm">Your Name</label>
                <input placeholder="Enter Your Name" className="ring-1 mt-2 focus:ring-2 focus:ring-amber-300 
            ring-gray-300 w-full rounded-md px-4 py-2 outline-none" type="text" />
              </div>
              <div>
                <label htmlFor="" className="text-sm">Your Email</label>
                <input type="email" placeholder="Enter Your Email" className="ring-1 mt-2 focus:ring-2 
            focus:ring-amber-300 ring-gary-300 w-full rounded-md px-4 py-2 outline-none" />
              </div>
              <div>
                <label htmlFor="" className="text-sm">Your Contact No</label>
                <input placeholder="Enter Your Number" className="ring-1 mt-2 focus:ring-2 focus:ring-amber-300
             ring-gray-300 w-full rounded-md px-4 py-2 outline-none" id="" type="number" name=""></input>
              </div>
              <div>
                <label htmlFor="" className="text-sm">Message</label>
                <textarea placeholder="Enter Your Message" className="ring-1 mt-2 focus:ring-2 focus:ring-amber-300 ring-gray-200
           w-full rounded-md px-4 py-2 outline-none" name="" id=""></textarea>
              </div>
              <button className="inline-block self-end text-white font-bold rounded-lg px-6 py-2 uppercase text-sm bg-amber-600">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
    </main>
  )
}
export default Contact