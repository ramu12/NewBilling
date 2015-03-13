(function(module) {
	mifosX.controllers = _.extend(module, {
		CreateRadServiceController : function(scope, location,  $modal, route,$http, webStorage,resourceFactory,routeParams) {

			scope.types =[{key:'K' ,value:"KB"},{key:'M',value:"MB"},{key:'G',value:"GB"}];
			scope.radiusVersion = routeParams.radiusVersion;

			scope.formData = {				 
					upType  : scope.types[0].key,
					downType  : scope.types[0].key,
					islimitcomb : false,
					renew : false,
					limitexpiration  : false
			};

			 scope.reset123 = function(){
	        	   webStorage.add("callingTab", {someString: "radService" });
	           };
	           
	          if(scope.radiusVersion == 'version-2'){
	        	   scope.serviceCodes = [];
	        	   resourceFactory.radServiceTemplateResource.query(function(data) {
	        		   scope.serviceCodes = data;
	        		   console.log(scope.serviceCodes);
	               });
	           }
			
			scope.submit = function() {
				if(scope.radiusVersion == 'version-1'){
					scope.formData.value= scope.formData.uprate + scope.formData.upType + "/"+ scope.formData.downrate + scope.formData.downType;
					delete scope.formData.downRate ;
					delete scope.formData.upRate;
				}else if(scope.radiusVersion == 'version-2'){
					scope.formData.value=scope.formData.downrate + scope.formData.downType +"/"+ scope.formData.uprate + scope.formData.upType;
					delete scope.formData.upType;
					delete scope.formData.downType;
				}
					//console.log(scope.formData.value);
			    resourceFactory.radServiceResource.save(scope.formData,function(data){
			        		  location.path('/radius/' );
			          });
			    webStorage.add("callingTab", {someString: "radService" });
				
		  };
		}
	});
	mifosX.ng.application.controller('CreateRadServiceController',[ 
	    '$scope',
	    '$location',
	    '$modal',
	    '$route',
	    '$http',
	    'webStorage',
	    'ResourceFactory',
	    '$routeParams',
	    mifosX.controllers.CreateRadServiceController 
	    ]).run(function($log) {
	    	$log.info("CreateRadServiceController initialized");
	    });
}(mifosX.controllers || {}));
