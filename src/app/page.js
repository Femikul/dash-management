'use client'
import Nav from "./components/Nav";
import ReviewBox from "./components/ReviewBox"; 
import Link from "next/link";

export default function Home() {
  return (
    <div>
   <header className="">
    <Nav />
   </header>

   <div className="flex flex-row">
   <main className="p-7 md:p-10 md:md:w-[50%]">
    <div>
<h1 className="text-6xl md:text-7xl">
  Find a place you would love to live!
</h1>
<h1 className="pt-5 text-2xl">
  See through the lenses of people who have lived or visited the neighborhood you might have in mind.
</h1>
<form className="pt-7">
<input type="text" className="mb-3 mt-1 block md:w-full md:px-4 md:py-3 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Enter Address" name="search"/>
<div className="flex flex-row gap-4">
<button className="basis-1/4 bg-blue-600 hover:bg-blue-800 text-white md:px-7 md:py-4 py-2 px-5 rounded-md"> SEARCH </button>
<Link href="/review" className="basis-1/2">
<button  className="basis-1/2 bg-blue-600 hover:bg-blue-800 text-white md:px-7 md:py-4 py-2 px-5 rounded-md w-full">
   ALL REVIEWS
    </button>
    </Link>
</div>
</form>
    </div>
   </main>

   <main className="md:w-[50%] p-7 hidden md:block">
    <div className="w-full h-full rounded-lg border-slate-300 border bg-slate-100 pt-7">
     <div className="flex flex-wrap justify-center gap-6 p-5">
     <ReviewBox className="bg-white rounded-xl lg:w-[11em] lg:h-[11em] sm:w-[10em] sm:h-[10em]"/>
     <ReviewBox className="bg-white rounded-xl lg:w-[11em] lg:h-[11em] sm:w-[10em] sm:h-[10em]"/>
     <ReviewBox className="bg-white rounded-xl lg:w-[11em] lg:h-[11em] sm:w-[10em] sm:h-[10eem]"/>
     <ReviewBox className="bg-white rounded-xl lg:w-[11em] lg:h-[11em] sm:w-[10em] sm:h-[10em]"/>
     <ReviewBox className="bg-white rounded-xl lg:w-[11em] lg:h-[11em] sm:w-[10em] sm:h-[10em]"/>
     <ReviewBox className="bg-white rounded-xl lg:w-[11em] lg:h-[11em] sm:w-[10em] sm:h-[10em]"/>
     </div>
     </div>
   </main>
   </div>

    </div>
  );
}
