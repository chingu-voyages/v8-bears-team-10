'use strict';

class Player {
	constructor(props) {
		this.name = props.name;
		this.essence = 5;
		this.gold = 100;
		this.attributes = undefined;
		this.skills = undefined;
	}

	setInitialAttributes(attributes) {
		this.attributes = attributes;
	}
	setInitialSkills(skills) {
		this.skills = skills;
	}

	increaseSkill(skill) {
		this.skills[skill.name] += skill.increase;
	}

	getName() {
		return this.name;
	}

	getAttributes() {
		return this.attributes;
	}

	getSkills() {
		return this.skills;
	}

	getPlayerInfo() {
		return {
			name: this.name,
			essense: this.essence,
			gold: this.gold,
			attributes: this.attributes,
			skills: this.skills
		};
	}
}
module.exports = Player;
