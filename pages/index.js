import { BsArrowRight, BsArrowLeft, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function Home() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>

      {/* =================Background Img====================== */}
      <div className="heroImg relative">
      </div>

      <div className='heroTop bg-black absolute top-0 opacity-20'>

      </div>

      {/* ==================head=============================== */}

      <div className='headerNew flex justify-center items-center '>
        <div className=''>
          <p className='logo1 '></p>
          <p className='logo2'></p>
          <p className='logo3'></p>
          <p className='lg:-translate-x-4 lg:translate-y-6 logoMainText text-xs font-josefin '>GROUND ZERO</p>
          <p className='lg:hidden logoMainText1'>ARCHITECTURE | INTERIOR</p>
        </div>
        <div className=' header   font-nezto flex space-x-12 justify-end  tracking-widest items-start '>
          <p style={{ color: '#F0B342', borderBottom: '2px solid #F0B342' }} className='  pb-2 '>HOME</p>
          <p>ABOUT US</p>
          <p>LOOK BOOK</p>
          <p>PRESS</p>
          <p>PROCESS</p>
          <p>CONTACT</p>
        </div>
      </div>

      {/* head mob and tab */}
      <div className=' absolute headTab top-0 right-0  font-nezto flex flex-col space-y-3 px-4 pt-8  justify-end  tracking-widest items-center text-white '>
        <p className='border-4 border-black w-12 '></p>
        <p className='border-4 border-black w-12 '></p>
      </div>

      <div className='absolute herotextTab top-72 px-36 text-white font-nezto  tracking-widest'>
        <p className='text-7xl herotextTabP1 font-josefin   mb-6'>HEADLINE TEXT</p>
        <p className='herotextTabP2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p className="mt-4 herotextTabP2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p className="mt-4 herotextTabP2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p className="mt-4 herotextTabP2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>

      <div  className="absolute px-8  md:px-36 flex dots space-x-8 items-center">
        <div className="border-orange-300 p-1 border rounded-full ">
          <p className="rounded-full h-3 w-3 bg-orange-300"></p>
        </div>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
        <p className="h-3 w-3 rounded-full bg-gray-400"></p>
      </div>

      <div className="flex justify-center  items-center heroText font-nezto font-extrabold tracking-widest ">
        <p className="-mt-10 text-gray-100">MEDIA</p>
      </div>


      <div className="md:flex wrapCard md:items-end md:justify-start lg:justify-center overflow-x-visible  md:space-x-6 pb-10 lg:translate-x-36 z-20 lg:-translate-y-8 md:-translate-y-4 md:translate-x-8">
        {/* left div */}
        <div className="lg:pl-12 md:pl-6 py-10 lg:pr-12 card bg-white ">
          <p className="lg:text-4xl md:text-3xl font-nezto font-extrabold tracking-widest">Get In Touch</p>
          <p className="mt-10 font-nezto tracking-wider font-semibold">Mobile</p>

          <p className="font-nezto tracking-wider text-sm mt-1">+91 9389725398</p>
          <p className="mt-6 font-nezto tracking-wider font-semibold">Email</p>
          <p className="font-nezto tracking-wider mt-1 text-sm">groundzero@gmail.com</p>
          <button className="text-center bg-black text-white mt-8 px-10 tracking-widest py-3">CONTACT US</button>
        </div>

        {/* right div */}
        <div className='flex flex-col screenDiv justify-end  space-y-12  items-start '>
          <div className="carasoulDiv flex space-x-4 ">
            <p className="one "></p>
            <p className="two "></p>
            <p className="three hidden lg:block"></p>
            <p className="four hidden lg:block"></p>
          </div>
          <div className='flex text-2xl text-gray-700 space-x-3'>
            <p className=' p-2'>
              <BsArrowLeft />
            </p>
            <p className='p-2 arrowCard'>
              <BsArrowRight />
            </p>

          </div>

        </div>

        {/* visible only in mob screen */}
        <div className="lg:pl-12 pl-4 mt-8 md:mt-0 md:pl-6 py-10 lg:pr-12 otherCard bg-white ">
          <p className="lg:text-4xl text-3xl md:text-3xl font-nezto font-extrabold tracking-widest">Get In Touch</p>
          <p className="mt-10 font-nezto tracking-wider font-semibold">Mobile</p>

          <p className="font-nezto tracking-wider text-sm mt-1">+91 9389725398</p>
          <p className="mt-6 font-nezto tracking-wider font-semibold">Email</p>
          <p className="font-nezto tracking-wider mt-1 text-sm">groundzero@gmail.com</p>
          <button className="text-center bg-black text-white mt-8 px-10 tracking-widest py-3">CONTACT US</button>
        </div>
      </div>


      {/* Footer */}

      <div className='mt-16 lg:px-32 md:px-8 '>
        <p className='w-full h-0.5 bg-gray-300'></p>
        <div className='pt-1 pb-4 mt-2 md:mt-0 px-8 md:px-0 md:flex justify-between items-center'>
          <p className='text-gray-600 mb-8 md:mb-0 font-nezto tracking-widest'>	&#169;groundzero | All rights reserved</p>
          <div className='flex space-x-8 text-xl text-gray-700 mt-2'>
            <p className='p-2 rounded-full bg-gray-300'>
              <FaFacebookF />
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
              <BsInstagram />
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
              <BsTwitter />
            </p>
            <p className='p-2 rounded-full bg-gray-300'>
              <FaLinkedinIn />
            </p>
          </div>
        </div>

      </div>



    </div>
  )
}
