angular.module('app').controller('createNoteController', [
    '$scope',
    '$location',
    'notesManager',
    function ($scope, $location, notesManager) {
        //...
        $scope.note = {}

        $scope.createNote = function() {
            notesManager.addNote($scope.note.name, $scope.note.content)

            $location.path('/')
        }
    }]
)
