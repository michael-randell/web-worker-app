(function() {
  'use-strict'

  angular
    .module('webworker', ['ui.router', 'templates', 'ng-rails-csrf', 'angular.filter', 'ngMessages'])
    .config(function($httpProvider, $compileProvider, $qProvider){
      $httpProvider.useApplyAsync(true);
      $compileProvider.debugInfoEnabled(false);
      $qProvider.errorOnUnhandledRejections(false);
    });
})
