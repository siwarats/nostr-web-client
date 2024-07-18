import Feed from './Feed';
import styles from './Feeds.module.css';

export default function Feeds() {
    const items = Array.from(Array(30).keys());
    const feedId = 'bank';
    const ownerName = 'Bank Siwarat';
    const ownerImageUrl = 'https://yt3.ggpht.com/ytc/AIdro_kiAN7OmN6xlf6B8npcN' +
        '9vksS6yGkbnAQV2PowmpQQ=s88-c-k-c0x00ffffff-no-rj';
    const content = 'Your content goes here. The height of this div ' +
        'will adjust based on the content inside it.';
    const timestamp = 1626597600;

    return (
        <div className={styles.scrollableContainer}>
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