export const controller = ['$scope', '$rootScope', ($scope, $rootScope) => {
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

}]