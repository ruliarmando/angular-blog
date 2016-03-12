angular.module('controllers').controller('postCtrl', ['$scope', '$stateParams', '$http', 'configs', '$log', function($scope, $stateParams, $http, configs, $log) {
    
    var vm = this;

    var baseUrl = configs.baseUrl;

    var retrievePost = function() {
    	$http.get(baseUrl + '/post/' + $stateParams.id)
    		.success(function(data, status, headers, config) {
    			vm.post = data;
    		})
    		.error(function(data, status, headers, config) {
    			$log.error('error occured');
    		});
    };

    retrievePost();
}]);