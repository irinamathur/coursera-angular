(function () {
"use strict";

angular.module('public')
.controller('LoginController', LoginController);

LoginController.$inject = ['favMenuItem'];
function LoginController(favMenuItem) {
  var $ctrl = this;
  console.log("LoginCtrl" , favMenuItem);
  this.favMenuItem = favMenuItem;
  this.catShortName = favMenuItem.short_name.replace(/[^a-z]/gi, '');
}


})();
