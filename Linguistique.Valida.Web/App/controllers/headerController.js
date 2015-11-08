'use strict';
app.controller('HeaderController', function ($scope, $mdDialog, $mdToast) {
    $scope.showLogin = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/views/LoginDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
        .then(function login(data) {
            $mdToast.show($mdToast.simple().content('You tried logging in with "' + data[0] + ' , ' + data[1] + '".')); 
        }, function cancel() {
            $mdToast.show($mdToast.simple().content('You cancelled the dialog.'));
        });
    };
});
function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
    $scope.login = function (trigram,password) {
        $mdDialog.hide([trigram,password]);
    };

};