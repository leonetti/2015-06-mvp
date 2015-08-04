var app = angular.module('localsOnly', []);

app.controller('InputController', ['$scope', '$http', function($scope, $http) {
	$scope.data = {};
	$scope.city = 'in your city';
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