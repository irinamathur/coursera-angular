(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
  console.log("Arrived here: ", menuItems);
}

})();
