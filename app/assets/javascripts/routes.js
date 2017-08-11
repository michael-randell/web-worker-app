(function() {
  'use-strict'

  angular
    .module('webworker')
    .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('data-center', {
          url: '/data-center',
          controller: 'DataCenterController as vm',
          templateUrl: 'data-center/data-center.html',
          resolve: {
            dataCenterData: function(DataCenterService) {
              return DataCenterService.getInitMockData()
            }
          }
        })
    }])
})
