import Image from "next/image";

export default function Followee({ pubkey, followeeName, followeeImageUrl }) {

    const imageLoader = () => {
        return followeeImageUrl;
    }

    return (
        <div className='w-auto flex bg-[#141414] mx-[20px] mt-[20px] rounded-[10px] p-[20px]'>
            <Image className='rounded-[10px]'
                loader={imageLoader}
                src='followee.png'
                width={50}
                height={50}
                alt='' />
            <div className='mx-[10px] content-center'>
                <h1 className='text-xl'>{followeeName}</h1>
                <h2 className='text-sm text-[#8d8d8d]'>{pubkey}</h2>
            </div>
        </div>
    );
}