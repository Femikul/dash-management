import Nav from "../components/Nav";

export default function Signup() {
    return (
        <div>
            <Nav />
            <h1 className="my-3 mx-7">Drop your message and our team would get back to you shortly.</h1>
            <div className="flex justify-center items-center h-full md:pt-7 pt-4">
<div className="w-[75%] md:w-[40%] h-[70%] rounded-lg bg-white mb-5">
    <h1 className="text-center md:text-3xl pt-2 text-xl">Contact Us</h1>
    <form className="pt-5 pb-5">
    <input type="name" className="mx-auto mb-3 mt-1 block w-[85%] md:px-4 md:py-3 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Name"/>
    <input type="email" className="mx-auto mb-3 mt-1 block w-[85%] md:px-4 md:py-3 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="E-mail"/>
    <input type="text" className="h-36 mx-auto mb-5 mt-1 block w-[85%] md:px-4 md:py-3 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Enter your message.."/>
    <span className="mx-[7%]">
    <button className="w-[85%] bg-blue-600 hover:bg-blue-800 text-white md:px-7 md:py-4 py-2 px-5 rounded-md mx-auto"> SEND</button>
    </span>
</form>
</div>
</div>
        </div>
    )
}