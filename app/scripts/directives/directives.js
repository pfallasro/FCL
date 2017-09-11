'use strict';

angular.module('fclApp')
  .directive('secondaryMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/secondaryMenuDirective.html'
    };
  });
