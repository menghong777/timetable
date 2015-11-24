angular.module('starter.controllers', [])

.controller('SelectUniversityCtrl', function($scope) {})
.controller('ProfileSignUpCtrl', function($scope, $state) {
  $scope.data = {};
  
  $scope.signupEmail = function(){
    // Create a new user on Parse
    var user = new Parse.User();
    user.set("username", $scope.data.username);
    user.set("password", $scope.data.password);
    user.set("email", $scope.data.email);
    
    // Other fields can be set just like with Parse.Object
    // user.set("somethingElse", "likeThis!");
    
    user.signUp(null, {
      success: function(user) {
        alert("User created.");
        $state.go('tab.timetable');
      },
      error: function(user, error) {
        alert("Error: " + error.code + "" + error.message);
      }
    });
  };
})
.controller('LoginCtrl', function($scope, $state) {
  $scope.data = {};
  
  $scope.loginEmail = function(){
    Parse.User.logIn($scope.data.username, $scope.data.password, {
      success: function(user) {
        console.log(user);
        alert("Logged in.");
        $state.go('tab.timetable');
      },
      error: function(user, error) {
        alert("Username or password incorrect.");
      }
    })
  };
})
.controller('TimetableCtrl', function($scope) {})
.controller('TimetableAddCtrl', function($scope) {})
.controller('TimetableEditDayCtrl', function($scope) {})
.controller('TimetableEditCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  
});
