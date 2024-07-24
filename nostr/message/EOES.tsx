export class EOES implements Message {
    subscriptionId: string

    constructor(subscriptionId: string) {
        this.subscriptionId = subscriptionId
    }
}