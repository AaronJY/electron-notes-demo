angular.module('app').controller('createNoteController', [
    '$scope',
    '$location',
    'notesManager',
    function ($scope, $location, notesManager) {
        $scope.note = {};

        $scope.createNote = function() {
            if ($scope.note.name !== undefined && $scope.note.name.length > 0) {
                notesManager.addNote($scope.note.name, $scope.note.content)

                back();
            }
        }

        $scope.back = function() {
            back();
        }

        function back() {
            $location.path('/')
        }
    }]
)
