'use strict';

/**
 * @ngdoc overview
 * @name fclApp
 * @description
 * # fclApp
 *
 * Main module of the application.
 */
angular
  .module('fclApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/proyectos', {
        templateUrl: 'views/proyectosSociales.html'
        // controller: 'proyectos'
      })
      .when('/agendaQuincenal', {
        templateUrl: 'views/agendaQuincenal.html'
        // controller: 'agendaQuincenal'
      })
      .when('/eneltiempo', {
        templateUrl: 'views/enElTiempo.html'
        // controller: 'eneltiempo'
      })
      .when('/eneltiempobanner', {
        templateUrl: 'views/eneltiempo-banner.html'
        // controller: 'eneltiempobanner'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
