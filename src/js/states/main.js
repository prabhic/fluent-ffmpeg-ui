/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./module'], function (states) {
    'use strict';

    return states.config(['$stateProvider', '$urlRouterProvider', 'viewProvider',
        function ($stateProvider, $urlRouterProvider, viewProvider) {
            $stateProvider.state('home', {
                url: '/home',

                views: {

                    // the main template will be placed here (relatively named)
                    '': {
                        template: viewProvider.renderView('home'),
                        controller: 'HomeCtrl'
                    },

                    // the child views will be defined here (absolutely named)
                    'commandView@home': {
                        template: 'Look I am a column!'
                    },

                    // for column two, we'll define a separate controller 
                    'commandOutput@home': {
                        template: viewProvider.renderView('command-output'),
                        controller: 'OutputCtrl'
                    }
                }
            });

    }]);
});