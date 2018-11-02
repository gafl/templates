module.exports = function (config) {
    config.set({
        frameworks: [
            "jasmine-jquery", "jasmine"
        ],
        files: [ 'src/**/*.js' ],
        exclude: [],
        port: 8766,
        browsers: [ "Chrome" ],
        plugins: [
            "karma-chrome-launcher",
            "karma-jasmine",
			"karma-jasmine-jquery-2"
        ],
        autoWatch: true,
        singleRun: false,
        colors: true,
        logLevel: config.LOG_INFO,
        reporters: ['dots'],
        preprocessors: {
        },
    });
};
