/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs');
const fse = require('fs-extra');
const { src, dest, series } = require('gulp');
const jeditor = require('gulp-json-editor');

/**
 * Copy application files to publish folder
 */
function copyApplication()
{
    return src(
        [
            '**/*',
            '.gitignore',
            '.eslintrc.json',
            '!cliter/**',
            '!db/**',
            '!gulp/**',
            '!node_modules/**',
            '!src/@api/**',
            '!src/@app/**',
            '!nest-cli.json',
            '!package.json',
            '!package-lock.json',
            '!gulpfile.js',
        ])
        .pipe(
            dest('publish/'),
        );
}

/**
 * Clean dependencies that will not used in application
 */
function editPackageJson()
{
    return src(
        [
            'package.json',
        ])
        .pipe(
            jeditor(function(json)
            {
                delete json.dependencies['@narando/nest-axios-interceptor'];
                delete json.dependencies['@nestjs-modules/mailer'];
                delete json.dependencies['@nestjs/axios'];
                delete json.dependencies['@nestjs/jwt'];
                delete json.dependencies['@nestjs/passport'];
                delete json.dependencies['handlebars'];
                delete json.dependencies['mariadb'];
                delete json.dependencies['nodemailer'];
                delete json.dependencies['passport-jwt'];
                delete json.dependencies['ts-morph'];

                delete json.devDependencies.gulp;
                delete json.devDependencies['@types/nodemailer'];
                delete json.devDependencies['@types/passport-jwt'];
                delete json.devDependencies['gulp-json-editor'];
                delete json.devDependencies['fs-extra'];

                return json;
            }),
        )
        .pipe(
            dest('publish'),
        );
}

/**
 * Delete nest-cli.json configuration that will not used in application
 */
function editNestCli()
{
    return src(
        [
            'nest-cli.json',
        ])
        .pipe(
            jeditor(function(json)
            {
                delete json['compilerOptions'];

                return json;
            }),
        )
        .pipe(dest('publish'));
}

function copyToCLI()
{
    // remove old cli application files
    fs.rmSync('../aurora-cli/src/templates/back/application', { recursive: true, force: true });
    // copy new cli application files
    return fse.copy('publish', '../aurora-cli/src/templates/back/application', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishApplication = series(
    copyApplication,
    editPackageJson,
    editNestCli,
    copyToCLI,
    clean,
);