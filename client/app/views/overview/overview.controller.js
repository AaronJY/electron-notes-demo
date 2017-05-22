angular.module('app').controller('overviewController', [
    '$scope',
    '$location',
    'notesManager',
    function ($scope, $location, notesManager) {
        $scope.notes = notesManager.notes

        $scope.createNote = function() {
            $location.path('/create-note')
        }

        $scope.deleteNote = function(noteIndex) {
            notesManager.deleteNote(noteIndex)
        }

        $scope.viewNote = function(noteIndex) {
            $location.path('/view-note').search({
                noteIndex: noteIndex
            })
        }

        $scope.$on('notesUpdated', function(evt, notes) {
            $scope.notes = notes
        })
    }]
)
