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
    'ngTouch',
    'pascalprecht.translate'
  ])

  .run(function($rootScope) {
    $rootScope.lang = 'es';
  })

  .config(function($translateProvider) {

    var fileNameConvention = {
      prefix: '/scripts/translations/locale-',
      suffix: '.json'
    };

    $translateProvider
      .useStaticFilesLoader(fileNameConvention)
      .preferredLanguage('es')
      .useMissingTranslationHandlerLog();

  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contactanos', {
        templateUrl: 'views/contactanos.html',
        controller: 'ContactanosCtrl'
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
      .otherwise({
        redirectTo: '/'
      });
  });
