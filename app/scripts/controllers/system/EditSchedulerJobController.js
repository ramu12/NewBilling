(function(module) {
  mifosX.controllers = _.extend(module, {
    EditSchedulerJobController: function(scope, routeParams, resourceFactory, location) {
      resourceFactory.jobsResource.getJobDetails({jobId : routeParams.id}, function(data) {
        scope.job = data;
        scope.formData = {
          displayName : data.name,
          cronExpression : data.cronExpression,
          cronDescription : data.cronDescription,
          active : data.active
        }
      });
       
      scope.cancel = function() {
        location.path('/jobs');
      } 

      scope.submit = function() {
        resourceFactory.jobsResource.update({jobId: routeParams.id}, this.formData, function(data){
          location.path('/viewschedulerjob/'+data.resourceId);
        });
      };
    }
  });
  mifosX.ng.application.controller('EditSchedulerJobController', ['$scope', '$routeParams', 'ResourceFactory', '$location', mifosX.controllers.EditSchedulerJobController]).run(function($log) {
    $log.info("EditSchedulerJobController initialized");
  });
}(mifosX.controllers || {}));
