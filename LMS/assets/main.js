/// <reference path="templates/LoginTemplate.html" />
var app = angular.module('leaveManagement', ['ngRoute'])


app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "assets/templates/LoginTemplate.html",
        controller:'loginController'
    })
    .when("/dashboard", {
        templateUrl: "assets/templates/DashboardTemplate.html",
        controller: 'dashboardController'
    })
    .when("/approve", {
        templateUrl: "assets/templates/ApproveLeaveTemplate.html",
        controller: 'approverController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
