module.exports = async function (context, eventGridEvent) {
    context.log(typeof eventGridEvent);
    context.log(eventGridEvent);

    var message = new Map();
    message.text = 'welcome'
    message.sender = 'SYSTEM'
    context.bindings.sendToUser = [{
        "userId": eventGridEvent.data.userId,
        "target": "newMessage",
        "arguments": [ message ]
    }];

    context.bindings.broadcast = [{
        "target": "connectionCount",
        "arguments": [ 3 ]
    }];
};