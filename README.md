NOTE: Advanced Settings not yet functional.

# Fluent FFmpeg UI

This is  GUI for FFmpeg based on fluent ffmpeg API https://github.com/fluent-ffmpeg/node-fluent-ffmpeg

This application is built using https://github.com/jgrenon/angular-desktop-app,

This project is a work in progress. Feel free to [contribute](https://github.com/prabhic/fluent-ffmpeg-ui#next-steps)!

![alt tag](https://raw.githubusercontent.com/prabhic/fluent-ffmpeg-ui/master/src/images/ScreenShot.png)

## Getting Started

- 1. In the application root, execute **npm install && grunt install**. Node-Webkit will be installed locally under ```cache/<platform>/<version>```.
- 2. To run your application, execute **grunt run**.

### Prerequisites

fluent-ffmpeg-ui is based on node-fluent-ffmpeg.  Below Prerequisites are based on https://github.com/fluent-ffmpeg/node-fluent-ffmpeg/blob/master/README.md#prerequisites

#### ffmpeg and ffprobe

fluent-ffmpeg  requires ffmpeg >= 0.9 to work. It may work with previous versions but several features won't be available (and the library is not tested with lower versions anylonger).

If the `FFMPEG_PATH` environment variable is set, fluent-ffmpeg will use it as the full path to the `ffmpeg` executable.  Otherwise, it will attempt to call `ffmpeg` directly (so it should be in your `PATH`).  You must also have ffprobe installed (it comes with ffmpeg in most distributions).  Similarly, fluent-ffmpeg will use the `FFPROBE_PATH` environment variable if it is set, otherwise it will attempt to call it in the `PATH`.

Most features should work when using avconv and avprobe instead of ffmpeg and ffprobe, but they are not officially supported at the moment.

**Windows users**: most probably ffmpeg and ffprobe will _not_ be in your `%PATH`, so you _must_ set `%FFMPEG_PATH` and `%FFPROBE_PATH`.

**Debian/Ubuntu users**: the official repositories have the ffmpeg/ffprobe executable in the `libav-tools` package, and they are actually rebranded avconv/avprobe executables (avconv is a fork of ffmpeg).  They should be mostly compatible, but should you encounter any issue, you may want to use the real ffmpeg instead.  You can either compile it from source or find a pre-built .deb package at https://ffmpeg.org/download.html (For Ubuntu, the `ppa:jon-severinsson/ffmpeg` PPA provides recent builds).

#### flvtool2 or flvmeta

If you intend to encode FLV videos, you must have either flvtool2 or flvmeta installed and in your `PATH` or fluent-ffmpeg won't be able to produce streamable output files.  If you set either the `FLVTOOL2_PATH` or `FLVMETA_PATH`, fluent-ffmpeg will try to use it instead of searching in the `PATH`.

# Release Notes

Currenlty I am developing on mac and tested on the same.

## More Details
    
    TBD

## Next Steps

**Feel free to contribute** pull requests to improve this frame.

- Make fully functional.
- Add Script Tab.

## License

Project is under **MIT License**.

[LICENSE TL;DR](https://tldrlegal.com/license/mit-license)
