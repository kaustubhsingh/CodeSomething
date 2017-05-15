(function(){
    'use strict';
    
    angular.module('AngularApp', [])
    
    .controller('Controller1', function($scope){
        
            $scope.showToolTip = false;
            $scope.value = 'A count of viewable impressions';
            
            $scope.hideToolTip = function(){
				
				$scope.showToolTip = false;
			}
			
			$scope.toggleToolTip = function(e) {
				e.stopPropagation();
				$scope.showToolTip = !$scope.showToolTip;
				
			}
            
        });
    
    })();
