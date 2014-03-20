//this is a controler that is used by a route

angular.module('tbot')
       .controller('main-controller', function($scope)
            {
                $scope.test = 'a test';
            })
       .controller('users-controller', function($scope, $timeout)
            {
                window.ang =
                    {
                        scope       : $scope
                    };

                $scope.$evalAsync(function()
                    {
                        history.pushState('{}', '', '/rest/tbot/run/Current_Users') ;
                        history.pushState('{}', '', '/aasd/123') ;
                        history.pushState('{}', '', '/123/123') ;
                    });

            });
            
// after changing the history like that Chrome goes in an infinite loop with :
//    Uncaught Error: [$rootScope:infdig] 10 $digest() iterations reached. Aborting!
//   Watchers fired in the last 5 iterations: [["fn: $locationWatch; newVal: 945; oldVal: 944"],["fn: $locationWatch; newVal: 946; oldVal: 945"],["fn: $locationWatch; newVal:...<omitted>...5D 
