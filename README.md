# Fluent FFmpeg UI

This is Graphical User Interface for FFmpeg based on Fluent FFmpeg API https://github.com/fluent-ffmpeg/node-fluent-ffmpeg

This application is built using on https://github.com/jgrenon/angular-desktop-app,

This project is a work in progress. There are currently no test available yet.
More features will be added as I have time available. Feel free to [contribute](https://github.com/prabhic/fluent-ffmpeg-ui#next-steps)!

# Release Notes

Currenlty I am developing and tested on mac

## Getting Started

- 1. Get the source code

You can either fork this repository and clone it to your local disk or use git branches to integrate this seed with another git repository. The later will help you get any bug fixes and improvements we put in the seed.

    $ git remote add seed git@github.com:prabhic/fluent-ffmpeg-ui.git
    $ git fetch seed
    $ git checkout -b seed seed/master

You can push a copy of the seed to your origin:

    $ git push origin seed

Merge `seed` to `master` branch:

    $ git checkout master
    $ git merge seed

  Resolve merge conflicts then push to `origin/master`:

    $ git push

- 2. In the application root, execute **npm install && grunt install**. Node-Webkit will be installed locally under ```cache/<platform>/<version>```.
- 3. To run your application, execute **grunt run**.


## More Details

https://tldrlegal.com/license/mit-license

## Next Steps

**Feel free to contribute** pull requests to improve this frame.

- Make fully functional.

## License

Project is under **MIT License**.

[LICENSE TL;DR](https://tldrlegal.com/license/mit-license)
