(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.favMenuItem = null;
  service.user = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function (short_name) {
    var num = short_name.replace(/[a-z]/gi, '');
    var alpha = short_name.replace(/[^a-z]/gi, '');
    var url1 = ApiPath + '/menu_items/' + alpha + '/menu_items/' + num + '.json';
    console.log(url1);
    return $http.get(url1).then(function (response) {
        console.log(response);
      return response.data;
    });
  };

  service.saveMenuItem = function (menuItem, user) {
    console.log(menuItem, user);
      service.favMenuItem = menuItem;
      service.user = user;
  };

  service.getSavedMenuItem = function () {
    var details = {
      "user": service.user,
      "favMenuItem": service.favMenuItem
    }
      return details;
  };

  // service.getSavedMenuItem = function (menuItem) {
  //     return service.favMenuItem;
  // };

}



})();
