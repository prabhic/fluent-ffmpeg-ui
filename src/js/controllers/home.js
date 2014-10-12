define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('HomeCtrl', ['$scope', '$state', 'nwService', 'ffmpeg',function ($scope, $state,nwService,ffmpeg) {

        $scope.source = {path:'source file'}
        
        $scope.selectSourceFile = function() {
            
             nwService.openFileDialog({
                    accept: '.js,.xml'
                }).then(function(result) {
                    if(result) {
                        console.log("Resulting file is", result);
                        //$state.go('file_view', {path: result});
                        //set to
                        $scope.source.path = result;
                    }
                    else
                        $state.go('home');
                }, function(err){
                    console.log("An error occured", err);
                    $state.go('home');
                });
        }
        
        var loggerEnabled = false;
         $scope.runFluentCommand = function() {
             if (! loggerEnabled) {
                 loggerEnabled = true;
                (function () {
                    var old = console.log;
                    var logger = document.getElementById('consoleOutputID');
                    console.log = function (message) {
                    if (typeof message == 'object') {
                        logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
                    } else {
                        logger.innerHTML += message + '<br />';
                    }
                       
                    logger.scrollTop = logger.scrollHeight;
                   // logger.innerHTML += '<br/>  '+logger.scrollTop+'  '+logger.scrollHeight;
                    
                        
                }
            })();
             }
            ffmpeg.executeComand();
         }
         
         $scope.country = {};
  $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Åland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    {name: 'Andorra', code: 'AD'},
    {name: 'Angola', code: 'AO'},
    {name: 'Anguilla', code: 'AI'},
    {name: 'Antarctica', code: 'AQ'}
  ]
    }]);
});
