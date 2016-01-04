angular.module('starter.timetable', [])

.factory('StorageService', function($localStorage) {
    // Initialise array
    $localStorage = $localStorage.$default({
        timetables: []
    });
    
    var _getAll = function() {
        return $localStorage.timetables;
    }
    var _add = function(timetable) {
        $localStorage.timetables.push(timetable);
    }
    var _remove = function(timetable) {
        $localStorage.timetables.splice($localStorage.timetables.indexOf(timetable), 1);
    }
    
    return {
        getAll: _getAll,
        add: _add,
        remove: _remove
    };
})

.controller('TimetableCtrl', function($scope, $state, StorageService) {
    // Get all timetables
    $scope.timetables = StorageService.getAll();
    
    // Add timetable
    $scope.add = function(newTimetable) {
        StorageService.add(newTimetable);
        $state.go('tab.timetable');
    };
    
    // Remove timetable
    $scope.remove = function(timetable) {
        StorageService.remove(timetable);
    };
})
