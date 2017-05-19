angular.module('app').controller('overviewController', [
    '$scope',
    '$location',
    function ($scope, $location) {
        $scope.notes = [
            {
                name: 'Aaron\'s test note 1',
                lastUpdatedDate: new Date()
            }
        ]

        $scope.createNote = function() {
            $location.path('/create-note')
        }
    }]
)
