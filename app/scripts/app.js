'use strict';

/**
 * @ngdoc Alex Garulli one page app portfolio - HTML5 - CSS3 - AngularJS - Firebase
 * @name AlexPortfolio
 * @description
 * # AlexPortfolio
 *
 * Main module of the application.
 */

 //DECLARING MY MODULE & DEPENDACES
angular
  .module('AlexPortfolio', [
    'firebase',
    'ngSanitize', 
    'ngModal'
  ]);
