(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('MainController',
    	function MainController($scope) {
        	$scope.message = 'Welcome to the D&D Electron app! ' +
        		'Please select a page from the navigation up top to use this application.';
    	}
	);
})();