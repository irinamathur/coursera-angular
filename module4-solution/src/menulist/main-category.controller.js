(function () {
'use strict';

angular.module('data')
.controller('MainMenuListController', MainMenuListController);


MainMenuListController.$inject = ['MenuDataService', 'items'];
function MainMenuListController(MenuDataService, items) {
  var mainList = this;
  mainList.categories = items;
  console.log(mainList);
}

})();
