var myApp = angular.module('calculatorApp', []);

myApp.controller('calculatorCtrl', ['$scope', function($scope){

  $scope.submitMeal = function(obj) {
      console.log(obj);

      $scope.subTotal = +obj.basemealPrice + (obj.taxRate/100);
      var tax = (obj.taxRate/100);
      var subtotal= $scope.subTotal;
      var tipPerc= (obj.tipPercentage/100);
      var tips = (obj.basemealPrice*tipPerc);
      $scope.tips= tips;
      console.log ($scope.tips);
      console.log("tips=", tips);
      var total = (subtotal+tips);
      console.log("total price=", total);
      $scope.total= +obj.basemealPrice+tips+tax;

      //$scope.tips =  200;

    //  $scope.tips= obj.basemealPrice-10; }
}
}]);
