var app = angular.module('localsOnly', []);

app.controller('InputController', ['$scope', '$http', function($scope, $http) {
	$scope.data = {};
	$scope.planner = {};
	$scope.city = 'in your city';
	$scope.restaurants = true;
	$scope.clubs = true;
	$scope.bars = true;
	$scope.stores = true;
	$scope.parks = true;
	$scope.tourists = true;
	$scope.yoga = true;


	$scope.sendLocation = function(location) {
		$scope.city = location;
		$http.get('/location/' + location)
		.then(function(data) {
			$scope.data = data.data;
			console.log($scope.data);
		})
		$scope.location = '';
	}

}]);

