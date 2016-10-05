app.controller('PiratesController', function($scope, PiratesService) {
  console.log('hits controller');
  $scope.view = {};
  $scope.view.pirates = PiratesService;
  $scope.view.all = PiratesService.all;
  });
