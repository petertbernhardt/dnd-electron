(function () {
	'use strict';
	angular.module('dndElectron')
	.service('SpellBookService', function SpellBookService(localStorageService) {
        this.loadSpellBook = function() {
            // query local storage and return a previously-saved spellbook
            return localStorageService.get('spellbook');
        };

        this.saveSpellBook = function(spellBook) {
            // save the spellbook changes to localstorage
            sortSpellBook(spellBook);
            return localStorageService.set('spellbook', spellBook);
        };

        function sortSpellBook(spellBook) {
            spellBook.sort(function(a,b) {
                return (a.level > b.level) ? 1 : ((b.level > a.level) ? -1 : 0);
            });
        }
	});
})();