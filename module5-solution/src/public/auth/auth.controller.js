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
      console.log("Success", response, $ctrl.user);
      if (response === null || response.data === null) {
        $ctrl.errorMsg = "No such menu number exists";
        $ctrl.successMsg = '';
      } else {
        $ctrl.successMsg = "Menu item saved"
        $ctrl.errorMsg = '';
        MenuService.saveMenuItem(response, $ctrl.user);
      }
    }, function(reason) {
      console.log("Error" + reason);
      $ctrl.errorMsg = "No such menu number exists";
      $ctrl.successMsg = '';
    });
  };
}


})();
