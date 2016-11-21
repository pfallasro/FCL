'use strict';

angular.module('fclApp')
  .controller('LanguageCtrl', function ($scope, $rootScope, $translate) {

    $scope.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };

    $rootScope.$on('$translateChangeSuccess', function(event, data) {
      var language = data.language;
      $rootScope.lang = language;
    });
  });
