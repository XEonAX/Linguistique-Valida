﻿'use strict';
app.controller('HeaderController', function ($scope, $mdDialog, $mdToast)
{
    $scope.showLogin = function (ev)
    {
        $mdDialog.show({
            controller: loginDialogController,
            templateUrl: 'app/views/LoginDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
        .then(function login(user)
        {
            $mdToast.show($mdToast.simple().content('You tried logging in with "' + user.trigram + ' , ' + user.password + '".'));
        }, function cancel()
        {
            $mdToast.show($mdToast.simple().content('You cancelled the dialog.'));
        });
    };
});
function loginDialogController($scope, $mdDialog)
{
    $scope.hide = function ()
    {
        $mdDialog.hide();
    };
    $scope.cancel = function ()
    {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer)
    {
        $mdDialog.hide(answer);
    };
    $scope.login = function (user)
    {
        $mdDialog.hide(user);
    };

};