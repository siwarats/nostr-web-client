import { Tag } from './Tag'

export class e implements Tag {
    eventId: string
    recommendedRelayUrl?: string

    constructor(eventId: string, recommendedRelayUrl?: string) {
        this.eventId = eventId
        this.recommendedRelayUrl = recommendedRelayUrl
    }
}