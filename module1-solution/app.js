(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.items = "";
  $scope.textColor = "green";

  $scope.checkIfTooMuch = function () {
    console.log($scope.items);
    $scope.message = "";
    if ($scope.items.length > 0) {
      $scope.textColor = "green";
      let array = $scope.items.split(",").map(function (value) {
                                              return value.trim();
                                          });
      console.log(array);
      console.log(array.length);
      if (array.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    } else {
      $scope.textColor = "red";
      $scope.message = "Please enter data first";
    }
  };

}

})();
