var app = angular.module('MYMApp', ['ngRoute', 'angular-loading-bar', 'ui.bootstrap', 'angularFileUpload', 'ngTagsInput']);
app.config(['cfpLoadingBarProvider', '$routeProvider', function (cfpLoadingBarProvider, $routeProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  $routeProvider.when("/home", { controller: "captureController", templateUrl: "app/views/captureForm.html" });
  $routeProvider.when("/captureForm", { controller: "captureController", templateUrl: "app/views/captureForm.html" });
  $routeProvider.otherwise({ redirectTo: "/captureForm" });
}]);
// Deployment
// Dev. Server
//var serviceBase = 'http://10.1.128.29:8111/';
//var socketURL = 'http://primessage.primedia.co.za/media';
//  Local
var serviceBase = 'http://multimediaapi.co.za/';
var maximumFileSize = 1;
app.constant('ngSettings', {
  apiServiceBaseUri: serviceBase,
  clientId: 'ngMediaApp'
});
