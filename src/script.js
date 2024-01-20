const titleSet = new Set();
function generateUUID() {
    const number = getRandomInt(100);
    let uuid =  'runkit'+number;
    if (!titleSet.has(uuid)) {
        titleSet.add(uuid);
    } else {
        uuid = generateUUID();
    }
    return uuid;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

