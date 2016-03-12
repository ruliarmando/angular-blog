angular.module('controllers').controller('loginCtrl', ['$scope', function($scope) {
    
    var vm = this;

    vm.login = function(username, password) {
    	alert(username + ' ' + password);
    };
}]);