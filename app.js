(function () {
    'use strict';

    var _templateBase = './app/templates';

    angular.module('dndElectron', [
        'LocalStorageModule',
        'ngRoute',
        'smart-table'
    ])
    .config(['$routeProvider', '$locationProvider', 'localStorageServiceProvider',
        function ($routeProvider, $locationProvider, localStorageServiceProvider) {

        $routeProvider.when('/', {
            templateUrl: _templateBase + '/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .when('/characterIdeas', {
            templateUrl: _templateBase + '/characterIdeas/characterIdeas.html' ,
            controller: 'CharacterIdeasController',
            controllerAs: 'characterIdeas'
        })
        .when('/deathTable', {
            templateUrl: _templateBase + '/deathTable/deathTable.html',
            controller: 'DeathTableController',
            controllerAs: 'deathTable'
        })
        .when('/names', {
            templateUrl: _templateBase + '/names/names.html',
            controller: 'NamesController',
            controllerAs: 'names'
        })
        .when('/packOfPossessions', {
            templateUrl: _templateBase + '/packOfPossessions/packOfPossessions.html',
            controller: 'PackOfPossessionsController',
            controllerAs: 'packOfPossessions'
        })
        .when('/spellBook', {
            templateUrl: _templateBase + '/spellBook/spellBook.html',
            controller: 'SpellBookController',
            controllerAs: 'spellBook'
        })
        .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode({enabled: false, requireBase: false});

        localStorageServiceProvider.setPrefix('dndElectron');
    }]);

})();