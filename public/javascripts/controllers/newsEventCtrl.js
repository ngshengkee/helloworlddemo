
app.controller('NewsEventCtrl',[
	'$scope','$http', 
	function($scope, $http){

	$http.get('api/events').success(function(data){

		$scope.events = data;
	});	
}])