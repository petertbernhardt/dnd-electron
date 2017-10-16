(function () {
	'use strict';
	angular.module('dndElectron')
	.service('PackOfPossessionsService', function PackOfPossessionsService(localStorageService) {
        this.loadPack = function() {
            // query local storage and return a previously-saved pack
            return localStorageService.get('pack');
        };

        this.savePack = function(spellBook) {
            // save the pack changes to localstorage
            sortPack(spellBook);
            return localStorageService.set('pack', spellBook);
        };

        function sortPack(spellBook) {
            spellBook.sort(function(a,b) {
                return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
            });
        }
	});
})();