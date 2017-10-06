(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('CharacterIdeasController',
    	function CharacterIdeasController($scope) {
        	$scope.message = 'Randomly generate character ideas!';

        	$scope.generateNew = function() {
                // using the arrays from races.js, classes.js, and alignments.js,
                // generate a random number based on each of their sizes, and select
                // that associated value and show it on screen
                let alignmentRandom = Math.round(Math.random() * (_ALIGNMENTS.length - 1));
                let classRandom = Math.round(Math.random() * (_CLASSES.length - 1));
                let raceRandom = Math.round(Math.random() * (_RACES.length - 1));
                let selectedAlignment = _ALIGNMENTS[alignmentRandom];
                let selectedClass = _CLASSES[classRandom];
                let selectedRace = _RACES[raceRandom];
                $scope.characterIdea = characterIdea(selectedAlignment, selectedClass, selectedRace);
        	};

            function characterIdea(selectedAlignment, selectedClass, selectedRace) {
                return "You should play as a " + selectedAlignment + ", " + selectedRace + " " + selectedClass;
            }
    	}
    );
})();