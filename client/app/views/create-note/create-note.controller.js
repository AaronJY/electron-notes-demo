angular.module('app').controller('createNoteController', [
    '$scope',
    '$location',
    'notesManager',
    function ($scope, $location, notesManager) {
        $scope.createNote = function() {
            notesManager.addNote($scope.note.name, $scope.note.content)

            $location.path('/')
        }

        $scope.back = function() {
            $location.path('/')
        }
    }]
)
