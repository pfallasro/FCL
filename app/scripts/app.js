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

      //HOME
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      //PRIMARY MENU
      .when('/quienessomos', {
        templateUrl: 'views/quienessomos.html'
        // controller: 'quienessomos'
      })
      .when('/eneltiempo', {
        templateUrl: 'views/eneltiempo.html'
        // controller: 'eneltiempo'
      })
      .when('/programa', {
        templateUrl: 'views/programa.html'
        // controller: 'programa'
      })
      .when('/imm', {
        templateUrl: 'views/imm.html'
        // controller: 'IMMCtrl'
      })
      .when('/contactanos', {
        templateUrl: 'views/contactanos.html',
        controller: 'ContactanosCtrl'
      })

      //SECONDARY MENU
      .when('/proyectos', {
        templateUrl: 'views/proyectosSociales.html'
        // controller: 'proyectos'
      })

      //CENTRO DE LIDERAZGO
      .when('/agendaQuincenal', {
        templateUrl: 'views/agendaQuincenal.html'
        // controller: 'agendaQuincenal'
      })
      .when('/liderespositivos', {
        templateUrl: 'views/lideresPositivos.html'
        // controller: 'liderespositivos'
      })

      //PRENSA
      .when('/prensa', {
        templateUrl: 'views/prensa.html'
        // controller: 'ultimasnoticias'
      })
      //DANOS UNA MANO
      .when('/danosunamano', {
        templateUrl: 'views/danosunamano.html'
        // controller: 'contribuciones'
      })
      //SERVICIOS
      .when('/bienesraices', {
        templateUrl: 'views/bienesraices.html'
        // controller: 'bienesraices'
      })
      .when('/taller', {
        templateUrl: 'views/taller.html'
        // controller: 'taller'
      })
      .when('/presenciacomunitaria', {
        templateUrl: 'views/presenciacomunitaria.html'
        // controller: 'presenciacomunitaria'
      })
      .when('/asesorias', {
        templateUrl: 'views/asesorias.html'
        // controller: 'asesorias'
      })
      .when('/entrenamiento', {
        templateUrl: 'views/entrenamiento.html'
        // controller: 'entrenamiento'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
