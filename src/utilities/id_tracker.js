const fs = require('fs');

const idTracker = {};
idTracker.getLatestId = () => fs.readFileSync('files/id_track.txt', 'utf-8');
idTracker.updateLatestId = (latestId) => fs.writeFileSync('files/id_track.txt', latestId);

module.exports = Object.freeze({ idTracker });