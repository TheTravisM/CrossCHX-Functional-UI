"use strict";
var crosschx =  angular.module('crosschx', [
	'ngRoute',
	"crosschxControllers",
	"crosschxServices",
	"crosschxDirectives"
]);
crosschx.config(['$routeProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
		  .when('/summary', {
				templateUrl: 'views/summary.html',
				controller: 'summaryCtrl'
			})
			.when('/activity', {
				templateUrl: 'views/activity.html',
				controller: 'activityCtrl'
			})
			.when('/physicians', {
				templateUrl: 'views/physicians/physicians.html',
				controller: 'physiciansCtrl'
			})
			.when('/physicians/:physicianId', {
        templateUrl: 'views/physicians/physician-detail.html',
        controller: 'physicianDetailCtrl'
      })
			.when('/patients', {
				templateUrl: 'views/patients/patients.html',
				controller: 'patientsCtrl'
			})
			.when('/patients/:patientId', {
        templateUrl: 'views/patients/patient-detail.html',
        controller: 'patientDetailCtrl'
      })
			.when('/complaints', {
				templateUrl: 'views/complaints.html',
				controller: 'complaintsCtrl'
			})
			.when('/diagnoses', {
				templateUrl: 'views/diagnoses.html',
				controller: 'diagnosesCtrl'
			})
			.when('/medications', {
				templateUrl: 'views/medications.html',
				controller: 'medicationsCtrl'
			})
			.when('/more', {
				templateUrl: 'views/more.html',
				controller: 'moreCtrl'
			})
			.otherwise({
				redirectTo: '/summary'
		});
	}
]);
