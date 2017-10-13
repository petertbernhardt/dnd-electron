(function () {
	'use strict';
	angular.module('dndElectron')
	.service('NamesService', function NamesService() {

		// Formats a name string
        function characterName(nameObject) {
            switch(nameObject.race) {
                case 'Half-Orc':
                    return "Your name should be " + nameObject.name;
                case 'Tiefling':
                    return "Your Abyssal name should be " + nameObject.firstName + " and your Virtue name should be " + nameObject.virtue;
                default:
                    return "Your name should be " + nameObject.firstName + " " + nameObject.surname;
            }
        }

		// Private helper for generateName
        function generateName(namesObject, randomName, race, gender) {
            let randomFirstNameIndex =
                Math.round(Math.random() * (namesObject[gender].length - 1));
            let randomSurnameIndex =
                Math.round(Math.random() * (namesObject['Surname'].length - 1));
            randomName = {
                'race': race,
                'firstName': namesObject[gender][randomFirstNameIndex],
                'surname': namesObject['Surname'][randomSurnameIndex]
            };
            return characterName(randomName);
        }

		this.generateName = function(race, gender) {
            let namesObject = _NAMES[race];
			let randomName;
            switch(race) {
                case 'Half-Orc':
                    let randomIndex =
                        Math.round(Math.random() * (namesObject[gender].length - 1));
                    randomName = {
                        'race': race,
                        'name': namesObject[gender][randomIndex]
                    };
                    return characterName(randomName);
                case 'Half-Elf':
                    // randomly choose elf or human for first and sur names
                    // 0 is human, 1 is elf
                    let raceType = Math.round(Math.random() * 1);
                    if (raceType === 0) {
                        namesObject = _NAMES['Human'];
                    } else {
                        namesObject = _NAMES['Elf'];
                    }
                    return generateName(namesObject, randomName, race, gender);
                case 'Tiefling':
                    let randomAbyssalNameIndex =
                        Math.round(Math.random() * (namesObject[gender].length - 1));
                    let randomVirtueIndex =
                        Math.round(Math.random() * (namesObject['virtue'].length - 1));
                    randomName = {
                        'race': race,
                        'firstName': namesObject[gender][randomAbyssalNameIndex],
                        'virtue': namesObject['virtue'][randomVirtueIndex]
                    };
                    return characterName(randomName);
                default:
                    return generateName(namesObject, randomName, race, gender);
            }
		};
	});
})();