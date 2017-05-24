const app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/overview/overview.tpl.html',
            controller: 'overviewController'
        })

        .when('/create-note', {
            templateUrl: 'views/create-note/create-note.tpl.html',
            controller: 'createNoteController'
        })

        .when('/view-note', {
            templateUrl: 'views/view-note/view-note.tpl.html',
            controller: 'viewNoteController'
        })
})
