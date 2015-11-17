'use strict';
var app = angular.module('LangValApp', ['ngRoute', 'ngResource', 'ngMaterial', 'ngMessages', 'angular-loading-bar', 'ngAnimate', 'chieffancypants.loadingBar', 'md.data.table']);

app.config(function ($mdThemingProvider, $routeProvider, cfpLoadingBarProvider)
{
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('orange').dark();

    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;

    $routeProvider.when("/Projects", {
        controller: "ProjectsController",
        templateUrl: "app/views/Projects.html"
    });

    $routeProvider.when("/Project/:id", {
        controller: "ProjectController",
        templateUrl: "app/views/Project.html"
    });

    $routeProvider.when("/CreateProject", {
        controller: "CreateProjectController",
        templateUrl: "app/views/CreateProject.html"
    });

    $routeProvider.otherwise({ redirectTo: "/Projects" });

}
);