import Link from "next/link";
import Image from 'next/image';
import ReviewBox from "../components/ReviewBox"; 
import ImageBox from "../components/ImageBox"; 
import Nav from "../components/Nav"

export default function Review() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            
            <main className="p-4">
                <div className="grid">
                    <h1 className="md:text-2xl text-xl font-semibold">Bonny and Clyde Street, Ajao Estate Lagos</h1>
                    <span className="hidden md:block col-end-7">
                        <Link href="/leavereview">
                            <button className="hidden md:block col-end-7 bg-blue-600 hover:bg-blue-800 text-white w-full h-[3em] rounded-md">LEAVE A REVIEW</button>
                        </Link>
                    </span>  
                </div>
                <h2>&quot;450&quot; Reviews, (People are raving about the selected location)</h2>
                <div className="pt-3 flex flex-row">
                    <div className="md:w-[50%]">
                        <ReviewBox className="bg-white rounded-xl lg:w-full lg:h-[7em] sm:w-[90%] sm:h-[7em] mb-3" />
                        <ReviewBox className="bg-white rounded-xl lg:w-full lg:h-[7em] sm:w-[90%] sm:h-[7em] mb-3" />
                        <ReviewBox className="bg-white rounded-xl lg:w-full lg:h-[7em] sm:w-[90%] sm:h-[7em] mb-3" />
                        <ReviewBox className="bg-white rounded-xl lg:w-full lg:h-[7em] sm:w-[90%] sm:h-[7em] mb-3" />
                        <div className="text-center md:hidden">
                            <Link href="/leavereview">
                                <button className="md:hidden bg-blue-600 hover:bg-blue-800 text-white w-[75%] h-[3em] rounded-md">LEAVE A REVIEW</button>
                            </Link>
                        </div>
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
    );
}
