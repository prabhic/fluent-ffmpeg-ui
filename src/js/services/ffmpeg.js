define(['./module'], function (services) {
    'use strict';

    services.factory('ffmpeg', [function() {

        var fluentffmpeg = require('fluent-ffmpeg');
        var service = {};

        console.log("creating ffmpeg service");

        service.executeComand = function(src,dst) {
           
            var inputfile = src.path;
            var outputfile = dst.path;
            
            var command = fluentffmpeg(inputfile);
            
            command.on('start', function(commandLine) {    console.log('Spawned Ffmpeg with command: ' + commandLine);});
            command.on('end', function() {    console.log('Transcoding succeeded !');});
            command.on('codecData', function(data) {    console.log('Input is ' + data.audio + ' audio ' +      'with ' + data.video + ' video');});
            command.on('progress', function(progress) {console.log('Processing: ' + progress.percent + '% done');});
            command.save(outputfile);
        }
        return service;
    }]);
});

//var fluentffmpeg = require('fluent-ffmpeg');
//var command = fluentffmpeg('/Users/prabhank/Downloads/BigBuckBunny_320x180.mp4');
//command.setFfmpegPath( '/Users/prabhank/Documents/nodeserver/opensource/fluent-ffmpeg-ui/experiments/angular-desktop-app/bin/ffmpeg/ffmpeg');
//command.setFfprobePath('/Users/prabhank/Documents/nodeserver/opensource/fluent-ffmpeg-ui/experiments/angular-desktop-app/bin/ffmpeg/ffmpeg');
//command.save('/Users/prabhank/Downloads/BigBuckBunny_320x180.avi')
//command.on('progress', function(progress) {console.log('Processing: ' + progress.percent + '% done');});
//
//command.ffprobe('/Users/prabhank/Downloads/BigBuckBunny_320x180.mp4', function(err, metadata) {    console.dir(metadata);});

