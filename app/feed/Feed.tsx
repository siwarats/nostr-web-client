import Image from 'next/image';
import styles from './Feed.module.css';

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
            <div className={styles.container}>
                <div className={styles.ownerContainer} >
                    <Image loader={imageLoader}
                        src='owner.png'
                        width={75}
                        height={75}
                        alt='' />
                    <div>
                        <h1>{ownerName}</h1>
                        <h2>{timestampToString(timestamp)}</h2>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}