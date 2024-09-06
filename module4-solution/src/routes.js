(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('category',{
    url: '/category',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoryCtrl as catList',
    resolve: {
      menuCategory: ['MenuDataService', function (MenuDataService){
        console.log("In cat resolve");
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items',{
    url: '/items/{itemsCategory}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsCtrl as itemCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                console.log("Yo", $stateParams.itemsCategory);
                return MenuDataService.getItemsForCategory($stateParams.itemsCategory);
              }]
    }
  });

}

})();
