(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.itemName = "";
  boughtCtrl.itemQuantity = "";


  boughtCtrl.addItem = function () {
    ShoppingListCheckOffService.addItem(boughtCtrl.itemName, boughtCtrl.itemQuantity);
  }

  boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();

}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  toBuyCtrl.items = ShoppingListCheckOffService.getItems();

  toBuyCtrl.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
    if (toBuyCtrl.items.length == 0) {
      toBuyCtrl.errorMessage = "Everything is bought!";
    } else {
      toBuyCtrl.errorMessage = null;
    }
  };

  toBuyCtrl.errorMessage = null;
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{
    "name": "Cookies",
    "quantity": 10
  }, {
    "name": "Pack of noodles",
    "quantity": 5
  },{
    "name": "Bags of chips",
    "quantity": 2
  }, {
    "name": "Bottles of soft drinks",
    "quantity": 4
  }, {
    "name": "Chocolate cake",
    "quantity": 1
  },{
    "name": "Pack of cashews",
    "quantity": 2
  }];

  var boughtItems = [];
  var emptyBoughtErrorMessage = null;

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIndex) {
    var item = items[itemIndex];
    items.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };


}

})();
