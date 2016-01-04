angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  .state('start', {
    url: '/start',
    templateUrl: 'templates/start.html',
    controller: 'StartCtrl'
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  
//   .state('selectUni', {
//     url: '/signup-select_university',
//     templateUrl: 'templates/signup-select_university.html',
//     controller: 'SelectUniversityCtrl'
//   })
  
  .state('signup', {
    url: '/signup-profile',
    templateUrl: 'templates/signup-profile.html',
    controller: 'ProfileSignUpCtrl'
  })
  
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  
  // Each tab has its own nav history stack:  
  .state('tab.timetable', {
    url: '/timetable',
    views: {
      'tab-timetable': {
        templateUrl: 'templates/tab-timetable.html',
        controller: 'TimetableCtrl'
      }
    }
  })
  .state('tab.timetable-add', {
    url: '/timetable-add',
    views: {
      'tab-timetable': {
        templateUrl: 'templates/timetable-add.html',
        controller: 'TimetableCtrl'
      }
    }
  })

  .state('tab.timetable-edit', {
    url: '/timetable-edit',
    views: {
      'tab-timetable': {
        templateUrl: 'templates/timetable-edit.html',
        controller: 'TimetableCtrl'
      }
    }
  })
  
//   .state('tab.chats', {
//       url: '/chats',
//       views: {
//         'tab-chats': {
//           templateUrl: 'templates/tab-chats.html',
//           controller: 'ChatsCtrl'
//         }
//       }
//     })
//     .state('tab.chat-detail', {
//       url: '/chats/:chatId',
//       views: {
//         'tab-chats': {
//           templateUrl: 'templates/chat-detail.html',
//           controller: 'ChatDetailCtrl'
//         }
//       }
//     })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start');

});