/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
requirejs.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'angular-ui-select': '../lib/angular-ui-select/dist/select',
        'handlebars': '../lib/handlebars/handlebars',
        'text': '../lib/requirejs-text/text',
        '_': '../lib/lodash/dist/lodash',
        '$': '../lib/jquery/dist/jquery',
        'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap-tpls',
        'angular-sanitize': '../lib/angular-sanitize/angular-sanitize'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular':{
            exports: 'angular'
        },
        'angular-ui-router':{
            deps:['angular']
        },
        'handlebars':{
            exports:'Handlebars'
        },
        '_':{
            exports:'_'
        },
        'angular-bootstrap':{
            deps: ['angular', '$']
        },
        'angular-ui-select':{
            deps:['angular','angular-bootstrap']
        },
        'angular-sanitize':{
            deps:['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
