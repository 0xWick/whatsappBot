async function parseQuery(message) {

    // Split the message by spaces to get individual parts
    const parts = message.split(" ");
    parts.shift()

    const query = parts.join('+');
    return query
}

module.exports = {parseQuery}