(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('DeathTableController',
        function DeathTableController($scope) {
            $scope.message = 'Determine your result on the death table!';

            $scope.damageTypes = Object.keys(_DEATH_TABLE);

            $scope.showResult = function() {
                if ($scope.selectedDamageType && $scope.deathTableRoll) {
                    if ($scope.deathTableRoll > 36) {
                        $scope.deathTableRoll = 36;
                    }
                    $scope.result = _DEATH_TABLE[$scope.selectedDamageType][$scope.deathTableRoll];
                }
            }
        }
    );
})();