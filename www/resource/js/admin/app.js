AV.initialize(
  'wjngspg86tk061ckslkvw5osfz8b2x21mysmqba7f5dsd27p',
  'svfgq5camdvd7fzebf3bwswtwd3hqglfhf4y5v7rgmz3evta',
  'ocys0w9m56wv5b6xpcsioda17u44x608dc00b9emadj51z1q');

angular.module('app', ['ngRoute', 'utils', 'normal'])
  .config(['$routeProvider', function ($routeProvider) {
    for (var i = 0; i < config.models.length; i++) {
      var key = config.models[i];
      $routeProvider.when('/' + key.name, {
        templateUrl: 'resource/views/normal.html',
        controller: 'NormalListCtrl'
      })
    }

    $routeProvider
      .when('/404', {
        templateUrl: 'resource/views/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  }])
  .controller('sidebarCtrl', function ($scope) {
    $scope.routes = config.models;
  });