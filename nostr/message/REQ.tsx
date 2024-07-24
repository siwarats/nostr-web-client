class REQ implements Message {
    subscriptionId: string
    filters?: Array<Tag>

    constructor(subscriptionId: string, filters?: Array<Tag>) {
        this.subscriptionId = subscriptionId
        this.filters = filters
    }
}