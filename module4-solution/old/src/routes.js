(function () {
'use strict';

angular.module('MenuList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menulist/templates/categories.template.html',
    controller: 'MainMenuListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        console.log('Here');
        console.log(MenuDataService.getAllCategories());
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/menulist/templates/items.template.html',
    controller: "ItemsController as itemsList"
  });

}

})();
