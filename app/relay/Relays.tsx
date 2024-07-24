import Relay from "./Relay";

export default function Relays() {
    const items = Array.from(Array(30).keys());
    const relayUrl = 'siamstr.relay.net';
    const relayName = 'Siamstr';
    const status = 'Online';

    return (
        <>
            <div className='w-full overflow-y-auto no-scrollbar'>
                {
                    items.map((item, index) =>
                        <Relay key={index} relayUrl={relayUrl} relayName={relayName} status={status} />
                    )
                }
            </div>
        </>
    );
}