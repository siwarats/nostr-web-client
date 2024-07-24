import { CLOSED } from './message/CLOSED'
import { EOES } from './message/EOES'
import { ReceivedEvent, EventPayload } from './message/EVENT'
import { OK } from './message/OK'

export class NostrSocketClient {

    private url: string
    private webSocket: WebSocket

    constructor(url: string) {
        this.url = url
        this.webSocket = new WebSocket(url)
    }

    onMessage(e: (message: Message) => any) {
        this.webSocket.onmessage = (ev) => {
            let message = this.mapToReceivedMessage(ev.data)
            if (message != undefined) {
                e(message)
            }
        }
    }

    send(message: string): boolean {
        let state = this.webSocket.readyState
        if (state == WebSocket.OPEN) {
            console.log(message)
            this.webSocket.send(message)
            return true
        }
        return false
    }

    reconnect() {
        let state = this.webSocket.readyState
        if (state == WebSocket.CLOSED) {
            this.webSocket = new WebSocket(this.url)
        }
    }

    disconnect() {
        let state = this.webSocket.readyState
        if (state == WebSocket.OPEN) {
            this.webSocket.close()
        }
    }

    private mapToReceivedMessage(message: string): Message | undefined {
        let array: any[] = JSON.parse(message);
        switch (array[0]) {
            case 'EVENT':
                return new ReceivedEvent(array[1], EventPayload.fromJSON(array[2]))
            case 'EOSE':
                return new EOES(array[1])
            case 'OK':
                return new OK(array[1], array[2], array[3])
            case 'NOTICE':
                return new NOTICE(array[1])
            case 'CLOSED':
                return new CLOSED(array[1])

            default:
                return undefined
        }
    }
}