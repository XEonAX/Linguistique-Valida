'use strict';
app.controller('ProjectsController', function ($scope, $mdDialog, $mdToast, $filter, $location,$window, ProjectsService)
{
    $scope.selected = [];
    $scope.NewProject = [];
    $scope.createProject = function (ev)
    {
        $location.path('/CreateProject');
        //$scope.NewProject = [];
        //$mdDialog.show(
        //    {
        //        controller: createProjectDialogController,
        //        templateUrl: 'app/views/CreateProjectDialog.html',
        //        parent: angular.element(document.body),
        //        targetEvent: ev,
        //        clickOutsideToClose: true,
        //        locals: {
        //            project: $scope.NewProject
        //        }
        //    }
        //)
        //.then
        //(
        //    function OK(project)
        //    {
        //        $scope.projects.push({
        //            _id: "563f6ee92c7cefa349767c8a",
        //            ProjectName: project.projectname,
        //            ManagerName: project.manager,
        //            //duration: project.fromDate.toDateString() + ' to ' + project.toDate.toDateString(),
        //            FromDate: project.FromDate,
        //            ToDate: project.ToDate,
        //            Participants: project.Participants,
        //            State: "Open"
        //        })
        //        $mdToast.show($mdToast.simple().content(JSON.stringify(project)));
        //    },
        //    function KO()
        //    {
        //        $mdToast.show($mdToast.simple().content('You cancelled the dialog.'));
        //    }
        //);
    };

    $scope.projects = ProjectsService.GetAll();
    //[
    //    {
    //        "_id": "56430e109b0a5f8b0ffbebef",
    //        "ProjectName": "XMX Z28R",
    //        "ManagerName": "FOSTER Fry",
    //        "FromDate": "Sat Nov 05 2011 07:15:55 GMT+0000 (UTC)",
    //        "ToDate": "Tue Nov 15 2005 15:54:18 GMT+0000 (UTC)",
    //        "Participants": [
    //          {
    //              "Name": "JENNINGS Dudley"
    //          },
    //          {
    //              "Name": "BAXTER Summer"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          }
    //        ],
    //        "State": "In Progress"
    //    },
    //  {
    //      "_id": "56430e10d15c99a644ec9ee3",
    //      "ProjectName": "XMX Z24R",
    //      "ManagerName": "COTTON Kathie",
    //      "FromDate": "Sat Apr 30 1988 19:09:26 GMT+0000 (UTC)",
    //      "ToDate": "Thu May 06 1982 02:56:16 GMT+0000 (UTC)",
    //      "Participants": [
    //        {
    //            "Name": "JENNINGS Dudley"
    //        },
    //        {
    //            "Name": "BAXTER Summer"
    //        },
    //        {
    //            "Name": "FRANKLIN Aisha"
    //        },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          }
    //      ],
    //      "State": "In Progress"
    //  },
    //  {
    //      "_id": "56430e10dd3658c10f50599b",
    //      "ProjectName": "XMX Z26R",
    //      "ManagerName": "WALTER Battle",
    //      "FromDate": "Sun Dec 02 2012 11:04:45 GMT+0000 (UTC)",
    //      "ToDate": "Thu Mar 24 1977 01:18:18 GMT+0000 (UTC)",
    //      "Participants": [
    //        {
    //            "Name": "JENNINGS Dudley"
    //        },
    //        {
    //            "Name": "BAXTER Summer"
    //        },
    //        {
    //            "Name": "FRANKLIN Aisha"
    //        },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          }
    //      ],
    //      "State": "Opened"
    //  },
    //  {
    //      "_id": "56430e10fdf7fb478316c058",
    //      "ProjectName": "XMX Z21R",
    //      "ManagerName": "MARKS Martin",
    //      "FromDate": "Tue May 23 2000 10:26:34 GMT+0000 (UTC)",
    //      "ToDate": "Sat Mar 23 2002 22:23:32 GMT+0000 (UTC)",
    //      "Participants": [
    //        {
    //            "Name": "JENNINGS Dudley"
    //        },
    //        {
    //            "Name": "BAXTER Summer"
    //        },
    //        {
    //            "Name": "FRANKLIN Aisha"
    //        },
    //        {
    //              "Name": "FRANKLIN Aisha"
    //        },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          }
    //      ],
    //      "State": "Opened"
    //  },
    //  {
    //      "_id": "56430e10f1f3540d86068660",
    //      "ProjectName": "XMX Z24R",
    //      "ManagerName": "CONRAD Mcclure",
    //      "FromDate": "Sun Jan 28 1996 03:17:47 GMT+0000 (UTC)",
    //      "ToDate": "Mon Nov 26 2012 18:49:21 GMT+0000 (UTC)",
    //      "Participants": [
    //        {
    //            "Name": "JENNINGS Dudley"
    //        },
    //        {
    //            "Name": "BAXTER Summer"
    //        },
    //        {
    //            "Name": "FRANKLIN Aisha"
    //        },
    //        {
    //              "Name": "FRANKLIN Aisha"
    //        },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          },
    //          {
    //              "Name": "FRANKLIN Aisha"
    //          }
    //      ],
    //      "State": "Completed"
    //  }
    //];

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