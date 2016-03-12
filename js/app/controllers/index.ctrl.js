angular.module('controllers').controller('indexCtrl', ['$scope', '$http', 'configs', '$log', function($scope, $http, configs, $log) {
    
    var vm = this;

    var baseUrl = configs.baseUrl;

    var retrievePosts = function() {
        $http.get(baseUrl + '/post')
            .success(function(data, status, headers, config) {
                vm.posts = data.objects;
            })
            .error(function(data, status, headers, config) {
                switch(status) {
                    case 401: {
                        $log.error(status + ' Not authenticated');
                        break;
                    }
                    case 500: {
                        $log.error(status + ' Internal server error');
                        break;
                    }
                }
            });
    };

    retrievePosts();
}]);