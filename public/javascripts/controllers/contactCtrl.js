
app.controller('ContactCtrl',[
	'$scope','$http',
	function($scope,$http){

	// $http.get('json/contact.json').then(function(res){
	// 	$scope.slides = res.data.slides;
	// })

	$scope.url = 'submit.php';

    $scope.formsubmit = function(isValid) {
        if (isValid) {
            $http.post($scope.url, {"name": $scope.name, "email": $scope.email, "message": $scope.message}).
            success(function(data, status) {
                console.log(data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data; 
            })
        }else{
            alert('Form is not valid');
        }
    }
}])
