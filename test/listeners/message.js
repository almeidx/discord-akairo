/* eslint-disable no-console */

const { Listener } = require('../..');

class MessageCreateListener extends Listener {
    constructor() {
        super('messageCreate', {
            emitter: 'client',
            event: 'messageCreate',
            category: 'client'
        });
    }

    exec(msg) {
        console.log(msg.content);
    }
}

module.exports = MessageListener;
