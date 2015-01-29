var yyogaReports = angular.module('yyogaReports', []);

yyogaReports.controller('MainCtrl', function ($scope) {

  $scope.rawData = rep2015test;


  $scope.reports = [
    {	'id': 'api-2015-01',
    	'title': 'January 2015',
    	'url': 'https://dataclips.s3.amazonaws.com/szktumprgthfvppqphatmphlzrqd.json'},

    {	'id': 'api-2014-12',
    	'title': 'December 2014',
     	'url': 'http://'}
  ];
	$scope.selectedReport = $scope.reports[0];



  $scope.generate = function(id) {




		console.log("=====================");
		console.log($scope.chartJsData);

		//$scope.chartJsData = transformRawData($scope.rawData);
		//chart = c3.generate($scope.chartData);
  }

});