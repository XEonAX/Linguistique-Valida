'use strict';
app.controller('CreateProjectController', function ($scope, $mdToast, $filter, $location, $window, ProjectsService, TypeaheadService)
{
    var project = {};
    $scope.project = project;
    $scope.dateFrom = new Date();
    $scope.dateTo = new Date();

    var self = $scope.project;

    self.participants = [];
    self.itpeople = [];
    self.steampeople = [];

    self.languages = ['FRENCH', 'GERMAN', 'JAPANESE', 'CHINESE'];

    self.UserSearch = TypeaheadService.UserSearch;
    self.ReleaseSearch = TypeaheadService.ReleaseSearch;

    $scope.LoadReleases = function ()
    {
        $scope.releases = $scope.releases || TypeaheadService.ReleaseSearch("")
            .then(function (data)
            {
                $scope.releases = data;
            });
    }


    self.querySearch = querySearch;
    self.contacts = [];
    self.filterSelected = true;
    self.contactCache = {};

    /**
     * Search for contacts.
     */
    function querySearch(query)
    {
        var result;
        if (query)
        {
            result = loadAndParseContacts(query).then(function (data)
            {
                return data.filter(createFilterFor(query))
            })
        } else
        {
            result = []
        }
        return result
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
    function parse(data)
    {
        return data.map(function (c, index)
        {
            var idcode = c.IDCode;
            if (!!self.contactCache[idcode])
            {
                return self.contactCache[idcode];
            }
            else
            {
                var contact = {
                    name: c.Name,
                    email: c.Email,
                    idcode: c.IDCode,
                    image: 'http://lorempixel.com/50/50/people?' + c.IDCode
                };
                contact._lowername = contact.name.toLowerCase();
                self.contactCache[idcode] = contact;
                return contact;
            }
        });
    }
    function loadAndParseContacts(query)
    {
        return TypeaheadService.UserSearch(query).then(parse);
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