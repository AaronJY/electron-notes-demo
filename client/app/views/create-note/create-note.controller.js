angular.module('app').controller('createNoteController', [
    '$scope',
    '$location',
    function ($scope, $location) {
        //...
        $scope.note = {}

        $scope.createNote = function() {
            $location.path('/')
        }
    }]
)
