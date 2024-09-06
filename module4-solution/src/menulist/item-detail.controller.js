(function () {
'use strict';

angular.module('MenuList')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController($stateParams, items) {
  var itemDetail = this;
  var item = items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.price_large = item.price_large;
  itemDetail.description = item.description;
}

})();
