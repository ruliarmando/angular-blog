angular.module('blog', [
    'ui.router',
    'controllers',
    'directives',
    'services'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: 'templates/main.html'
        })
        .state('main.index', {
            url: '/',
            templateUrl: 'templates/index.html',
            controller: 'indexCtrl',
            controllerAs: 'vm'
        })
        .state('main.post', {
            url: '/post/{id:[0-9]}',
            templateUrl: 'templates/post.html',
            controller: 'postCtrl',
            controllerAs: 'vm'
        })
        .state('main.category', {
            url: '/category/{id:[0-9]}',
            templateUrl: 'templates/category.html',
            controller: 'categoryCtrl',
            controllerAs: 'vm'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/');
}]).run(function () {
    
});

//constant
angular.module('blog').constant('configs', {
    baseUrl: 'http://localhost:5000/api'
});

angular.module('controllers', []);
angular.module('directives', []);
angular.module('services', []);
angular.module('filters', []);