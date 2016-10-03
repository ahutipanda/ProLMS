/// <reference path="templates/LoginTemplate.html" />
var app = angular.module('loginApp', [])


app.controller('loginController', ['$scope', '$http', 'GraphHelper', function ($scope, $http, GraphHelper) {
    function initAuth() {

        // Check initial connection status.
        if (localStorage.auth) {
            processAuth();
        } else {
            var auth = hello('aad').getAuthResponse();
            if (auth !== null) {
                localStorage.auth = angular.toJson(auth);
                processAuth();
            }
        }
    }

    // Auth info is saved in localStorage by now, so set the default headers and user properties.
    function processAuth() {
        var auth = angular.fromJson(localStorage.auth);

        // Check token expiry. If the token is valid for another 5 minutes, we'll use it.       
        var expiration = new Date();
        expiration.setTime((auth.expires - 300) * 1000);
        if (expiration > new Date()) {

            // Add the required Authorization header with bearer token.
            $http.defaults.headers.common.Authorization = 'Bearer ' + auth.access_token;

            // This header has been added to identify our sample in the Microsoft Graph service. If extracting this code for your project please remove.
            $http.defaults.headers.common.SampleID = 'angular-connect-rest-sample';

            if (localStorage.getItem('user') === null) {

                // Get the profile of the current user.
                GraphHelper.me().then(function (response) {

                    // Save the user to localStorage.
                    var user = response.data;
                    localStorage.setItem('user', angular.toJson(user));

                    //vm.displayName = user.displayName;
                    //vm.emailAddress = user.mail || user.userPrincipalName;
                });
            } else {
                var user = angular.fromJson(localStorage.user);

                //vm.displayName = user.displayName;
                //vm.emailAddress = user.mail || user.userPrincipalName;
            }
        }
    }

    initAuth();

    function isAuthenticated() {
        return localStorage.getItem('user') !== null;
    }

    $scope.login = function() {
        GraphHelper.login();
    }

}]);
