'use strict';
app.factory('TypeaheadService', function ($http)
{
    var users = [];
    var typeaheadservice = {};

    var releases = [];
    typeaheadservice.ReleaseSearch = function (querystring)
    {
        return $http.get("/api/typeahead/releases/" + querystring)
            .then(function (result)
            {
                return result.data;
            })
    }

    var users = [];
    typeaheadservice.UserSearch = function (querystring)
    {
        return $http.get("/api/typeahead/users/" + querystring)
            .then(function (result)
            {
                return result.data;
            })
    }


    var brands = [];
    typeaheadservice.BrandSearch = function (querystring)
    {
        return $http.get("/api/typeahead/brands/" + querystring)
            .then(function (result)
            {
                return result.data;
            })
    }
    
    var categories = [];
    typeaheadservice.CategorySearch = function (querystring)
    {
        return $http.get("/api/typeahead/categories/" + querystring)
            .then(function (result)
            {
                return result.data;
            })
    }

    var languages = [];
    typeaheadservice.LanguageSearch = function (querystring)
    {
        return $http.get("/api/typeahead/languages/" + querystring)
            .then(function (result)
            {
                return result.data;
            })
    }




    return typeaheadservice;
});