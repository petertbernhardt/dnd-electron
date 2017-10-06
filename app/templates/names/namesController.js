(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('NamesController',
    	function NamesController($scope) {
        	$scope.message = 'Randomly generate character names!';

            $scope.races = _RACES;
            $scope.genders = ['Female', 'Male'];

        	$scope.generateNew = function() {
                // with the race and gender provided, randomly generate a name based on that
                // half elves: choose from names from both the human and elf arrays
                // half orcs don't have surnames
                // tieflings don't have surnames, they have Virtue names
                let namesObject = _NAMES[$scope.selectedRace];
                let randomName;
                switch($scope.selectedRace) {
                    case 'Half-Orc':
                        let randomIndex =
                            Math.round(Math.random() * (namesObject[$scope.selectedGender].length - 1));
                        randomName = {
                            'race': $scope.selectedRace,
                            'name': namesObject[$scope.selectedGender][randomIndex]
                        };
                        $scope.characterName = characterName(randomName);
                        break;
                    case 'Half-Elf':
                        // randomly choose elf or human for first and sur names
                        // 0 is human, 1 is elf
                        let raceType = Math.round(Math.random() * 1);
                        if (raceType === 0) {
                            namesObject = _NAMES['Human'];
                        } else {
                            namesObject = _NAMES['Elf'];
                        }
                        generateName(namesObject, randomName);
                        break;
                    case 'Tiefling':
                        let randomAbyssalNameIndex =
                            Math.round(Math.random() * (namesObject[$scope.selectedGender].length - 1));
                        let randomVirtueIndex =
                            Math.round(Math.random() * (namesObject['virtue'].length - 1));
                        randomName = {
                            'race': $scope.selectedRace,
                            'firstName': namesObject[$scope.selectedGender][randomAbyssalNameIndex],
                            'virtue': namesObject['virtue'][randomVirtueIndex]
                        };
                        $scope.characterName = characterName(randomName);
                        break;
                    default:
                        generateName(namesObject, randomName);
                        break;
                }
        	};

            function generateName(namesObject, randomName) {
                let randomFirstNameIndex =
                    Math.round(Math.random() * (namesObject[$scope.selectedGender].length - 1));
                let randomSurnameIndex =
                    Math.round(Math.random() * (namesObject['Surname'].length - 1));
                randomName = {
                    'race': $scope.selectedRace,
                    'firstName': namesObject[$scope.selectedGender][randomFirstNameIndex],
                    'surname': namesObject['Surname'][randomSurnameIndex]
                };
                $scope.characterName = characterName(randomName);
            }

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
    	}
    );
})();