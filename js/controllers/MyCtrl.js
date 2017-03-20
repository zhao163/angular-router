/**
 * Created by Administrator on 2017/3/19.
 */

define(['app','jquery'],function (app,$) {
	return app.controller('MyCtrl',['$scope',function () {
		$(function () {
			$('ul').on('click','a',function () {
				$(this).addClass('active').siblings().removeClass('active')
			})
		})
	}])
})