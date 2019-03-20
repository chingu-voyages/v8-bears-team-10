const randomName = require('./../game_logic/Names');

class Dungeon {
	constructor(props) {
		this.name = randomName('dungeon');
	}

	getInfo() {
		return {
			name: this.name
		};
	}
}

module.exports = Dungeon;
