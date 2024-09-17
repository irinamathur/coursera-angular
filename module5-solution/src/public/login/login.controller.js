(function () {
"use strict";

angular.module('public')
.controller('LoginController', LoginController);

LoginController.$inject = ['favMenuItem'];
function LoginController(favMenuItem) {
  var $ctrl = this;
  console.log("LoginCtrl" , favMenuItem);
  this.user = favMenuItem.user;
  if (favMenuItem.favMenuItem != null) {
    this.favMenuItem = favMenuItem.favMenuItem;
    this.catShortName = favMenuItem.favMenuItem.short_name.replace(/[^a-z]/gi, '');
  }
}


})();
