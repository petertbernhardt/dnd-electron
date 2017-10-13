(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('NamesController',
    	function NamesController($scope, NamesService) {
        	$scope.message = 'Randomly generate character names!';

            $scope.races = _RACES;
            $scope.genders = ['Female', 'Male'];

        	$scope.generateNew = function() {
                $scope.characterName = NamesService.generateName($scope.selectedRace, $scope.selectedGender);
        	};
    	}
    );
})();