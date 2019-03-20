const NAMES = {
	dungeon: ['dark', 'forest', 'water']
};
const getRandomName = type => {
	const len = Math.floor(Math.random() * NAMES[type].length);

	return NAMES[type][len];
};
module.exports = getRandomName;
