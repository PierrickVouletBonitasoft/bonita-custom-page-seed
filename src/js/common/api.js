(function () {
  'use strict';

  var API_PATH = '../API/';

  function updateTransformRequest(req) {
    if (req.hasOwnProperty('id')) {
      delete req.id;
    }
    return req;
  }

  var apiResources = {
//    LDAPHelper:'extension/ldaphelper',
  };

  var mod = angular
    .module('common.resources', ['ngResource'])
    .constant('API_PATH', API_PATH)
    .value('apiResources', apiResources);

  angular.forEach(apiResources, function(resourceUrl, resourceName) {
    mod.factory(resourceName, ['$resource', function($resource) {
      return $resource(API_PATH + resourceUrl + '/');
    }]);
  });

  mod.factory('I18N', ['$resource', function ($resource) {
    return $resource(API_PATH + 'system/i18ntranslation/');
  }]);

  mod.factory('session', ['$resource', function ($resource) {
    return $resource(API_PATH + 'system/session/unusedId');
  }]);
})();
