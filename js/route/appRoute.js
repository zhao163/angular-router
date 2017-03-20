/**
 * Created by Administrator on 2017/3/19.
 */
define(['app'], function (app) {
	return app.config(['$routeProvider', function ($routeProvider) {
		//注册路由
		$routeProvider
			.when('/home', {
				templateUrl: 'js/templates/home.html',
				controller: 'HomeCtrl'
			})
			.when('/about', {
				templateUrl: 'js/templates/about.html',
				controller: 'AboutCtrl'
			})
			.otherwise('/about')
	}])
})