var app = angular.module('localsOnly', []);

app.controller('InputController', ['$scope', '$http', function($scope, $http) {
	$scope.sendLocation = function(location) {
		$http.get('/location/' + location)
		.then(function(data) {
			console.log(data.data);
		})
	}
}]);