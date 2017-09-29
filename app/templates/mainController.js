(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('MainController',
    	function MainController($scope) {
        	$scope.array = [1,2,3];
    	}
	);
})();