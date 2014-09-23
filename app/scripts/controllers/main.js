'use strict';

/**
 * @ngdoc function
 * @name AlexPortfolio.controller:ContentFromFirebase - retrive content from Firebase
 * @name AlexPortfolio.controller:SiteWasBuiltCtrl - set up first modal window "Site built with"
 @name AlexPortfolio.controller:SiteSupportCtrl - set up second modal window "Site supports"
 * @description
 * # MainCtrl
 * Controller of the AlexPortfolio
 */
 

// DECLARING MY APP AND INJECT DEPENDACIES
 var app = angular.module('AlexPortfolio',['firebase', 'ngModal', 'ngSanitize']);
//CONFIGURATION OF ng-Modal DEPENDACE
     app.config(function(ngModalDefaultsProvider) {
          return ngModalDefaultsProvider.set({
            closeButtonHtml: "<div class='close'></div>"
          });
      });
//CONTROLLER TO GET CONTENT FROM FIREBASE
     app.controller("ContentFromFirebase", function($scope, $firebase) {
    // now we can use $firebase to synchronize data between clients and the server!
    var ref = new Firebase("https://alex-portfolio.firebaseio.com");
    var sync = $firebase(ref);
    //RETRIVING CONTENT AS JSON
    $scope.content = $firebase(ref).$asObject();
    console.log($scope.content)
    // ON VALUE FRUNCTION - CONTENT UPDATED IN REAL TIME AS CHANGED IN FIREBASE
    ref.on('value', function (snapshot) {  
    $scope.content = snapshot.val();
     
      });
  });

//CONTROLLER TO SET UP FIRST MODAL WITH ng-Modal
      app.controller('SiteWasBuiltCtrl', function($scope) {
          $scope.myData = {
            modalShown: false,
          }
          $scope.logClose = function() {
            console.log('close!');
          };
          $scope.toggleModal = function() {
            $scope.myData.modalShown = !$scope.myData.modalShown;
            
          };
      });

//CONTROLLER TO SET UP SECOND MODAL WITH ng-Modal    
      app.controller('SiteSupportCtrl', function($scope) {
          $scope.myData = {
            modalShown: false,
          }
          $scope.logClose = function() {
            console.log('close!');
          };
          $scope.toggleModal = function() {
            $scope.myData.modalShown = !$scope.myData.modalShown;
          };
      });

 
//CONTROLLER TO SET PSEUDO LOADER - to be review and connected with Firabase data load  
    app.controller('Loader', function($scope, $timeout) {
        $scope.show_logo = true;
        $timeout(function() {
        $scope.$apply('show_logo = false');
        }, 1500);
});
