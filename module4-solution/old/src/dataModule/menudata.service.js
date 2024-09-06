(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");


MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  // List of shopping items
  var categories = [];
  var menuItems = [];

  service.getAllCategories = function () {
    console.log("In servive");
    var deferred = $q.defer();
    $http({
      method: "GET",
      //url: (ApiBasePath + "/categories.json")
      url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
    }).then(function (response) {
      console.log("Test");
      console.log(response.data);
      categories = response.data;
      console.log(categories);
      deferred.resolve(categories);
    });

    return deferred.promise;
  };

  service.getItemsForCategory = function (categoryShortName) {
    console.log("categoryShortName: " + categoryShortName);
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items/" + categoryShortName + ".json")
    }).then(function (response) {
      console.log(response.data);
      menuItems = response.data.menu_items;
      console.log(categories);
      return categories;
    });

    return response;
  };


}

})();
