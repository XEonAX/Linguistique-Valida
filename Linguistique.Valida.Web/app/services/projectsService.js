'use strict';
app.factory('ProjectsService', function ()
{
    var projects =
[
    {
        "_id": "56430e109b0a5f8b0ffbebef",
        "ProjectName": "XMX Z28R",
        "ManagerName": "FOSTER Fry",
        "FromDate": "Sat Nov 05 2011 07:15:55 GMT+0000 (UTC)",
        "ToDate": "Tue Nov 15 2005 15:54:18 GMT+0000 (UTC)",
        "Participants": [
          {
              "Name": "JENNINGS Dudley"
          },
          {
              "Name": "BAXTER Summer"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          }
        ],
        "State": "In Progress"
    },
  {
      "_id": "56430e10d15c99a644ec9ee3",
      "ProjectName": "XMX Z24R",
      "ManagerName": "COTTON Kathie",
      "FromDate": "Sat Apr 30 1988 19:09:26 GMT+0000 (UTC)",
      "ToDate": "Thu May 06 1982 02:56:16 GMT+0000 (UTC)",
      "Participants": [
        {
            "Name": "JENNINGS Dudley"
        },
        {
            "Name": "BAXTER Summer"
        },
        {
            "Name": "FRANKLIN Aisha"
        },
          {
              "Name": "FRANKLIN Aisha"
          }
      ],
      "State": "In Progress"
  },
  {
      "_id": "56430e10dd3658c10f50599b",
      "ProjectName": "XMX Z26R",
      "ManagerName": "WALTER Battle",
      "FromDate": "Sun Dec 02 2012 11:04:45 GMT+0000 (UTC)",
      "ToDate": "Thu Mar 24 1977 01:18:18 GMT+0000 (UTC)",
      "Participants": [
        {
            "Name": "JENNINGS Dudley"
        },
        {
            "Name": "BAXTER Summer"
        },
        {
            "Name": "FRANKLIN Aisha"
        },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          }
      ],
      "State": "Opened"
  },
  {
      "_id": "56430e10fdf7fb478316c058",
      "ProjectName": "XMX Z21R",
      "ManagerName": "MARKS Martin",
      "FromDate": "Tue May 23 2000 10:26:34 GMT+0000 (UTC)",
      "ToDate": "Sat Mar 23 2002 22:23:32 GMT+0000 (UTC)",
      "Participants": [
        {
            "Name": "JENNINGS Dudley"
        },
        {
            "Name": "BAXTER Summer"
        },
        {
            "Name": "FRANKLIN Aisha"
        },
        {
            "Name": "FRANKLIN Aisha"
        },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          }
      ],
      "State": "Opened"
  },
  {
      "_id": "56430e10f1f3540d86068660",
      "ProjectName": "XMX Z24R",
      "ManagerName": "CONRAD Mcclure",
      "FromDate": "Sun Jan 28 1996 03:17:47 GMT+0000 (UTC)",
      "ToDate": "Mon Nov 26 2012 18:49:21 GMT+0000 (UTC)",
      "Participants": [
        {
            "Name": "JENNINGS Dudley"
        },
        {
            "Name": "BAXTER Summer"
        },
        {
            "Name": "FRANKLIN Aisha"
        },
        {
            "Name": "FRANKLIN Aisha"
        },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          },
          {
              "Name": "FRANKLIN Aisha"
          }
      ],
      "State": "Completed"
  }];
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