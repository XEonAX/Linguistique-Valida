app.controller('ProjectsController', function ($scope, $mdDialog, $mdToast)
{
    $scope.selected = [];
    $scope.NewProject = [];
    $scope.createProject = function (ev)
    {
        $scope.NewProject = [];
        $mdDialog.show(
            {
                controller: createProjectDialogController,
                templateUrl: 'app/views/CreateProjectDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    project: $scope.NewProject
                }
            }
        )
        .then
        (
            function OK(project)
            {
                $scope.projects.push({
                    _id: "563f6ee92c7cefa349767c8a",
                    ProjectName: project.projectname,
                    ManagerName: project.manager,
                    duration: project.fromDate.toDateString() + ' to ' + project.toDate.toDateString(),
                    participants: project.participants.length,
                    state: "Open"
                })
                $mdToast.show($mdToast.simple().content(JSON.stringify(project)));
            },
            function KO()
            {
                $mdToast.show($mdToast.simple().content('You cancelled the dialog.'));
            }
        );
    };
    $scope.projects =
    [
      {
          _id: "563f6ee92c7cefa349767c8a",
          ProjectName: "XMX Z3.218x",
          ManagerName: "TATE Melva",
          duration: "09/04/2014 to 08/12/2015",
          participants: 2,
          state: "Completed"
      },
      {
          _id: "563f6ee9ec7940776f86655c",
          ProjectName: "XMX Z3.210x",
          ManagerName: "PHELPS Phoebe",
          duration: "01/21/2014 to 08/02/2014",
          participants: 5,
          state: "In Progress"
      },
      {
          _id: "563f6ee9a7a71fe5815df0d8",
          ProjectName: "XMX Z3.215x",
          ManagerName: "SALINAS Elsa",
          duration: "03/15/2014 to 08/16/2014",
          participants: 20,
          state: "In Progress"
      },
      {
          _id: "563f6ee98acbb19f655394e2",
          ProjectName: "XMX Z3.202x",
          ManagerName: "ROSA Valenzuela",
          duration: "03/29/2015 to 11/16/2014",
          participants: 8,
          state: "In Progress"
      },
      {
          _id: "563f6ee95744bc39d42e33d0",
          ProjectName: "XMX Z3.209x",
          ManagerName: "CALDERON Terra",
          duration: "03/29/2015 to 12/25/2014",
          participants: 9,
          state: "Opened"
      },
      {
          _id: "563f6ee971f953092248bcc3",
          ProjectName: "XMX Z3.209x",
          ManagerName: "NOLAN Alfreda",
          duration: "03/19/2015 to 03/18/2014",
          participants: 26,
          state: "Opened"
      },
      {
          _id: "563f6ee93bc1a02aa9fc5435",
          ProjectName: "XMX Z3.210x",
          ManagerName: "FISCHER Lynn",
          duration: "09/22/2014 to 06/16/2015",
          participants: 22,
          state: "In Progress"
      },
      {
          _id: "563f6ee9ed231addd44ecd07",
          ProjectName: "XMX Z3.214x",
          ManagerName: "LYNN Weeks",
          duration: "01/11/2015 to 03/31/2015",
          participants: 14,
          state: "Completed"
      },
      {
          _id: "563f6ee9ecbbee08eaea4340",
          ProjectName: "XMX Z3.204x",
          ManagerName: "KINNEY Gwendolyn",
          duration: "08/04/2014 to 01/19/2014",
          participants: 19,
          state: "Completed"
      },
      {
          _id: "563f6ee9fd08c7132633db0e",
          ProjectName: "XMX Z3.203x",
          ManagerName: "BUCHANAN Hoover",
          duration: "07/04/2015 to 04/29/2014",
          participants: 28,
          state: "Completed"
      },
      {
          _id: "563f6ee9a5f533833557e3da",
          ProjectName: "XMX Z1.699x",
          ManagerName: "ROJAS Randall",
          duration: "06/06/2014 to 03/17/2014",
          participants: 11,
          state: "In Progress"
      },
      {
          _id: "563f6ee9fa2d26c150279a6e",
          ProjectName: "XMX Z3.218x",
          ManagerName: "GAY Johanna",
          duration: "07/10/2015 to 02/08/2015",
          participants: 17,
          state: "Completed"
      },
      {
          _id: "563f6ee9da99443a6ac9f87d",
          ProjectName: "XMX Z3.200x",
          ManagerName: "WEAVER Riggs",
          duration: "09/16/2015 to 05/06/2015",
          participants: 18,
          state: "In Progress"
      },
      {
          _id: "563f6ee9f7eeeccef85bc9ba",
          ProjectName: "XMX Z3.208x",
          ManagerName: "GIBSON Dorothea",
          duration: "04/10/2015 to 07/10/2015",
          participants: 18,
          state: "Completed"
      },
      {
          _id: "563f6ee95986b120fb78fb87",
          ProjectName: "XMX Z1.697x",
          ManagerName: "LEE Misty",
          duration: "09/26/2015 to 10/14/2014",
          participants: 12,
          state: "Completed"
      },
      {
          _id: "563f6ee9b1fd033ba75ce03b",
          ProjectName: "XMX Z3.219x",
          ManagerName: "BAUER Boyd",
          duration: "03/24/2014 to 04/30/2014",
          participants: 28,
          state: "Opened"
      },
      {
          _id: "563f6ee9ae1fd956a4093d27",
          ProjectName: "XMX Z3.214x",
          ManagerName: "WALSH Russo",
          duration: "08/14/2015 to 09/24/2015",
          participants: 13,
          state: "Opened"
      },
      {
          _id: "563f6ee9905c1445246d8552",
          ProjectName: "XMX Z3.209x",
          ManagerName: "FARRELL Alberta",
          duration: "08/01/2014 to 04/17/2015",
          participants: 12,
          state: "Opened"
      },
      {
          _id: "563f6ee970c3b741d779f346",
          ProjectName: "XMX Z3.219x",
          ManagerName: "CARROLL Baxter",
          duration: "08/27/2014 to 01/03/2014",
          participants: 23,
          state: "Opened"
      },
      {
          _id: "563f6ee97adecf7499071ae4",
          ProjectName: "XMX Z1.697x",
          ManagerName: "ONEIL Adams",
          duration: "06/12/2014 to 02/04/2015",
          participants: 19,
          state: "Completed"
      },
      {
          _id: "563f6ee95df7a1118c390b33",
          ProjectName: "XMX Z3.207x",
          ManagerName: "WYATT Mcknight",
          duration: "08/18/2014 to 02/22/2015",
          participants: 2,
          state: "Completed"
      },
      {
          _id: "563f6ee9860c5651ec68d468",
          ProjectName: "XMX Z3.219x",
          ManagerName: "MOSS Yvette",
          duration: "10/05/2015 to 12/09/2014",
          participants: 3,
          state: "Opened"
      },
      {
          _id: "563f6ee973c11c8549ad8b3e",
          ProjectName: "XMX Z3.214x",
          ManagerName: "JOHNSON Roberta",
          duration: "06/27/2014 to 10/30/2015",
          participants: 4,
          state: "In Progress"
      },
      {
          _id: "563f6ee96babcf021d582cb6",
          ProjectName: "XMX Z3.206x",
          ManagerName: "SMITH Pierce",
          duration: "04/24/2014 to 08/09/2014",
          participants: 27,
          state: "Opened"
      },
      {
          _id: "563f6ee94941737226c99f30",
          ProjectName: "XMX Z1.696x",
          ManagerName: "SALAZAR Candace",
          duration: "10/12/2014 to 08/28/2014",
          participants: 26,
          state: "In Progress"
      }
    ];
});

function createProjectDialogController($scope, $mdDialog, project)
{
    $scope.project = project;
    var self = $scope.project;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.participants = [];
    self.itpeople = [];
    self.steampeople = [];

    self.filterSelected = true;
    self.languages = ['FRENCH','GERMAN','JAPANESE','CHINESE'];

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