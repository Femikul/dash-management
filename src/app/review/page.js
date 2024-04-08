import Link from "next/link";
import { IoBookmarks } from "react-icons/io5";
import Image from 'next/image';
import ReviewBox from "../components/ReviewBox"; 
import ImageBox from "../components/ImageBox"; 


export default function Review() {
    return (
        <div>
            <div className="float-end p-4">
             <Image
                        src="/review.jpg" // Path to your image (local or external)
                        width={30} // Width in pixels
                        height={30} // Height in pixels
                        alt="Picture of the author" // Alt text for accessibility
                        className="rounded-full" // Apply rounded shape to the image
                    />
                     </div>
                     <span className="hidden md:block float-end text-sm pt-6 font-semibold">Welcome!</span>
        <nav className="flex">
        <h1 className="p-7 "><a href="/"><span className="cursor-pointer px-1 text-xs md:text-xs lg:text-base font-bold">S P O T T A</span>
     <span
  className="rounded-full bg-blue-600 px-1.5 py-0.5 
  text-sm font-medium text-white sm:text-xs/5">
  NG
</span></a>
</h1>
<div className="pt-5 md:pl-10">
<input type="text" className="lg:w-[35em] md:w-[25em] w-7em px-4 md:h-12 h-8 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 md:placeholder:text-lg" placeholder="Bonny and Clyde Street, Ajao Estate Lagos." name="search"/>
</div>
</nav>

        
        <main className="p-4">
            <div className="grid">
            <h1 className="md:text-2xl text-xl font-semibold">Bonny and Clyde Street, Ajao Estate Lagos
            </h1>

        <span className="hidden md:block col-end-7"><Link href="/leavereview"><button className="hidden md:block col-end-7 bg-blue-600 hover:bg-blue-800 text-white w-full h-[3em] rounded-md"> LEAVE A REVIEW </button></Link></span>  
        
        </div>
            <h2>"450" Reviews ,(People are raving about the selected location)</h2>
<div className="pt-3 flex flex-row">
<div className="md:w-[50%]">
<ReviewBox className="bg-white rounded-xl lg:w-full lg:h-[7em] sm:w-[90%] sm:h-[7em] mb-3" />
<ReviewBox className="bg-white rounded-xl lg:w-full lg:h-[7em] sm:w-[90%] sm:h-[7em] mb-3" />
<ReviewBox className="bg-white rounded-xl lg:w-full lg:h-[7em] sm:w-[90%] sm:h-[7em] mb-3" />
<ReviewBox className="bg-white rounded-xl lg:w-full lg:h-[7em] sm:w-[90%] sm:h-[7em] mb-3" />
<div className="text-center md:hidden">
<Link href="/leavereview"><button className="md:hidden bg-blue-600 hover:bg-blue-800 text-white w-[75%] h-[3em] rounded-md"> LEAVE A REVIEW </button> </Link></div>
</div>
<div className="md:w-[50%] hidden md:block">
    <div className="px-2 flex flex-wrap justify-center gap-3">
<ImageBox src="/3.jpg" width="300" height="100" />
<ImageBox src="/4.jpg" width="300" height="100" />
<ImageBox src="/1.jpg" width="300" height="100" />
<ImageBox src="/5.jpg" width="300" height="100" />
     </div>
</div>
</div>
        </main>
        </div>
    )
}