define(['./module'], function (services) {
    'use strict';

    services.factory('ffmpeg', [function() {

        var tungus = require('tungus');
        var fluentffmpeg = require('fluent-ffmpeg');
        var service = {};

        console.log("creating ffmpeg service");

        service.executeComand = function() {
        
            
            var ffmpegpath =  '/Users/prabhank/Documents/nodeserver/opensource/fluent-ffmpeg-ui/experiments/angular-desktop-app/bin/ffmpeg/ffmpeg';
            var inputfile = '/Users/prabhank/Downloads/BigBuckBunny_320x180.mp4';
            var outputfile = '/Users/prabhank/Downloads/BigBuckBunny_320x180.avi';
            
            var command = fluentffmpeg(inputfile);
            
            command.setFfmpegPath(ffmpegpath);
            command.setFfprobePath(ffmpegpath);
            command.on('start', function(commandLine) {    console.log('Spawned Ffmpeg with command: ' + commandLine);});
            command.on('end', function() {    console.log('Transcoding succeeded !');});
            command.on('codecData', function(data) {    console.log('Input is ' + data.audio + ' audio ' +      'with ' + data.video + ' video');});
            command.on('progress', function(progress) {console.log('Processing: ' + progress.percent + '% done');});
            command.save(outputfile);
          //  command.run();
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

