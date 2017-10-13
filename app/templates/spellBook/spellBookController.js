(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('SpellBookController',
        function SpellBookController($scope, SpellBookService) {
            $scope.message = 'Keep track of your spellbook!';

            $scope.rowCollection = [];

            $scope.components = _COMPONENTS;

            $scope.addSpell = function(spell) {
                if (spell && spell.name && spell.components &&
                    (spell.level >= 0 && spell.level <= 9)) {
                    $scope.rowCollection.push(spell);
                }
            };

            $scope.editRow = function(row) {
                console.log('edit', row);
            };

            $scope.delete = function() {
                console.log('delete clicked');
            };

            $scope.loadSpellBook = function() {
                $scope.rowCollection = SpellBookService.loadSpellBook();
            };

            $scope.saveSpellBook = function() {
                SpellBookService.saveSpellBook($scope.rowCollection);
            };

            $scope.loadSpellBook();
    	}
    );
})();