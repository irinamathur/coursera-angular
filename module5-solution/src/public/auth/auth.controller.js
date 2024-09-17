(function () {
"use strict";

angular.module('public')
.controller('AuthController', AuthController);

AuthController.$inject = ['MenuService'];
function AuthController(MenuService) {
  var $ctrl = this;
  
  $ctrl.errorMsg = '';
  $ctrl.successMsg = '';
  $ctrl.submit = function () {
    $ctrl.completed = true;
    var promise = MenuService.getMenuItem($ctrl.menu.short_name);

    promise.then(function(response) {
      console.log(response);
      $ctrl.successMsg = "Menu item saved"
      $ctrl.errorMsg = '';
      MenuService.saveMenuItem(response);
    }, function(reason) {
      console.log(reason);
      $ctrl.errorMsg = "No such menu item";
      $ctrl.successMsg = '';
    });
  };
}


})();
