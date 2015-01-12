(function(module) {
  mifosX.controllers = _.extend(module, {
    OfficesController: function(scope, resourceFactory,location,PermissionService,webStorage) {

		    scope.offices = [];
			scope.isTreeView = false;

			var idToNodeMap = {};

			scope.PermissionService = PermissionService;
      

		  var callingTab = webStorage.get('callingTab', null);
			if (callingTab == null) {
				callingTab = "";
			} else {
				scope.displayTab = callingTab.someString;
				if (scope.displayTab == "Partners") {
					scope.PartnersTab = true;
					webStorage.remove('callingTab');
				}
			}
      
			   scope.routeTo = function(id) {
				location.path('/viewoffice/' + id);
			};
			

			      scope.deepCopy = function(obj) {
				if (Object.prototype.toString.call(obj) === '[object Array]') {
					var out = [], i = 0, len = obj.length;
					for (; i < len; i++) {
						out[i] = arguments.callee(obj[i]);
					}
					return out;
				}
				if (typeof obj === 'object') {
					var out = {}, i = 0;
					for (i in obj) {
						out[i] = arguments.callee(obj[i]);
					}
					return out;
				}
				return obj;
			};

			   scope.getOffices = function() {
				resourceFactory.officeResource.getAllOffices(function(data) {
					scope.offices = scope.deepCopy(data);
					for ( var i in data) {
						data[i].children = [];
						idToNodeMap[data[i].id] = data[i];
					}
					function sortByParentId(a, b) {

						return a.parentId - b.parentId;
					}
					data.sort(sortByParentId);

					var root = [];
					for ( var i = 0; i < data.length; i++) {
						var currentObj = data[i];
						if (currentObj.children) {
							currentObj.collapsed = "true";
						}
						if (typeof currentObj.parentId === "undefined") {
							root.push(currentObj);
						} else {
							parentNode = idToNodeMap[currentObj.parentId];
							parentNode.children.push(currentObj);
						}
					}
					scope.treedata = root;
				});

			};  
     
			 scope.getPartners = function() {
				 scope.isTreeView = false;
				 resourceFactory.partnerResource.query(function(data) {
					 scope.partners =data;
				 });
			};
			
			 scope.routeToPartner = function(id) {
					location.path('/viewpartner/' + id);
				};
    
    }
  });
  mifosX.ng.application.controller('OfficesController', ['$scope', 'ResourceFactory','$location','PermissionService','webStorage', mifosX.controllers.OfficesController]).run(function($log) {
    $log.info("OfficesController initialized");
  });
}(mifosX.controllers || {}));
