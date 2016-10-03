angular.module('leaveManagement')
  .service('UserService', ['$http', function ($http) {
      this.userDetails = {};
      this.getUserDetails = function () {
          return this.userDetails;
      }
  }]);