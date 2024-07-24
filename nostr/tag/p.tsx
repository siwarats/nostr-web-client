import { Tag } from './Tag'

export class p implements Tag {
    pubKey: string
    recommendedRelayUrl?: string

    constructor(eventId: string, recommendedRelayUrl?: string) {
        this.pubKey = eventId
        this.recommendedRelayUrl = recommendedRelayUrl
    }
}