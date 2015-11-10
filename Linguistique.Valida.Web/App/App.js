var app = angular.module('LangValApp', ['ngRoute', 'ngResource', 'ngMaterial', 'ngMessages', 'chieffancypants.loadingBar', 'md.data.table']);

app.config(function ($mdThemingProvider, $routeProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('orange').dark();


    $routeProvider.when("/projects", {
        controller: "ProjectsController",
        templateUrl: "App/views/projectsView.html"
    });

    $routeProvider.otherwise({ redirectTo: "/projects" });

}
);