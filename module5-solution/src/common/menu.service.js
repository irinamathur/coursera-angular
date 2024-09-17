(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.favMenuItem = null;

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
    var num = short_name.match(/\d+/)[0];
    var alpha = short_name.replace(/[^a-z]/gi, '');
    var url1 = ApiPath + '/menu_items/' + alpha + '/menu_items/' + num + '.json';
    console.log(url1);
    return $http.get(url1).then(function (response) {
        console.log(response);
      return response.data;
    });
  };

  service.saveMenuItem = function (menuItem) {
    console.log(menuItem);
      service.favMenuItem = menuItem;
  };

  service.getSavedMenuItem = function (menuItem) {
      return service.favMenuItem;
  };

}



})();
