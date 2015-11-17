'use strict';
app.factory('ProjectsService', function ()
{
    var projects =
[
  {
      "_id": "564b5a6db0f8cdf782ac1b18",
      "Name": "XMX Z18R",
      "Manager": {
          "FirstName": "Holden",
          "LastName": "REILLY",
          "Company": "nin10do",
          "Email": "holden_reilly@nin10do.com"
      },
      "FromDate": "Thu Feb 07 2013 20:22:07 GMT+0000 (UTC)",
      "ToDate": "Tue Sep 22 1992 18:28:41 GMT+0000 (UTC)",
      "Participants": [
        {
            "FirstName": "Kaitlin",
            "LastName": "HOWARD",
            "Company": "nin10do",
            "Email": "kaitlin_howard@nin10do.com"
        },
        {
            "FirstName": "Shelley",
            "LastName": "RATLIFF",
            "Company": "nin10do",
            "Email": "shelley_ratliff@nin10do.com"
        },
        {
            "FirstName": "Foster",
            "LastName": "HERRING",
            "Company": "nin10do",
            "Email": "foster_herring@nin10do.com"
        },
        {
            "FirstName": "Rowe",
            "LastName": "LARA",
            "Company": "nin10do",
            "Email": "rowe_lara@nin10do.com"
        },
        {
            "FirstName": "Betsy",
            "LastName": "WILDER",
            "Company": "nin10do",
            "Email": "betsy_wilder@nin10do.com"
        }
      ],
      "State": "In Progress"
  },
  {
      "_id": "564b5a6d64499aee6fe60ea3",
      "Name": "XMX Z29R",
      "Manager": {
          "FirstName": "Marla",
          "LastName": "SCHMIDT",
          "Company": "nin10do",
          "Email": "marla_schmidt@nin10do.com"
      },
      "FromDate": "Sat Jan 29 2000 01:48:35 GMT+0000 (UTC)",
      "ToDate": "Sun Aug 07 1994 06:46:46 GMT+0000 (UTC)",
      "Participants": [
        {
            "FirstName": "Kaitlin",
            "LastName": "HOWARD",
            "Company": "nin10do",
            "Email": "kaitlin_howard@nin10do.com"
        },
        {
            "FirstName": "Shelley",
            "LastName": "RATLIFF",
            "Company": "nin10do",
            "Email": "shelley_ratliff@nin10do.com"
        },
        {
            "FirstName": "Foster",
            "LastName": "HERRING",
            "Company": "nin10do",
            "Email": "foster_herring@nin10do.com"
        },
        {
            "FirstName": "Rowe",
            "LastName": "LARA",
            "Company": "nin10do",
            "Email": "rowe_lara@nin10do.com"
        },
        {
            "FirstName": "Betsy",
            "LastName": "WILDER",
            "Company": "nin10do",
            "Email": "betsy_wilder@nin10do.com"
        }
      ],
      "State": "In Progress"
  },
  {
      "_id": "564b5a6d1a3a0d94009d712f",
      "Name": "XMX Z30R",
      "Manager": {
          "FirstName": "Jensen",
          "LastName": "RANDALL",
          "Company": "nin10do",
          "Email": "jensen_randall@nin10do.com"
      },
      "FromDate": "Sun Nov 28 1971 13:41:33 GMT+0000 (UTC)",
      "ToDate": "Tue Nov 18 1980 09:22:33 GMT+0000 (UTC)",
      "Participants": [
        {
            "FirstName": "Kaitlin",
            "LastName": "HOWARD",
            "Company": "nin10do",
            "Email": "kaitlin_howard@nin10do.com"
        },
        {
            "FirstName": "Shelley",
            "LastName": "RATLIFF",
            "Company": "nin10do",
            "Email": "shelley_ratliff@nin10do.com"
        },
        {
            "FirstName": "Foster",
            "LastName": "HERRING",
            "Company": "nin10do",
            "Email": "foster_herring@nin10do.com"
        },
        {
            "FirstName": "Rowe",
            "LastName": "LARA",
            "Company": "nin10do",
            "Email": "rowe_lara@nin10do.com"
        },
        {
            "FirstName": "Betsy",
            "LastName": "WILDER",
            "Company": "nin10do",
            "Email": "betsy_wilder@nin10do.com"
        }
      ],
      "State": "Opened"
  },
  {
      "_id": "564b5a6d3fe999cd34e89173",
      "Name": "XMX Z20R",
      "Manager": {
          "FirstName": "Shannon",
          "LastName": "TRAVIS",
          "Company": "nin10do",
          "Email": "shannon_travis@nin10do.com"
      },
      "FromDate": "Tue Jan 23 1973 07:47:42 GMT+0000 (UTC)",
      "ToDate": "Sat May 12 1979 16:13:35 GMT+0000 (UTC)",
      "Participants": [
        {
            "FirstName": "Kaitlin",
            "LastName": "HOWARD",
            "Company": "nin10do",
            "Email": "kaitlin_howard@nin10do.com"
        },
        {
            "FirstName": "Shelley",
            "LastName": "RATLIFF",
            "Company": "nin10do",
            "Email": "shelley_ratliff@nin10do.com"
        },
        {
            "FirstName": "Foster",
            "LastName": "HERRING",
            "Company": "nin10do",
            "Email": "foster_herring@nin10do.com"
        },
        {
            "FirstName": "Rowe",
            "LastName": "LARA",
            "Company": "nin10do",
            "Email": "rowe_lara@nin10do.com"
        },
        {
            "FirstName": "Betsy",
            "LastName": "WILDER",
            "Company": "nin10do",
            "Email": "betsy_wilder@nin10do.com"
        }
      ],
      "State": "Opened"
  },
  {
      "_id": "564b5a6de376bc9ef477fef6",
      "Name": "XMX Z17R",
      "Manager": {
          "FirstName": "Allen",
          "LastName": "COTTON",
          "Company": "nin10do",
          "Email": "allen_cotton@nin10do.com"
      },
      "FromDate": "Sat Mar 14 2009 21:59:35 GMT+0000 (UTC)",
      "ToDate": "Tue Sep 04 2012 16:58:17 GMT+0000 (UTC)",
      "Participants": [
        {
            "FirstName": "Kaitlin",
            "LastName": "HOWARD",
            "Company": "nin10do",
            "Email": "kaitlin_howard@nin10do.com"
        },
        {
            "FirstName": "Shelley",
            "LastName": "RATLIFF",
            "Company": "nin10do",
            "Email": "shelley_ratliff@nin10do.com"
        },
        {
            "FirstName": "Foster",
            "LastName": "HERRING",
            "Company": "nin10do",
            "Email": "foster_herring@nin10do.com"
        },
        {
            "FirstName": "Rowe",
            "LastName": "LARA",
            "Company": "nin10do",
            "Email": "rowe_lara@nin10do.com"
        },
        {
            "FirstName": "Betsy",
            "LastName": "WILDER",
            "Company": "nin10do",
            "Email": "betsy_wilder@nin10do.com"
        }
      ],
      "State": "Completed"
  }
];
    var projservice = {};

    projservice.GetAll = function ()
    {
        return projects;
    }

    projservice.Add = function (project)
    {
        projects.push({
            _id: "XYZZY",
            ProjectName: project.projectname,
            ManagerName: project.manager,
            //duration: project.fromDate.toDateString() + ' to ' + project.toDate.toDateString(),
            FromDate: project.FromDate,
            ToDate: project.ToDate,
            Participants: project.participants,
            State: "Open"
        })
    }

    return projservice;
});