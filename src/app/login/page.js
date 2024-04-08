import Nav from "../components/Nav";
import Image from 'next/image';

export default function Login() {
    return (
        <div>
            <Nav />
            <div className="flex justify-center items-center h-full md:pt-7 pt-4">
<div className="w-[75%] h-[25rem] md:w-[40%] md:h-[30rem] rounded-lg bg-white mb-5">
    <h1 className="text-center md:text-3xl pt-2 text-xl">Log In</h1>
    <form className="pt-5 pb-5">
    <input type="email" className="mx-auto mb-3 mt-1 block w-[85%] md:px-4 md:py-3 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="E-mail"/>
    <input type="password" className="mx-auto mb-5 mt-1 block w-[85%] md:px-4 md:py-3 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Password"/>
    <span className="mx-[7%]">
    <button className="w-[85%] bg-blue-600 hover:bg-blue-800 text-white md:px-7 md:py-4 py-2 px-5 rounded-lg mx-auto"> LOGIN </button>
    </span>
</form>
<h1 className="text-center mb-2">or</h1>
<div className="text-center justify-items-center">
<div className="border-slate-300 border bg-slate-100 w-[85%] h-12 ml-[7%] flex flex-row text-center rounded-lg mb-3 hover:bg-blue-600 hover:text-white cursor-pointer">
<Image
                        src="/google.svg" // Path to your image (local or external)
                        width={25} // Width in pixels
                        height={20} // Height in pixels
                        alt="Picture of the author" // Alt text for accessibility
                        className="ml-[10%]" // Apply rounded shape to the image
                    /><p className="mt-3 ml-3">Login with google</p>
</div>
</div>

<div className="text-center justify-items-center">
<div className="border-slate-300 border bg-slate-100 w-[85%] h-12 ml-[7%] flex flex-row text-center rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer">
<Image
                        src="/facebook.svg" // Path to your image (local or external)
                        width={25} // Width in pixels
                        height={20} // Height in pixels
                        alt="Picture of the author" // Alt text for accessibility
                        className="ml-[10%]" // Apply rounded shape to the image
                    /><p className="mt-3 ml-3">Login with facebook</p>
</div>
</div>
</div>
</div>
        </div>
    )
}