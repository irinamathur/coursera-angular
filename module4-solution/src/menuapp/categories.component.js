(function () {
'use strict';

angular.module('data')
.component('categoriesItems', {
  templateUrl: 'src/menuapp/templates/categoriesItems.html',
  bindings: {
    categories: '<'
  }
});

})();
