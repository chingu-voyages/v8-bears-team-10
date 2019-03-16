export default {


	leagueDataCheck(leagueAbbreviation, currentWeek) {
		// const [missingData, storedData] = this.checkLocalStorage(leagueAbbreviation)

		// this.requestMissingData(leagueAbbreviation, missingData)

	},

	checkLocalStorage(leagueAbbreviation, week, season) {

		let missingData = [];
		let storedData = []

		// localStorage.clear()
		const keySuffix = `S${season}-W${week}`
		const teams = localStorage.getItem(`${leagueAbbreviation}_teams_${keySuffix}`)
		const skillPlayers = localStorage.getItem(`${leagueAbbreviation}_skillPlayers_${keySuffix}`)
		const scoringData = localStorage.getItem(`${leagueAbbreviation}_scoringData_${keySuffix}`)
		const passingData = localStorage.getItem(`${leagueAbbreviation}_passingData_${keySuffix}`)
		const rushingData = localStorage.getItem(`${leagueAbbreviation}_rushingData_${keySuffix}`)
		const receivingData = localStorage.getItem(`${leagueAbbreviation}_receivingData_${keySuffix}`)

		if (teams) {
			storedData.push({ teams: JSON.parse(teams) })
		} else {
			missingData.push('teams')
		}

		if (scoringData) {

			storedData.push({ scoringData: JSON.parse(scoringData) })
		} else {
			missingData.push('scoringData')

		}

		if (skillPlayers) {

			storedData.push({ skillPlayers: JSON.parse(skillPlayers) })
		} else {
			missingData.push('skillPlayers')

		}

		if (passingData && rushingData && receivingData) {

			storedData.push({
				weeklyData: {

					passingData: JSON.parse(passingData),
					rushingData: JSON.parse(rushingData),
					receivingData: JSON.parse(receivingData)
				}
			})
		} else {
			missingData.push('weeklyData')

		}


		return [missingData, storedData]
	},

	clearLeagueData(leagueAbbreviation, week, season) {
		const keySuffix = `S${season}-W${week}`

		const leagueData = [];
		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i).includes(`${leagueAbbreviation}_`)) {
				leagueData.push(localStorage.key(i));
			}
		}




		// Iterate over arr and remove the items by key
		for (let i = 0; i < leagueData.length; i++) {
			if (!leagueData[i].includes(keySuffix))

				localStorage.removeItem(leagueData[i]);
		}

	},

	saveDataToLocalStorage(leagueAbbreviation, dataKey, dataToSave) {


		const data = JSON.stringify(dataToSave)
		localStorage.setItem(`${leagueAbbreviation}_${dataKey}`, data)

	}




}


