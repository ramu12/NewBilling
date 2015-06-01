ChangeOrderController = function(scope,RequestSender,routeParams,localStorageService,location) {
		  
	scope.clientId 	= routeParams.clientId || "";
	var orderId 	= routeParams.orderId || "";
  	scope.planselectionTab = true;
  	
  scope.singlePlanPricingDatas = function(singlePlanData,isPlanActive){
	  var isActive = isPlanActive;
	  if(isActive == true){
		  scope.planId = singlePlanData.planId;
		  scope.selectedPlanId = singlePlanData.planId;
		  scope.pricingDatas = singlePlanData.pricingData || [];
	  }
	  else{
		  scope.pricingDatas = [];
		  scope.selectedPlanId = "";
	  }
	  
  };
  
  scope.isSelectedPlan = function(planId){
		return planId === scope.selectedPlanId;
	};
	
  if(rootScope.selfcare_sessionData){
	RequestSender.clientResource.get({clientId: scope.clientId} , function(data) {
	  var clientData = data || {};
	  var totalOrdersData = [];
	  RequestSender.orderTemplateResource.query({region : clientData.state},function(data){
		  totalOrdersData = data;
		  
		  scope.plansData = [];
		  scope.clientOrdersData = [];
		  RequestSender.getOrderResource.get({clientId:scope.clientId},function(data){
			  scope.clientOrdersData = data.clientOrders;
			  
			  for(var i in totalOrdersData){
				  for(var j in scope.clientOrdersData){
					  
					  if(totalOrdersData[i].planId == scope.clientOrdersData[j].pdid){
						  totalOrdersData[i].pricingData = _.filter(totalOrdersData[i].pricingData, function(item) {
							  return (item.planCode != scope.clientOrdersData[j].planCode) &&
							  		  (item.duration != scope.clientOrdersData[j].contractPeriod) &&
							  		  (item.price != scope.clientOrdersData[j].price);
						  });
					  }
				  }
			  }
			  for(var j in totalOrdersData){
				if(totalOrdersData[j].isPrepaid == 'Y')scope.plansData.push(totalOrdersData[j]); 
			  }
			  scope.singlePlanPricingDatas(scope.plansData[0],true);
			  localStorageService.add("storageData",{clientData:clientData,totalOrdersData:totalOrdersData,orderId:orderId});

		  });
	  });
   });
  }
  
  scope.checkingRecurringStatus = function(planData){
		RequestSender.recurringStatusCheckingResource.get({planId:scope.planId,billFrequency:planData.billingFrequency},function(data){
			if(planData.billingFrequency == data.billFrequencyCode && planData.price == data.price){
				localStorageService.add("chargeCodeData",{data:data,orderId:orderId});
				location.path( '/paymentprocess/changeorder/'+planData.id+'/'+scope.planId+'/'+planData.price);
			}
		});
		
	};
  		
};

selfcareApp.controller('ChangeOrderController',['$scope',
                                                'RequestSender',
                                                '$routeParams',
                                                'localStorageService',
                                                '$location',
                                                ChangeOrderController]);


