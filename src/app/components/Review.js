import Image from 'next/image';
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";

export default function Review({ className, name, review }) {
    return (
        <div className={className}>
            <div className="p-1 mt-4">
                <div className="flex flex-row">
                    <Image
                        src="/review.jpg" // Path to your image (local or external)
                        width={55} // Width in pixels
                        height={50} // Height in pixels
                        alt="Picture of the author" // Alt text for accessibility
                        className="rounded-full" // Apply rounded shape to the image
                    />
                     <span className="text-right text-sm md:text-lg pr-5 pl-1 font-bold capitalize">{name}</span>
                     <span className="md:text-lg text-sm text-right font-bold md:pl-[27%] pl-[25%]">
                    Bonny and Clyde Street, 
                    </span>
                </div>
                <h1 className='text-xs md:text-base lg:text-lg text-center capitalize truncate'>{review}</h1>
<span className='flex flex-row gap-1 p-2'>
    <FaThumbsUp className='text-gray-500'/> <span className='text-md'>0</span>
    <FaThumbsDown className='text-gray-500'/><span className='text-md'>0</span>
    <FaComments className='text-gray-500'/><span className='text-md'>0</span>
</span>
            </div>
        </div>
    );
}
