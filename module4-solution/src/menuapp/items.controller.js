(function () {
'use strict';

angular.module('data')
.controller('ItemsCtrl', ItemsCtrl);

ItemsCtrl.$inject = ['items'];
function ItemsCtrl(items) {
  var itemCtrl = this;
  console.log("In controller", items);
  itemCtrl.menuItems = items.menu_items;
  itemCtrl.items = items;
}

})();
