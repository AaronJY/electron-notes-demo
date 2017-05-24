angular.module('app').factory('notesManager', [
    '$rootScope',
    function($rootScope) {
        let notes = [
            {
                name: 'Buy Milk',
                content: 'from ASDA',
                lastUpdatedDate: new Date()
            }
        ]

        var addNote = function(name, content) {
            let note = {
                name: name,
                content: content,
                lastUpdatedDate: new Date()
            }

            notes.push(note)

            onNotesChanged()
        }

        var deleteNote = function(noteIndex) {
            notes.splice(noteIndex, 1)

            onNotesChanged()
        }

        function onNotesChanged() {
            $rootScope.$broadcast('notesUpdated', notes)
        }

        return {
            notes: notes,
            addNote: addNote,
            deleteNote: deleteNote
        }
    }]
)
