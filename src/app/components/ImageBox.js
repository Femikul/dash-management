import Image from 'next/image';

export default function ImageBox({src, width, height}) {
    return (
        <div className=''>
                   <Image
                        src={src} 
                        width={width} 
                        height={height} 
                        alt="Picture of the author" 
                        className="rounded max-h-64 max-w-48 lg:max-w-72" 
                    />
        </div>
    )
}
