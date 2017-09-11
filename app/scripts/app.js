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
      .when('/centroLiderazgo', {
        templateUrl: 'views/centroLiderazgo.html'
        // controller: 'agendaQuincenal'
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
      .when('/serviciosFCL', {
        templateUrl: 'views/serviciosFCL.html'
        // controller: 'taller'
      })
      .when('/festivalJuvenil', {
        templateUrl: 'views/festivalJuvenil.html'
        // controller: 'presenciacomunitaria'
      })
      .when('/carrera', {
        templateUrl: 'views/carrera.html'
        // controller: 'asesorias'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
