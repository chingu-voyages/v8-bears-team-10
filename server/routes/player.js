var express = require('express');
var router = express.Router();
const PlayerGenerator = require('./../game_logic/player');
const Dungeon = require('./../game_logic/dungeon');
router.get('/', function(req, res, next) {
	// this will come from res.data.playerData later on
	// will also be in a post function
	const TEMP_PLAYER_DATA = {
		name: 'Leonidas'
	};
	const TEMP_ATTRIBUTES = {
		strength: 15,
		wisdom: 16,
		intelligence: 13,
		charisma: 11,
		dexterity: 14
	};

	const TEMP_SKILLS = {
		combat: {
			melee: 23,
			ranged: 4,
			magic: 1
		},
		// types of magic?
		magic: { earth: 1, wind: 1, water: 1, fire: 1 },
		crafting: 5,
		adventuring: 6
	};
	const player = new PlayerGenerator(TEMP_PLAYER_DATA);
	player.setInitialAttributes(TEMP_ATTRIBUTES);
	player.setInitialSkills(TEMP_SKILLS);
	player.increaseSkill({ name: 'adventuring', increase: 4 });

	//messing around

	const dungeon = new Dungeon();

	res.status(200).json({ player: player.getPlayerInfo(), dungeon: dungeon.getInfo() });
});

module.exports = router;
