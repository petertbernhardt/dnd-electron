(function () {
    'use strict';
    angular.module('dndElectron')

    .controller('SpellBookController',
        function SpellBookController($scope, SpellBookService) {
            $scope.message = 'Keep track of your spellbook!';

            $scope.rowCollection = [];

            $scope.components = _COMPONENTS;

            $scope.itemsByPage = 10;
            $scope.displayedPages = 5;

            $scope.addSpell = function(spell) {
                if (spell && spell.name && spell.components &&
                    (spell.level >= 0 && spell.level <= 9)) {
                    let newSpell = {
                        'level': spell.level,
                        'name': spell.name,
                        'components': spell.components
                    };
                    $scope.rowCollection.push(newSpell);
                    $scope.spell = {};
                }
            };

            $scope.editRow = function(row) {
                console.log('edit', row);
            };

            $scope.deleteRow = function(row) {
                let index = $scope.rowCollection.indexOf(row);
                if (index !== -1) {
                    $scope.rowCollection.splice(index, 1);
                }
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