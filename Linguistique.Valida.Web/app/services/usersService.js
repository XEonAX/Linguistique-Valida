'use strict';
app.factory('UsersService', function ($http)
{
    var users = [];
    var userservice = {};

    userservice.search = function (querystring)
    {
        return $http.get("/api/users/typeahead/" + querystring)
            .then(function (result)
            {
                return result.data;
            })
    }

    return userservice;
});