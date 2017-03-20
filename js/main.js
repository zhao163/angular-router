/**
 * Created by Administrator on 2017/3/19.
 */
(function () {
	//配置
	require.config({
		baseUrl: 'js/',
		paths: {
			'angular': 'libs/angular',
			'angular-route': 'libs/angular-route',
			'jquery': 'libs/jquery-1.10.1',

			'app':'app/app',
			'AboutCtrl': 'controllers/AboutCtrl',
			'HomeCtrl': 'controllers/HomeCtrl',
			'MyCtrl': 'controllers/MyCtrl',

			'appRoute': 'route/appRoute'
		},
		shim: {
			'angular' : {
				exports : 'angular'
			},
			'angular-route' : {
				exports : 'angular-route',
				deps : ['angular']
			}
		}
	})
//加载所有模块, 启动应用
	require(['angular', 'angular-route','jquery','app','appRoute',
			'HomeCtrl', 'AboutCtrl','MyCtrl'],
		function (angular) {
			angular.bootstrap(document, ['myApp'])
		})
})()