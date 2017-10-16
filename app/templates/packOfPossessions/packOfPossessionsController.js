(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('PackOfPossessionsController',
        function PackOfPossessionsController($scope, PackOfPossessionsService) {
            $scope.message = 'Keep track of your items!';

            $scope.rowCollection = [];

            $scope.components = _COMPONENTS;

            $scope.itemsByPage = 10;
            $scope.displayedPages = 5;

            $scope.addItem = function(item) {
                if (item && item.name && item.amount >= 0) {
                    let newItem = {
                        'amount': item.amount,
                        'name': item.name
                    };
                    $scope.rowCollection.push(newItem);
                    $scope.item = {};
                }
            };

            $scope.deleteRow = function(row) {
                let index = $scope.rowCollection.indexOf(row);
                if (index !== -1) {
                    $scope.rowCollection.splice(index, 1);
                }
            };

            $scope.loadPack = function() {
                if (PackOfPossessionsService.loadPack()) {
                    $scope.rowCollection = PackOfPossessionsService.loadPack();
                }
            };

            $scope.savePack = function() {
                PackOfPossessionsService.savePack($scope.rowCollection);
            };

            $scope.loadPack();
    	}
    );
})();