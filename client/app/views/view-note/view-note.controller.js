angular.module('app').controller('viewNoteController', [
    '$scope',
    '$location',
    'notesManager',
    function ($scope, $location, notesManager) {
        var viewParams = $location.search()

        $scope.note = notesManager.notes[viewParams['noteIndex']]

        $scope.back = function() {
            $location.path('/')
        }
    }]
)
