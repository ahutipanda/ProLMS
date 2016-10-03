angular.module('leaveManagement')
  .service('ApiService', ['$http','$q', function ($http,$q) {
      var get = function (url, data) {
          var deferred = $q.defer();
          url = url + "?emailId=" + data;
          //params = {
          //    emailId : data
          //}
          $http.get(url).then(function (result) {
              if (true) {
                  deferred.resolve(result);
              }
              else {
                  deferred.reject(result);

              }

          }, function (error) {

              deferred.reject(error);
          });

          return deferred.promise;
      }

      this.getDetails = function (url, data) {
          return get(url, data);
      }

  }]);