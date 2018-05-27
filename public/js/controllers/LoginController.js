myApp.controller('LoginController', ['$scope', '$location','$http', function($scope, $location,$http){

	$scope.formData = {};

	$scope.togglePassword = function () { $scope.typePassword = !$scope.typePassword; };

	$http.get('/api/user')
		.then(function(data) {
			$scope.users = data.data.users;
		})


// Function that sends the information data through a location server or to a database
    $scope.login = function(formData) {
    	var user = Enumerable.From($scope.users)
    		.Where(function(x) {return x.user == $scope.formData.user})
    		.Select(function(x) {return x })
    		.FirstOrDefault();
    }
}]);
