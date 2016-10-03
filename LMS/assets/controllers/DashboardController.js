var app = angular.module('leaveManagement')
app.controller('dashboardController', ['$scope', 'GraphHelper', 'UserService', 'ApiService', function ($scope, GraphHelper, UserService, ApiService) {

    console.log(UserService.getUserDetails());
    
}]);