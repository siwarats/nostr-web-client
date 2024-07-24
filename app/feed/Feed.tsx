import Image from 'next/image';
import { timestampToString } from '../util/DateTimeUtil';

export default function Feed({ feedId, ownerPubKey, ownerImageUrl, ownerName, timestamp, content }) {

    const imageLoader = () => {
        return ownerImageUrl;
    }

    return (
        <>
            <div className='w-auto bg-[#141414] mx-[20px] mt-[20px] rounded-[10px] p-[20px]'>
                <div className='w-auto flex' >
                    <Image className='rounded-[10px]'
                        loader={imageLoader}
                        src='owner.png'
                        width={50}
                        height={50}
                        alt='' />
                    <div className='mx-[10px] content-center'>
                        <h1 className='text-xl'>{ownerName}</h1>
                        <h1 className='text-sm text-[#8d8d8d]'>{timestampToString(timestamp)}</h1>
                    </div>
                </div>
                <div className='pt-[10px] '>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}