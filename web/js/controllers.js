var yyogaReports = angular.module('yyogaReports', []);

yyogaReports.controller('MainCtrl', function ($scope) {
 

  $scope.reports = [
    {	'id': 'api-2015-01',
    	'title': 'January 2015',
    	'url': 'http://'},

    {	'id': 'api-2014-12',
    	'title': 'December 2014',
     	'url': 'http://'}
  ];

	$scope.selectedReport = $scope.reports[0];

  $scope.generate = function(id) {
  	console.log($scope.reports);
  }




    $scope.LoadPoints = [{ Id: '1', Text: 'loadPointA' },{ Id: '2', Text: 'loadPointB' }];
    
    $scope.cargo = {
        CargoItems: [{
            LoadPoint: $scope.LoadPoints[0]
        }, {
            LoadPoint: $scope.LoadPoints[1]
        }]
    }



});