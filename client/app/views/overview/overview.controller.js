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

        $scope.export = function() {
            let output = 'Name,LastUpdatedDate,Content\n'

            angular.forEach($scope.notes, function(note) {
                let content = note.content === undefined ? '' : note.content
                
                output += `${note.name},${note.lastUpdatedDate},${content}\n`
            });

            console.log(output)

            // todo: show save dialog
        }

        $scope.$on('notesUpdated', function(evt, notes) {
            $scope.notes = notes
        })
    }]
)
