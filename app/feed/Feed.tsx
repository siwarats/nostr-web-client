import Image from 'next/image';

export default function Feed({ feedId, ownerImageUrl, ownerName, timestamp, content }) {

    const imageLoader = () => {
        return ownerImageUrl;
    }

    function timestampToString(value) {
        const date = new Date(value * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = date.getFullYear();
        const month = months[date.getMonth()]; // Get month symbol
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return ` ${day} ${month} ${year} ${hours}:${minutes}`;
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