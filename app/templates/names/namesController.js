(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('NamesController',
    	function NamesController($scope) {
        	$scope.message = 'Randomly generate character names!';

            $scope.races = _RACES;

        	$scope.generateNew = function() {
                // with the race and gender provided, randomly generate a name based on that
                // half elves: choose from names from both the human and elf arrays
                // half orcs don't have surnames
                // tieflings don't have surnames, they have Virtue names
        	};

            function characterIdea(name) {
                return "Your name should be: ";
            }
    	}
    );
})();