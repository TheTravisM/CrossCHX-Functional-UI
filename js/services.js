'use strict';

/* Services */

var services = angular.module('crosschxServices', ['ngResource']);

services.factory('Physician', ['$resource', 
	function($resource){
		return $resource('physicians/:physicianId.json', {}, {
			query: {method:'GET', params:{physicianId:'physicians'}, isArray:true}
		});
	}
]);

services.factory('Patient', ['$resource', 
	function($resource){
		return $resource('patients/:patientId.json', {}, {
			query: {method:'GET', params:{patientId:'patients'}, isArray:true}
		});
	}
]);