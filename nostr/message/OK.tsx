export class OK implements Message {
    subscriptionId: string
    isAcceptByRelay: boolean
    message: string

    constructor(subscriptionId: string, isAcceptByRelay: boolean, message: string) {
        this.subscriptionId = subscriptionId
        this.isAcceptByRelay = isAcceptByRelay
        this.message = message
    }
}