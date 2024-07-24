export class CLOSE implements Message {
    subscriptionId: string

    constructor(subscriptionId: string) {
        this.subscriptionId = subscriptionId
    }
}