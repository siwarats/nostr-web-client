import { tagsFromJsonObjArray, Tag } from '../tag/Tag'

export class PublishEvent implements Message {
    payload: EventPayload
    constructor(payload: EventPayload) {
        this.payload = payload
    }
}

export class ReceivedEvent implements Message {
    subscriptionId: string
    payload?: EventPayload
    constructor(subscriptionId: string, payload?: EventPayload) {
        this.subscriptionId = subscriptionId
        this.payload = payload
    }
}

export class EventPayload {
    id: string; // 32-bytes lowercase hex-encoded sha256 of the serialized event data
    pubkey: string; // 32-bytes lowercase hex-encoded public key of the event creator
    createdAt: number; // Unix timestamp in seconds
    kind: number; // Integer between 0 and 65535
    content: string; // Arbitrary string
    sig: string; // 64-bytes lowercase hex of the signature of the sha256 hash
    tags: Array<Tag>; // Array of arrays of arbitrary strings

    constructor(
        id: string,
        pubkey: string,
        createdAt: number,
        kind: number,
        content: string,
        sig: string,
        tags: Array<Tag>
    ) {
        this.id = id;
        this.pubkey = pubkey;
        this.createdAt = createdAt;
        this.kind = kind;
        this.content = content;
        this.sig = sig;
        this.tags = tags;
    }

    static fromJSON(jsonObject: any): EventPayload {
        return new EventPayload(
            jsonObject.id,
            jsonObject.pubkey,
            jsonObject.created_at,
            jsonObject.kind,
            jsonObject.content,
            jsonObject.sig,
            tagsFromJsonObjArray(jsonObject.tags) ?? []
        )
    }
}