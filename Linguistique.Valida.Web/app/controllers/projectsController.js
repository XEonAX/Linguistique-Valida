'use strict';
app.controller('ProjectsController', function ($scope, $mdDialog, $mdToast, $filter, $location,$window, ProjectsService)
{
    $scope.selected = [];
    $scope.NewProject = [];
    $scope.createProject = function (ev)
    {
        $location.path('/CreateProject');
    };

    $scope.projects = ProjectsService.GetAll();

    $scope.formatDate = function (date)
    {
        var dateOut = new Date(date);
        return dateOut;
    };
    $scope.orderByDate = function (item)
    {
        return $filter('date')(item, 'yyyyMMdd');
    };

    $scope.SendMail = function (mail,subject)
    {
        $window.location = "mailto:" + mail + "?subject=" +subject+ "&body=Hola!!!";
    };

});

function createProjectDialogController($scope, $mdDialog, $filter, project)
{
    $scope.project = project;
    $scope.dateFrom = new Date();
    $scope.dateTo = new Date();

    var self = $scope.project;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.participants = [];
    self.itpeople = [];
    self.steampeople = [];

    self.filterSelected = true;
    self.languages = ['FRENCH', 'GERMAN', 'JAPANESE', 'CHINESE'];


    /**
     * Search for contacts.
     */
    function querySearch(query)
    {
        var results = query ?
            self.allContacts.filter(createFilterFor(query)) : [];
        return results;
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query)
    {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(contact)
        {
            return (contact._lowername.indexOf(lowercaseQuery) != -1);;
        };
    }
    function loadContacts()
    {
        var contacts = [
          'Marina Augustine',
          'Oddr Sarno',
          'Nick Giannopoulos',
          'Narayana Garner',
          'Anita Gros',
          'Megan Smith',
          'Tsvetko Metzger',
          'Hector Simek',
          'Some-guy withalongalastaname'
        ];
        return contacts.map(function (c, index)
        {
            var cParts = c.split(' ');
            var contact = {
                name: c,
                email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
                image: 'http://lorempixel.com/50/50/people?' + index
            };
            contact._lowername = contact.name.toLowerCase();
            return contact;
        })
    }


    $scope.$watch('dateFrom', function (newValue)
    {
        $scope.project.FromDate = $filter('date')(newValue, 'yyyy/MM/dd');
    });

    $scope.$watch('project.FromDate', function (newValue)
    {

        $scope.dateFrom = new Date(newValue);
    });

    $scope.$watch('dateTo', function (newValue)
    {
        $scope.project.ToDate = $filter('date')(newValue, 'yyyy/MM/dd');
    });

    $scope.$watch('project.ToDate', function (newValue)
    {
        $scope.dateTo = new Date(newValue);
    });








    $scope.hide = function ()
    {
        $mdDialog.hide();
    };
    $scope.cancel = function ()
    {
        $mdDialog.cancel();
    };
    $scope.create = function (project)
    {
        $mdDialog.hide(project);
    };


};