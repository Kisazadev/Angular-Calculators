var myApp = angular.module('myApp', []);

myApp.controller('textController', ['$scope', function($scope) {

  $scope.title = "Adsense Angular Calculator";



}]);


myApp.controller('StartupController', ['$scope', function($scope) {

  var date = new Date().getDate();

  $scope.funding = { dailycount: 0, monthcount: 0, dailyaftertax: 0, monthlyaftertax: 0 };


  var computeDaily = function() {
    $scope.funding.dailyaftertax = (($scope.funding.dailycount + 28) / 1.33);
  };

  var computeMonthly = function() {
    $scope.funding.monthlyaftertax = (28 + $scope.funding.monthcount / date) / 1.33;
  };

  $scope.$watch('funding.dailycount', computeDaily);
  $scope.$watch('funding.monthcount', computeMonthly);
}]);
