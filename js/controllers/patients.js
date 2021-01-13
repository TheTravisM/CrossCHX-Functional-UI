controllers.controller('patientsCtrl', ['$scope', 'Patient',
	function ($scope, Patient) {
		$scope.patients = Patient.query();
	}
]);

controllers.controller('patientDetailCtrl', ['$scope', '$routeParams', 'Patient',
	function ($scope, $routeParams, Patient) {
		$scope.patient = Patient.get({patientId: $routeParams.patientId}, function(patient) {
      $scope.mainImageUrl = patient.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
	}
]);