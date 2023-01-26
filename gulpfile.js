/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest, series } = require('gulp');
var jeditor = require("gulp-json-editor");

function defaultTask(cb)
{
    // place code for your default task here
    cb();
}

function copy()
{
    return src(
        [
            '**/*',
            '.gitignore',
            '.eslintrc.json',
            '!package.json',
            '!node_modules/**',
            '!package-lock.json',
            '!gulpfile.js',
        ])
        .pipe(
            dest('publish/'),
        );
}

function change()
{
    return src(
        [
            'package.json',
        ])
        .pipe(
            jeditor(function(json)
            {
                delete json.devDependencies.gulp;
                delete json.devDependencies['gulp-json-editor'];
                return json;
            }),
        )
        .pipe(dest('publish'));
}


exports.default = defaultTask;
exports.publish = series(
    copy,
    change,
);