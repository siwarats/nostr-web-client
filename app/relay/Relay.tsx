export default function Relay({ relayUrl, relayName, status }) {
    return (
        <div className='flex p-[20px] mx-[20px] mt-[20px] bg-[#141414] rounded-[10px]'>
            <div className='w-1/2'>
                <h1 className='text-[20px]'>{relayName}</h1>
                <h1 className='text-[15px] text-[#8a8a8a]'>{relayUrl}</h1>
            </div>
            <div className='flex w-1/2 h-auto justify-end items-center'>
                <h1 className='text-[20px] text-[#15803d]'>{status}</h1>
            </div>
        </div>
    );
}