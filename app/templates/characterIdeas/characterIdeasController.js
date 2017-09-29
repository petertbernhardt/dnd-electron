(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('CharacterIdeasController',
    	function CharacterIdeasController($scope) {
        	$scope.message = 'Randomly generate character ideas!';

        	function generateNew() {
        		console.log('clicked!');
        	}
    	}
    );
})();