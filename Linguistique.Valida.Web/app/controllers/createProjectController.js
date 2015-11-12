'use strict';
app.controller('CreateProjectController', function ($scope, $mdToast, $filter, $location, $window, ProjectsService)
{
    var project = {};
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
        $window.history.back();
    };
    $scope.create = function (project)
    {
        //$scope.projects.push({
        //    _id: "563f6ee92c7cefa349767c8a",
        //    ProjectName: project.projectname,
        //    ManagerName: project.manager,
        //    //duration: project.fromDate.toDateString() + ' to ' + project.toDate.toDateString(),
        //    FromDate: project.FromDate,
        //    ToDate: project.ToDate,
        //    Participants: project.Participants,
        //    State: "Open"
        //})
        ProjectsService.Add(project)
        $mdToast.show($mdToast.simple().content('Project with name:' + project.projectname + ' added.'));
        $location.path('/Projects');
    };




});