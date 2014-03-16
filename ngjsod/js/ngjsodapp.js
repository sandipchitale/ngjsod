(function() {
    angular.module('NGJSODApp', ['NGJSOD'])
    .controller('NGJSODController', function($scope) {
        $scope.data = {
            objectName : 'document.location'
        }
    });
})();