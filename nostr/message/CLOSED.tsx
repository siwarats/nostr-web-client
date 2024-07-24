export class CLOSED implements Message {
    subscriptionId: string

    constructor(subscriptionId: string) {
        this.subscriptionId = subscriptionId
    }
}