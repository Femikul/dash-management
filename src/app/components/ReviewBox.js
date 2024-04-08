import Image from 'next/image';
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";

export default function ReviewBox({ className }) {
    return (
        <div className={className}>
            <div className="p-1">
                <div className="flex flex-row">
                    <Image
                        src="/review.jpg" // Path to your image (local or external)
                        width={25} // Width in pixels
                        height={20} // Height in pixels
                        alt="Picture of the author" // Alt text for accessibility
                        className="rounded-full" // Apply rounded shape to the image
                    />
                     <span className="text-xs pr-5 pl-1 font-bold">Femi S.</span>
                     <span className="float-right text-xs text-right font-bold">
                    Ikate, Lekki
                    </span>
                </div>
                <h3 className='text-xs'>There is no stable electricity.The roads are fairly good and there is a sense of community.The drainage system is poor.</h3>
<span className='flex flex-row gap-1 p-2'>
    <FaThumbsUp className='text-gray-500'/> <span className='text-xs'>25</span>
    <FaThumbsDown className='text-gray-500'/><span className='text-xs'>35</span>
    <FaComments className='text-gray-500'/><span className='text-xs'>56</span>
</span>
            </div>
        </div>
    );
}
