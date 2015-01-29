var yyogaReports = angular.module('yyogaReports', []);

var transformRawData = function(rawJson) {
		var resultData = {};
		resultData.labels = [];
		resultData.datasets = [];
		resultData.datasets[0] = [];
		resultData.datasets[0].data = [];
		resultData.datasets[0].fillColor = "rgba(151,187,205,1)";
		resultData.datasets[0].strokeColor = "rgba(151,187,205,0.8)";
		resultData.datasets[0].highlightFill = "rgba(151,187,205,0.75)";
		resultData.datasets[0].highlightStroke = "rgba(151,187,205,1)";

		for (var i=0; i<rawJson.values.length; i++) {
			var val = rawJson.values[i];
			var label = val[1];
			resultData.labels.push(label);
			var dataItem = val[2];
			resultData.datasets[0].data.push(dataItem);
		}

		return resultData;
} 

var chartDiv = document.getElementById("chart").getContext("2d");

yyogaReports.controller('MainCtrl', function ($scope) {

  $scope.rawData = {
		"fields":["date","name","count"],
		"types":[1114,1043,20],
		"values":[
			["2015-01-04 00:00:00","APIUsage-AddOrUpdateClients",				100],
			["2015-01-04 00:00:00","APIUsage-FunctionDataXml-getVisits",200],
			["2015-01-04 00:00:00","APIUsage-GetClassDescriptions",			100],
			["2015-01-04 00:00:00","APIUsage-GetClasses",								120],
			["2015-01-04 00:00:00","APIUsage-GetClientSchedule",				100],
			["2015-01-04 00:00:00","APIUsage-GetClientServices",				250],
			["2015-01-04 00:00:00","APIUsage-GetLocations",							100],
			["2015-01-04 00:00:00","APIUsage-ValidateLogin",						200]
		]
	};

  $scope.reports = [
    {	'id': 'api-2015-01',
    	'title': 'January 2015',
    	'url': 'http://'},

    {	'id': 'api-2014-12',
    	'title': 'December 2014',
     	'url': 'http://'}
  ];
	$scope.selectedReport = $scope.reports[0];
	$scope.chartJsData = transformRawData($scope.rawData);

  $scope.generate = function(id) {
		console.log("=====================");
		console.log($scope.chartJsData);

		new Chart(chartDiv).Bar($scope.chartJsData, {
		    barShowStroke: false
		});
  }

});