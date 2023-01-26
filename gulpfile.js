/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest } = require('gulp');

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
            '!node_modules/**',
            '!package-lock.json',
            '!gulpfile.js',
        ],
        {
            ignore: [
            ],
        })
        .pipe(dest('publish/'));
}


exports.default = defaultTask;
exports.copy = copy;