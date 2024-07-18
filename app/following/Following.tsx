import Followee from './Followee';

export default function Following() {
    const items = Array.from(Array(30).keys());
    const pubkey = 'nostr---00012939234';
    const followeeName = 'Bank Siwarat';
    const followeeImageUrl = 'https://yt3.ggpht.com/ytc/AIdro_kiAN7OmN6xlf6B8npcN' +
        '9vksS6yGkbnAQV2PowmpQQ=s88-c-k-c0x00ffffff-no-rj';

    return (
        <div className='w-full overflow-y-auto no-scrollbar'>
            {
                items.map((item) =>
                    <Followee pubkey={pubkey}
                        followeeName={followeeName}
                        followeeImageUrl={followeeImageUrl} />
                )
            }
        </div>
    );
}