export function generateBlindsStructure(gameTime, raiseBlindTime) {
    const blindsStructure = [];
    let currentTime = 180; // 3 minutes in seconds
    let currentBlind = "1/2";

    for (let i = 0; currentTime <= gameTime; i++) {
        blindsStructure.push([i + 1, formatTime(currentTime), currentBlind]);
        currentTime += raiseBlindTime;
        currentBlind = incrementBlind(currentBlind);
    }

    return blindsStructure;
}

export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${mins.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}`;
}

export function incrementBlind(blind) {
    const parts = blind.split('/');
    const smallBlind = parseInt(parts[0], 10);
    const bigBlind = parseInt(parts[1], 10);
    return `${smallBlind * 2}/${bigBlind * 2}`;
}
