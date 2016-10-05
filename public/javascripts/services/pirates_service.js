app.factory('PiratesService', ['$http',

function($http) {
  var factory = {};
      $http.get('/api/pirates').then(function(res){
        console.log('res data ', res.data);
        console.log('factory ', factory);
        factory.all = res.data;
      })
      console.log('factory returned ', factory);
      return factory;
    }
]);
