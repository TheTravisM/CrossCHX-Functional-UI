controllers.controller('physiciansCtrl', ['$scope', "Physician",
	function ($scope, Physician) {
		$scope.physicians = Physician.query();
	}
]);

controllers.controller('physicianDetailCtrl', ['$scope', '$routeParams', "Physician",
	function ($scope, $routeParams, Physician) {
		$scope.physician = Physician.get({physicianId: $routeParams.physicianId}, function(physician) {
      $scope.mainImageUrl = physician.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
	}
]);