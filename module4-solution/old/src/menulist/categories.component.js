(function () {
'use strict';

angular.module('MenuList')
.component('categories', {
  templateUrl: 'src/menulist/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
