// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('vetways', ['ionic'])

.controller('mainController', ['$scope', ($scope) => {
  $scope.pageIndicator = {}

  $scope.changePage = (next) => {
    $scope.pageIndicator = Object.assign({}, {
      home: false,
      article: false,
      notif: false,
      profile: false
    })
    $scope.pageIndicator[next] = true
  }

  $scope.init = () => {
    $scope.changePage('home');
  }

}])

.controller('homeController', ['$scope', ($scope) => {

}])

.controller('articleController', ['$scope', ($scope) => {

}])

.controller('notifController', ['$scope', ($scope) => {
  
}])

.controller('profileController', ['$scope', ($scope) => {

}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .state('notif', {
      url: '/notif',
      templateUrl: 'pages/notif.html',
      controller: 'notifController'
    })
    .state('articles', {
      url: '/articles',
      templateUrl: 'pages/articles.html',
      controller: 'articleController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'pages/profile.html',
      controller: 'profileController'
    })
  $urlRouterProvider.otherwise('/home');
})