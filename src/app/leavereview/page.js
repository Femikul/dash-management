'use client'
import Image from "next/image"
import React, { useState } from 'react';
import Review from "../components/Review"; 
import Nav from "../components/Nav"

export default function LeaveReview() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [showReviewBox, setShowReviewBox] = useState(false);

  const handleClick = () => {
    if (name.trim() && review.trim()) {
        setShowReviewBox(true);
    } else {
        setShowReviewBox(false);
        alert('Please fill in the input fields!!');
    }
};
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
    return (
        <div>
            <header>
                <Nav />
            </header>

<main className="p-5">
<div>
<h1 className="md:text-xl text-lg font-semibold text-center">Review Location </h1>
<h1 className="md:text-2xl text-xl font-semibold pt-2 text-center">Bonny and Clyde Street, Ajao Estate Lagos</h1>
</div>
{!showReviewBox ? (
    <div className="flex flex-row pt-5">
<div className="md:w-[50%] gap-5">
<input type="text" className="md:w-[90%] w-full mb-5 px-4 md:h-12 h-10 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 placeholder:italic focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Your name...." name="search" value={name} onChange={handleNameChange} required/>
<input type="text" className="md:w-[90%] w-full mb-5 px-4 h-28 md:h-36 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 placeholder:italic focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Write Review...." name="search" value={review} onChange={handleReviewChange} required/>
<div className="flex items-center">
<input type="checkbox" className="mr-2" />
  <label >Post as anonymous</label>
  </div>
<button className="bg-blue-600 hover:bg-blue-800 text-white w-full h-[3em] rounded-md mt-2 md:w-[90%]" onClick={handleClick}> SUMBIT </button>
</div>

<div className="md:block hidden">
    <div className="p-7 text-center justify-items-center">
    <Image
                        src="/comment.svg" 
                        width={200}
                        height={100} 
                        alt="Picture of the author" 
                        className="w-96 h-72" 
                    />
    </div>
</div>
</div>
  ) : (
    <div className="text-center justify-items-center">
    <Review review={review} name={name} className="bg-white rounded-xl lg:w-[45%] md:h-[9em] sm:w-[65%] sm:h-[9em] md:ml-[15%]"/>
    <h1 className="mt-10 text-center md:text-lg text-base">Thanks for visiting our page! </h1>
    </div>
)}
</main>
        </div>
    )
}