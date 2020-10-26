var app = angular.module('app', ['ngRoute']);

//configure our routes
app.config(function($routeProvider){
  $routeProvider

  // route for login page
  .when('/', {
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  // route for the home page
  .when('/home', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  // route for the about page
  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'aboutController'
  })

  // route for the project page
  .when('/project',{
    templateUrl: 'pages/project.html',
    controller: 'projectController'
  })

  .otherwise({
    templateUrl:'pages/error.html'
  });

});