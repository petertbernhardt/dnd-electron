(function () {
    'use strict';

    var _templateBase = './app/templates';

    angular.module('dndElectron', [
        'ngRoute'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

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
        .when('/names', {
            templateUrl: _templateBase + '/names/names.html',
            controller: 'NamesController',
            controllerAs: 'names'
        })
        .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode({enabled: false, requireBase: false});
    }]);

})();