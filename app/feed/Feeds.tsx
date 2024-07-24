import Feed from './Feed';
import { useEffect } from 'react';
import { NostrSocketClient } from '../../nostr/NostrSocketClient'

var nostrClient: NostrSocketClient

export default function Feeds() {
    useEffect(() => {
        nostrClient = new NostrSocketClient('wss://relay.damus.io/');
        nostrClient.onMessage((message) => {
            console.log(message)
        })
        return () => {
            nostrClient.disconnect()
        };
    }, []);

    const items = Array.from(Array(30).keys());
    const feedId = 'bank';
    const ownerPubKey = '2303232304043fa'
    const ownerName = 'Bank Siwarat';
    const ownerImageUrl = 'https://yt3.ggpht.com/ytc/AIdro_kiAN7OmN6xlf6B8npcN' +
        '9vksS6yGkbnAQV2PowmpQQ=s88-c-k-c0x00ffffff-no-rj';
    const content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'' +
        's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries';
    const timestamp = 1626597600;

    async function sendMessage() {
        let msg = '["REQ", "000x1105x39464dmlf", {"limit":5}]'
        console.log(nostrClient.send(msg))
    }

    async function disconnectHandler() {
        let msg = '["CLOSE", "000x1105x39464dmlf"]'
        console.log(nostrClient.send(msg))
    }

    return (
        <div className='w-full overflow-y-auto no-scrollbar'>
            <button onClick={sendMessage}>Send</button>
            <>   </>
            <button onClick={disconnectHandler}>Disconnect</button>
            {
                items.map((item, index) =>
                    <Feed
                        key={index}
                        feedId={feedId}
                        ownerPubKey={ownerPubKey}
                        ownerName={ownerName}
                        ownerImageUrl={ownerImageUrl}
                        content={content}
                        timestamp={timestamp} />
                )
            }
        </div>
    );
}