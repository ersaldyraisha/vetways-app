// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('vetways', ['ionic'])


.controller('mainController', ['$scope', '$rootScope', ($scope, $rootScope) => {
  $rootScope.pageIndicator = {}
  $rootScope.fragment = ''
  $rootScope.isModalActive = false

  $rootScope.changePage = (next) => {
    $rootScope.pageIndicator = Object.assign({}, {
      home: false,
      article: false,
      notif: false,
      profile: false
    })
    $rootScope.pageIndicator[next] = true
  }

  $rootScope.scrollTop = () => {
    document.querySelector('main').scrollTo(0,0)
  }

  $rootScope.toggleModal = (target) => {
    $rootScope.isModalActive = !$rootScope.isModalActive
    if ( $rootScope.isModalActive ) {
      $rootScope.fragment = `fragments/${target}.html`
    } else {
      $rootScope.fragment = ''
    }
  }

}])

.controller('homeController', ['$scope', '$rootScope', ($scope, $rootScope) => {
  $scope.init = () => {
    $rootScope.changePage('home')
    if ( $rootScope.isModalActive ) {
      $rootScope.toggleModal()
    }

  }
}])

.controller('articleController', ['$scope', '$rootScope', ($scope, $rootScope) => {
  $scope.init = () => {
    $rootScope.changePage('article')
    if ( $rootScope.isModalActive ) {
      $rootScope.toggleModal()
    }
  }
}])

.controller('chatController', ['$scope', '$rootScope', ($scope, $rootScope) => {
  $scope.lala = 'lili'
}])

.controller('notifController', ['$scope', '$rootScope', ($scope, $rootScope) => {
  $scope.init = () => {
    $rootScope.changePage('notif')
    if ( $rootScope.isModalActive ) {
      $rootScope.toggleModal()
    }
  }
}])

.controller('profileController', ['$scope', '$rootScope', ($scope, $rootScope) => {
  $scope.init = () => {
    $rootScope.changePage('profile')
    if ( $rootScope.isModalActive ) {
      $rootScope.toggleModal()
    }
  }
}])

.directive('modal', () => {
  return {
      restrict: 'A',
      scope: {
          fragment: '=ngModel'
      },
      template: `<div ng-include="fragment"></div>`
  }
})

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
    .state('articles-knowledge', {
      url: '/articles-knowledge',
      templateUrl: 'pages/articles-knowledge.html',
      controller: 'articleController'
    })
    .state('articles-news', {
      url: '/articles-news',
      templateUrl: 'pages/articles-news.html',
      controller: 'articleController'
    })
    .state('article-detail', {
      url: '/article-detail',
      templateUrl: 'pages/article-detail.html',
      controller: 'articleController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'pages/profile.html',
      controller: 'profileController'
    })
  $urlRouterProvider.otherwise('/home');
})