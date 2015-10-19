(function () {
  'use strict';
  var app = angular.module('seed', [
    'ui.bootstrap',
    'common.resources'
  ]);

  app.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.greetings = 'Hello Seed';
  }]);
})();
