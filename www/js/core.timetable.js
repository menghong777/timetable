angular.module('starter.timetable', [])

.factory('StorageService', function($localStorage) {
    $localStorage = $localStorage.$default({
        things: []
    });
    
    var _getAll = function() {
        return $localStorage.things;
    }
    var _add = function(thing) {
        $localStorage.things.push(thing);
    }
    var _remove = function(thing) {
        $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
    }
    
    return {
        getAll: _getAll,
        add: _add,
        remove: _remove
    };
})
// .factory('Timetables', function() {
//   var timetables = [{
//     id: 0,
//     day: 'Monday',
//     module: 'Module Test 0',
//     code: 'MOD00000',
//     startTime: '',
//     endTime: '',
//     venue: 'Lab 0'
//   }, {
//     id: 1,
//     day: 'Tuesday',
//     module: 'Module Test 1',
//     code: 'MOD00000',
//     startTime: '',
//     endTime: '',
//     venue: 'Lab 1'
//   }, {
//     id: 2,
//     day: 'Wednesday',
//     module: 'Module Test 2',
//     code: 'MOD00000',
//     startTime: '',
//     endTime: '',
//     venue: 'Lab 2'
//   }, {
//     id: 3,
//     day: 'Thursday',
//     module: 'Module Test 3',
//     code: 'MOD00000',
//     startTime: '',
//     endTime: '',
//     venue: 'Lab 3'
//   }, {
//     id: 4,
//     day: 'Thursday',
//     module: 'Module Test 4',
//     code: 'MOD00000',
//     startTime: '',
//     endTime: '',
//     venue: 'Lab 4'
//   }];
  
//   return {
//       all: function() {
//           return timetables;
//       },
//       save: function(timetable) {
//           window.localStorage['timetable'] = angular.toJson(timetable);
//       },
//       remove: function(timetable) {
//           timetables.splice(timetables.indexOf(timetable), 1);
//       },
//       get: function(timetableId) {
//           for (var i = 0; i < timetables.length; i++) {
//               if (timetables[i].id === parseInt(timetableId)) {
//                   return timetables[i];
//               }
//           }
//       }
//   };
// })

.controller('TimetableCtrl', function($scope, StorageService) {
    // $scope.timetables = Timetables.all();
    $scope.things = StorageService.getAll();
    
    // $scope.add = function(newThing) {
    //     StorageService.add(newThing);
    // };
    
    $scope.remove = function(thing) {
        StorageService.remove(thing);
    };
})

.controller('TimetableAddCtrl', function($scope, $state, StorageService) {
    // Timetables.save($scope.timetables);
    
    // $scope.data = {};
    // $scope.addTimetable = function() {
    //     var timetable = [];
    //     timetable.localStorage();
    // }
    
    // $state.go('tab.timetable');
    $scope.add = function(newThing) {
        StorageService.add(newThing);
        $state.go('tab.timetable');
    };
    
});
// .factory('Timetables', function() {
//     var timetable = {
//         day: []
//     }
    
//     timetable.addTimetable = function(module) {
//         timetable.day.unshift(module);
//     }
    
//     timetable.removeTimetable = function(module, index) {
//         timetable.day.splice(index, 1);
//     }
//     return timetable;
// })
// .factory('Timetables', function() {
//     return {
//         all: function() {
//             var timetableString = window.localStorage['timetables'];
//             if(timetableString) {
//                 return angular.fromJson(timetableString);
//             }
//             return[];
//         },
        
//         save: function(timetables) {
//             window.localStorage['timetables'] = angular.toJson(timetables);
//         },
        
//         newTimetable: function(day) {
//             // Add a new timetable
//             return {
//                 thatDay: day,
//                 ModuleName: [],
                
//             };
//         },
        
//         getLastActiveIndex: function(index) {
//             window.localStorage['lastActiveTimetable'] = index;
//         }
//     }
// })

// .controller('TimetableCtrl', function($scope, Timetables) {}
    // Create a new timttable
    
    
    
    // // Create a new timetable
    // var createTimetable = function(day) {
    //     var newTimetable = Timetables.newTimetable(day);
    //     $scope.timetables.push(newTimetable);
    //     Timetables.save($scope.timetables);
    //     $scope.selectTimetable(newTimetable, $scope.timetables.length-1);
    // }
    
    // // Load or initilise timetable
    // $scope.timetables = Timetables.all();
    
    // // Grab the last active, or the first project
    // // $scope.activeTimetable = $scope.projects[Timetables.getLastActiveIndex()];
    
    // // Called to create a new timetable
    // $scope.newTimetable = function() {
    //     var day = prompt('Day');
    //     if(day) {
    //         createTimetable(day);
    //     }
    // };
    
    // // Called to select the given timetable
    // $scope.selectTimetable = function(timetable, index) {
    //     $scope.activeTimetable = timetable;
    //     Timetables.serLastActiveIndex(index);
    //     $scope.sideMenuController.close();
    // };
    
    // $scope.completionChanged = function() {
    //     Timetables.save($scope.timetables);
    // };
    
    // Create our model
