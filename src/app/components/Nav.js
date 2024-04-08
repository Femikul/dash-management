import Link from 'next/link'
 
export default function Nav() {  
return (
<h1 className="p-7 "><a href="/"><span className="cursor-pointer px-1 font-bold">S P O T T A</span>
     <span
  className="rounded-full bg-blue-600 px-1.5 py-0.5 
  text-sm font-medium text-white sm:text-xs/5">
  NG
</span></a>
<span className="float-right hover:text-blue-600/80 cursor-pointer"><Link href="/contact">
Contact Us
</Link>
</span>
<span className="float-right px-4 hover:text-blue-600/80 cursor-pointer"><Link href="/login">
Login
</Link>
</span>
</h1>
)
}