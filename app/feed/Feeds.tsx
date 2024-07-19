import Feed from './Feed';

export default function Feeds() {
    const items = Array.from(Array(30).keys());
    const feedId = 'bank';
    const ownerName = 'Bank Siwarat';
    const ownerImageUrl = 'https://yt3.ggpht.com/ytc/AIdro_kiAN7OmN6xlf6B8npcN' +
        '9vksS6yGkbnAQV2PowmpQQ=s88-c-k-c0x00ffffff-no-rj';
    const content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'' +
        's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries';
    const timestamp = 1626597600;

    return (
        <div className='w-full overflow-y-auto no-scrollbar'>
            {
                items.map((item) =>
                    <Feed feedId={feedId}
                        ownerName={ownerName}
                        ownerImageUrl={ownerImageUrl}
                        content={content}
                        timestamp={timestamp} />
                )
            }
        </div>
    );
}