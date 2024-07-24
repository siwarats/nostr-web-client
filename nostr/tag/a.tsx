import { Tag } from './Tag'

export class a implements Tag {
    replaceableEvent: string
    recommendedRelayUrl?: string

    constructor(eventId: string, recommendedRelayUrl?: string) {
        this.replaceableEvent = eventId
        this.recommendedRelayUrl = recommendedRelayUrl
    }
}